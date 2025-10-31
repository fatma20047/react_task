import style from './Footer.module.css'

function Footer() {
  return <>
      <footer className={`${style.footer} py-5 text-center text-white`}>
        <div className="container">
          <div className="row">

            <div className="col-md-4 mb-4">
              <h4 className="text-uppercase mb-3">Location</h4>
              <p>2215 John Daniel Drive<br/>Clark, MO 65243</p>
            </div>

            <div className="col-md-4 mb-4">
              <h4 className="text-uppercase mb-3">Around the Web</h4>
              <p>Social links here</p>
            </div>

            <div className="col-md-4 mb-4">
              <h4 className="text-uppercase mb-3">About Freelancer</h4>
              <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap.</p>
            </div>

          </div>
        </div>
      </footer>
    </>
}

export default Footer;
