import { formatPrediction } from '../utils'

type Props = {
  prediction: string
}

function Result({ prediction }: Props) {
  // eslint-disable-next-line no-restricted-globals
  return (
    <section className="max-w-screen-xl mx-auto py-10 px-10 prose">
      <h2 id="result">Result</h2>
      <p className="text-success">{formatPrediction(prediction)}</p>

      <h2>Our Recommendations</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        non delectus, esse commodi praesentium cumque perferendis beatae
        deleniti quo mollitia enim, provident incidunt asperiores rerum!
      </p>
    </section>
  )
}

export default Result
