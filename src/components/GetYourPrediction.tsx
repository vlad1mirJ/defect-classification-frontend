import CMS from '../const'

function GetYourPrediction() {
  return (
    <article>
      <h3 className="text-2xl">{CMS.step3.title}</h3>
      <p>{CMS.step3.text} </p>
    </article>
  )
}

export default GetYourPrediction
