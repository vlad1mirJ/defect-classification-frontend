import { ChangeEvent, FormEvent, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Guide from '../components/Guide'
import UploadForm from '../components/UploadForm'
import Result from '../components/Result'

function Home() {
  const [prediction, setPrediction] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmited, setIsSubmited] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    if (file) {
      formData.append('image', file)

      try {
        setIsLoading(true)
        const url = 'https://defect-classification-api.fly.dev/predict'
        const result = await fetch(url, {
          method: 'POST',
          body: formData,
        })
        const data = await result.json()
        setPrediction(data.prediction)
        setIsLoading(false)
        setIsSubmited(true)
        // eslint-disable-next-line no-restricted-globals
        location.href = '#footer'
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }
  }

  const handleReset = () => {
    setFile(null)
    setPrediction('')
    setIsSubmited(false)
  }

  return (
    <>
      <Header />
      <Hero />
      <Guide />
      <UploadForm
        file={file}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        isLoading={isLoading}
        isSubmited={isSubmited}
      />
      {prediction && <Result prediction={prediction} />}
      <Footer />
    </>
  )
}

export default Home
