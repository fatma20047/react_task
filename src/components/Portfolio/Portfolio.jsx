import img1 from './../../assets/img/Portfolio/cabin.png'
import img2 from './../../assets/img/Portfolio/cake.png'
import img3 from './../../assets/img/Portfolio/circus.png'
import img4 from './../../assets/img/Portfolio/game.png'
import img5 from './../../assets/img/Portfolio/safe.png'
import img6 from './../../assets/img/Portfolio/submarine.png'
import style from './Portfolio.module.css'

function Portfolio() {
  return <>
    <section className={`container my-5 text-center`}>
      <h2 className={`mb-4`}>Portfolio</h2>

      <div className={`row justify-content-center g-4 ${style.portfolio}`}>

        <div className={`col-12 col-md-6 col-lg-4`}>
          <img src={img1} alt="" className={`img-fluid ${style.portfolio} `} />
        </div>

        <div className={`col-12 col-md-6 col-lg-4`}>
          <img src={img2} alt="" className={`img-fluid ${style.portfolio} `} />
        </div>

        <div className={`col-12 col-md-6 col-lg-4`}>
          <img src={img3} alt="" className={`img-fluid  ${style.portfolio}`} />
        </div>

        <div className={`col-12 col-md-6 col-lg-4`}>
          <img src={img4} alt="" className={`img-fluid ${style.portfolio} `} />
        </div>

        <div className={`col-12 col-md-6 col-lg-4`}>
          <img src={img5} alt="" className={`img-fluid ${style.portfolio} `} />
        </div>

        <div className={`col-12 col-md-6 col-lg-4`}>
          <img src={img6} alt="" className={`img-fluid ${style.portfolio} `} />
        </div>
        
      </div>
    </section>
  </>
}

export default Portfolio;
