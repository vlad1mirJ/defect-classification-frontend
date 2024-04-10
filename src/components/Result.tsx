import { formatPrediction, getRecommendations } from '../utils'

type Props = {
  prediction: string
}

function Result({ prediction }: Props) {
  // eslint-disable-next-line no-restricted-globals
  const recommendations = getRecommendations(prediction)
  return (
    <section className="max-w-screen-xl mx-auto py-10 px-10 prose">
      <h2 id="result">Result</h2>
      <p className="text-success">{formatPrediction(prediction)}</p>

      {recommendations && (
        <>
          <h2>Our Recommendations</h2>
          <ul>
            {recommendations.map((rec) => (
              <li key={rec}>{rec}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}

export default Result
