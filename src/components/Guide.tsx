import GetYourPrediction from './GetYourPrediction'
import PrepareImage from './PrepareImage'
import UploadAndSubmit from './UploadAndSubmit'

function Guide() {
  return (
    <section
      className="max-w-screen-xl mx-auto prose bg-base-100 px-10 py-10 flex flex-col"
      id="guide"
    >
      <h2 className="text-4xl self-center mb-0">How to use</h2>
      <PrepareImage />
      <UploadAndSubmit />
      <GetYourPrediction />
    </section>
  )
}

export default Guide
