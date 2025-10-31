import style from './Contact.module.css'

function Contact() {
  return <>
      <section className={`py-5`}>
        <div className={`container text-center`}>
          <h2 className={`text-uppercase mb-4`}>Contact Me</h2>

          <form className={`${style.contact} d-flex flex-column justify-content-center align-items-center mx-auto`}>
            <input type="text" className={`border-0 border-bottom w-100 mb-3`} placeholder="Full Name" />
            <input type="email" className={`border-0 border-bottom w-100 mb-3`} placeholder="Email Address" />
            <input type="number" className={`border-0 border-bottom w-100 mb-3`} placeholder="Phone Number" />
            <textarea rows="4" className={`border-0 border-bottom w-100 mb-3`} placeholder="Message"></textarea>

            <div className={`w-100 text-start`}>
              <button className={` ${style.btnTurquoise} btn px-4`}>Send</button>
            </div>
          </form>
        </div>
      </section>
    </>

}

export default Contact;
