function Hero() {
  return (
    <section className="hero min-h-screen bg-base-200 ">
      <div className="hero-content text-center">
        <div className="max-w-xl prose">
          <h1 className="text-5xl font-bold my-3">Know Your Defect</h1>
          <p>
            KYD is a classification model that will help you to figure out what
            kind defect of is present in your X-ray weld image and will provide
            general recommendations on how to avoid it
          </p>
          <a href="#guide" className="btn btn-primary" type="button">
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
