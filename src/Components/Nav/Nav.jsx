
import { Link } from "react-router-dom"
import style from "./Nav.module.css"
import { useEffect, useState } from "react";

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false)
    function togleMenu() {
        if (isOpen == false) {
            setIsOpen(true);
            console.log('open')
            document.querySelector('#open').classList.replace('d-block','d-none')
            document.querySelector('#close').classList.replace('d-none','d-block')
            document.querySelector(`.${style.aside}`).classList.add(`${style.open}`)
            document.querySelector(`.${style.aside}`).classList.remove(`${style.close}`)


        } else {
            setIsOpen(false);
            document.querySelector('#close').classList.replace('d-block','d-none')
            document.querySelector('#open').classList.replace('d-none','d-block')
            console.log('close')
            document.querySelector(`.${style.aside}`).classList.add(`${style.close}`)
            document.querySelector(`.${style.aside}`).classList.remove(`${style.open}`)





        }

    }


    return <>
        <nav className="navbar navbar-expand-lg bg-white  py-1">
            <div className="container ">
                <span className="navbar-brand fs-1 h1">A.</span>
                <div onClick={togleMenu} >
                    <div id="open" className="d-block">
                        <i className={`fa-solid fa-bars fs-4 ${style.smallButton}`}></i>
                    </div>
                    <div id="close" className="d-none">
                        <i className={`fa-solid fa-x  fs-4 ${style.smallButton}`}></i>
                    </div>
                </div>

                <div className={`  ${style.aside}`} >
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