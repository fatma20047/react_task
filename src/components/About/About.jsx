import style from './About.module.css'

function About() {
  return <>
    <section className={`text-center text-white py-5 ${style.about}`}>
      <div className={`container `}>
        <h2 className={`text-uppercase fw-bold mb-4 text-white `}>About</h2>

        <div className={`row justify-content-center`}>
          <div className={`col-md-4`}>
            <p>
              Freelancer is a free bootstrap theme created by Start Bootstrap.
              The download includes the complete source files including HTML, CSS, and JavaScript
              as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className={`col-md-4`}>
            <p>
              You can create your own custom avatar for the masthead, change the icon in the dividers,
              and add your email address to the contact form to make it fully functional!
            </p>
          </div>
        </div>

        <button className={`btn border-2 mt-4 btn-outline-light`}>
          <i className={`bi bi-download me-2 text-white`}></i> Free Download!
        </button>
      </div>
    </section>
  </>
}

export default About;
