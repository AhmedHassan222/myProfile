
import { Link } from "react-router-dom"
import style from "./Nav.module.css"

export default function Nav() {


    return <>
        <nav className="navbar navbar-expand-lg bg-white  py-1">
            <div className="container">
                <span className="navbar-brand fs-1 h1">A.</span>
                <button className={`border-0 bg-transparent fs-5 ${style.smallButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className={`collapse navbar-collapse `} id="navbarSupportedContent">
                    <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 fw-bold ${style.smallview}`}>
                        <li className="nav-item">
                            <Link className={`nav-link mx-3 ${style.linkStyle}`} to='' >HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link mx-3 ${style.linkStyle}`} to='about'>ABOUT</Link>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link mx-3 ${style.linkStyle}`} to='project'>PROJECTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link mx-3 ${style.linkStyle}`} to="contact">CONTACT</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </>
}