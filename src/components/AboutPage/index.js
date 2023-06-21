import './index.css'

const AboutPage = () => (
  <div className="about-container">
    <div className="about-page">
      <p className="about-heading">About Us</p>
      <p className="about-para">
        With over 3 years of experience ,we at Incubyte specialize in setting up
        captive developments of center for growing startups, addressing key
        challenges and providing tailor-made solutions for your business needs
      </p>
    </div>
    <div className="our-page">
      <p className="our-heading">Our Expertise</p>
      <div className="page-container">
        <div className="page">
          <p className="page-heading">Hiring</p>
          <p className="page-para">
            Leveraging our deep understanding of the talent landscape, we devise
            effective hiring strategies to attract the best tech professionals
          </p>
        </div>
        <div className="page">
          <p className="page-heading">Human Resources Management</p>
          <p className="page-para">
            We ensure a healthy and productive work environment by implementing
            efficient HR practices tailored to the unique needs of your startups
          </p>
        </div>
        <div className="page">
          <p className="page-heading">Taxation</p>
          <p className="page-para">
            Our team navigates throught the complexities of the tax system,
            ensuring compliance while optimizing financial effeciency.
          </p>
        </div>
        <div className="page">
          <p className="page-heading">Regulatory Guidance</p>
          <p className="page-para">
            We stay abreast of the ever-changing regulatory landscape, providing
            timely advice to ensure your startups operations stay within legal
            boundaries.
          </p>
        </div>
      </div>
    </div>
    <div className="success-page">
      <p className="success-heading">Success Stories</p>
      <p className="success-para">
        Over the years, we have helped numerous startups successfully establish
        their captive development centers. Join the roster of our successful
        collaboration.
      </p>
    </div>
    <div className="contact-page">
      <p className="contact-heading">Ready to Scale Up ?</p>
      <p className="contact-para">
        Experience the Incubyte advantages today. Let us help you navigate the
        challenges and scale up your operations smoothly and efficiently.
      </p>
      <button type="button" className="btn-design">
        Contact Us
      </button>
    </div>
  </div>
)

export default AboutPage
