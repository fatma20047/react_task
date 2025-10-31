import style from './Navbar.module.css'
import userImg from './../../assets/img/avataaars.svg'
function Navbar(){
return<>
    <nav className={`${style.navbars}  d-flex justify-content-between align-items-center text-white p-3 `}>
      <h1>Start Bootstrap</h1>
      <ul className=' d-flex justify-content-between p-3 m-3 gap-5'>
        <li><a href="">Portfolio</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>

    <section className={`${style.section} d-flex justify-content-center align-items-center text-center `}>
      <div>
        <img src={userImg} alt="" className={`rounded-circle p-3`} />
        <h2 className={`mt-3 fw-bold fs-1 text-white`}>Start Bootstrap</h2>
        <p className={`p-2 text-white`}>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  </>
}

export default Navbar;


