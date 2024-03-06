import weldFull from '../assets/weld-full.png'
import weldCropped from '../assets/weld-cropped.png'
import CMS from '../const'

function PrepareImage() {
  return (
    <article className="w-ful text-left">
      <h3 className="text-2xl">{CMS.step1.title}</h3>
      <p>
        {CMS.step1.text1}
        <a href="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*SsrtBx_jOTymBE5IKjwZtw.png">
          {CMS.step1.text2}
        </a>
        {CMS.step1.text3}
        <strong>{CMS.step1.text4}</strong>
        {CMS.step1.text5}
      </p>
      <div className="flex flex-col justify-center md:justify-between md:flex-row">
        <figure className="text-left">
          <img className="h-20" src={weldFull} alt="x-ray of weld" />
          <figcaption>Before</figcaption>
        </figure>
        <figure className="text-left">
          <img
            className="h-56 m-auto"
            src={weldCropped}
            alt="cropped x-ray of weld"
          />
          <figcaption>After</figcaption>
        </figure>
      </div>
    </article>
  )
}

export default PrepareImage
