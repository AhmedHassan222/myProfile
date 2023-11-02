import style from './Projects.module.css'
import reactMovieAppImage from "../../assets/react-movie-app.png"
import noxe from "../../assets/noxe.png"
import backery from "../../assets/Backery.png"
import fokir from "../../assets/Fokir.png"
import simone from "../../assets/simone.png"
import xo from "../../assets/xo.png"
import crud from "../../assets/cruds.png"
import calculator from "../../assets/calculator.png"
import AProfile from "../../assets/A..png"
import { Helmet } from 'react-helmet'
import educavo from '../../assets/educavo.png'
import eMarket from "../../assets/eMarket.png"
export default function Project() {

    function allProjects() {
        document.querySelector('#one').classList.remove('d-none')
        document.querySelector('#two').classList.remove('d-none')
        document.querySelector('#three').classList.remove('d-none')
        document.querySelector('#four').classList.remove('d-none')
        document.querySelector('#elephen').classList.remove('d-none')
        document.querySelector('#five').classList.remove('d-none')
        document.querySelector('#six').classList.remove('d-none')
        document.querySelector('#seven').classList.remove('d-none')
        document.querySelector('#eight').classList.remove('d-none')
        document.querySelector('#nine').classList.remove('d-none')
        document.querySelector('#ten').classList.remove('d-none')
        document.querySelector('#allProjects').style.cssText = 'color:#0a58ca'
        document.querySelector('#reactJS').style.cssText = 'color:black'
        document.querySelector('#AngularJS').style.cssText = 'color:black'
        document.querySelector('#JavaScript').style.cssText = 'color:black'
        document.querySelector('#LandingPage').style.cssText = 'color:black'

    }
    function reactJS() {
        document.querySelector('#one').classList.remove('d-none')
        document.querySelector('#ten').classList.remove('d-none')
        document.querySelector('#two').classList.add('d-none')
        document.querySelector('#elephen').classList.add('d-none')

        document.querySelector('#three').classList.add('d-none')
        document.querySelector('#four').classList.add('d-none')
        document.querySelector('#five').classList.add('d-none')
        document.querySelector('#six').classList.add('d-none')
        document.querySelector('#seven').classList.add('d-none')
        document.querySelector('#eight').classList.add('d-none')
        document.querySelector('#eight').classList.add('d-none')
        document.querySelector('#nine').classList.remove('d-none')
        document.querySelector('#allProjects').style.cssText = 'color:black'
        document.querySelector('#reactJS').style.cssText = 'color:#0a58ca'
        document.querySelector('#AngularJS').style.cssText = 'color:black'
        document.querySelector('#JavaScript').style.cssText = 'color:black'
        document.querySelector('#LandingPage').style.cssText = 'color:black'
    }
    function AngularJS() {
        document.querySelector('#one').classList.add('d-none')
        document.querySelector('#two').classList.remove('d-none')
        document.querySelector('#three').classList.add('d-none')
        document.querySelector('#four').classList.add('d-none')
        document.querySelector('#five').classList.add('d-none')
        document.querySelector('#ten').classList.add('d-none')
        document.querySelector('#elephen').classList.add('d-none')

        document.querySelector('#six').classList.add('d-none')
        document.querySelector('#seven').classList.add('d-none')
        document.querySelector('#eight').classList.add('d-none')
        document.querySelector('#nine').classList.add('d-none')
        document.querySelector('#allProjects').style.cssText = 'color:black'
        document.querySelector('#reactJS').style.cssText = 'color:black'
        document.querySelector('#AngularJS').style.cssText = 'color:#0a58ca'
        document.querySelector('#JavaScript').style.cssText = 'color:black'
        document.querySelector('#LandingPage').style.cssText = 'color:black'
    }
    function LandingPage() {
        document.querySelector('#one').classList.add('d-none')
        document.querySelector('#two').classList.add('d-none')
        document.querySelector('#three').classList.remove('d-none')
        document.querySelector('#four').classList.remove('d-none')
        document.querySelector('#five').classList.remove('d-none')
        document.querySelector('#ten').classList.add('d-none')
        document.querySelector('#elephen').classList.remove('d-none')

        document.querySelector('#six').classList.add('d-none')
        document.querySelector('#seven').classList.add('d-none')
        document.querySelector('#eight').classList.add('d-none')
        document.querySelector('#nine').classList.add('d-none')
        document.querySelector('#allProjects').style.cssText = 'color:black'
        document.querySelector('#reactJS').style.cssText = 'color:black'
        document.querySelector('#AngularJS').style.cssText = 'color:black'
        document.querySelector('#JavaScript').style.cssText = 'color:black'
        document.querySelector('#LandingPage').style.cssText = 'color:#0a58ca'
    }
    function JavaScript() {
        document.querySelector('#one').classList.add('d-none')
        document.querySelector('#two').classList.add('d-none')
        document.querySelector('#three').classList.add('d-none')
        document.querySelector('#four').classList.add('d-none')
        document.querySelector('#ten').classList.add('d-none')
        document.querySelector('#elephen').classList.add('d-none')

        document.querySelector('#five').classList.add('d-none')
        document.querySelector('#six').classList.remove('d-none')
        document.querySelector('#seven').classList.remove('d-none')
        document.querySelector('#eight').classList.remove('d-none')
        document.querySelector('#nine').classList.add('d-none')
        document.querySelector('#allProjects').style.cssText = 'color:black'
        document.querySelector('#reactJS').style.cssText = 'color:black'
        document.querySelector('#AngularJS').style.cssText = 'color:black'
        document.querySelector('#JavaScript').style.cssText = 'color:#0a58ca'
        document.querySelector('#LandingPage').style.cssText = 'color:black'
    }
    return <>
        <Helmet>
            <title>My Projects - A.</title>
        </Helmet>
        <div className={`${style.projects}`}>
            <div className="container  pt-5 text-center">
                <div className="position-relative">
                    <h3 className={`${style.bigTitle}`}>PROJECTS</h3>
                    <p className={`position-absolute ${style.positonStyle} ${style.smallTitle}`}>PROJECTS</p>
                </div>
                <ul className="nav justify-content-center mt-5 ">
                    <li className="nav-item">
                        <span id='allProjects' onClick={allProjects} style={{ color: '#0a58ca' }} className={`nav-link ${style.tabItem}`} >All Projects</span>
                    </li>
                    <li className="nav-item">
                        <span id='reactJS' onClick={reactJS} className={`nav-link ${style.tabItem}`} >ReactJS</span>
                    </li>
                    <li className="nav-item">
                        <span id='AngularJS' onClick={AngularJS} className={`nav-link ${style.tabItem}`} >AngularJS</span>
                    </li>
                    <li className="nav-item">
                        <span id='LandingPage' onClick={LandingPage} className={`nav-link ${style.tabItem}`} >Landing Page</span>
                    </li>
                    <li className="nav-item">
                        <span id='JavaScript' onClick={JavaScript} className={`nav-link ${style.tabItem}`} >JavaScript</span>
                    </li>
                </ul>
                <div className="row py-5 g-4">
                    <div id='ten' className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box} `} >
                        <img className={`w-100 ${style.imgStyle}`} src={eMarket} alt="" />
                        <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                            <a target='_blank' href="https://github.com/AhmedHassan222/Ecommerece-React-App">
                                <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                            <a target='_blank' href="https://ahmedhassan222.github.io/Ecommerece-React-App/">
                                <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                        </div>
                    </div>
                    <div id='one' className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box} `} >
                        <img className={`w-100 ${style.imgStyle}`} src={reactMovieAppImage} alt="" />
                        <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                            <a target='_blank' href="https://github.com/AhmedHassan222/reactJS-movie-app">
                                <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                            <a target='_blank' href="https://ahmedhassan222.github.io/reactJS-movie-app/">
                                <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                        </div>
                    </div>
                    <div id='elephen' className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box}  `} >
                        <img className={`w-100 ${style.imgStyle}`} src={educavo} alt="" />
                        <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                            <a target='_blank' href="https://github.com/AhmedHassan222/Educavo">
                                <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                            <a target='_blank' href="https://ahmedhassan222.github.io/Educavo/">
                                <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                        </div>
                    </div>
                    <div id='two' className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box}  `} >
                        <img className={`w-100 ${style.imgStyle}`} src={noxe} alt="" />
                        <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                            <a target='_blank' href="https://github.com/AhmedHassan222/noxe/tree/master">
                                <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                            <a target='_blank' href="https://ahmedhassan222.github.io/noxe/">
                                <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                        </div>
                    </div>

                    <div id='three' className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box}  `} >
                        <img className={`w-100 ${style.imgStyle}`} src={backery} alt="" />
                        <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                            <a target='_blank' href="https://github.com/AhmedHassan222/Backery">
                                <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                            <a target='_blank' href="https://ahmedhassan222.github.io/Backery/">
                                <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                        </div>
                    </div>
                    <div id='nine' className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box}  `} >
                        <img className={`w-100 ${style.imgStyle}`} src={AProfile} alt="" />
                        <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                            <a target='_blank' href="https://github.com/AhmedHassan222/myProfile/tree/master">
                                <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                            <a target='_blank' href="https://ahmedhassan222.github.io/myProfile/">
                                <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                        </div>
                    </div>
                    <div id='four' className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box} `} >
                        <img className={`w-100 ${style.imgStyle}`} src={fokir} alt="" />
                        <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                            <a target='_blank' href="https://github.com/AhmedHassan222/Fokir">
                                <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                            <a target='_blank' href="https://ahmedhassan222.github.io/fokir/">
                                <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                        </div>
                    </div>
                    <div id='five' className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box} `} >
                        <img className={`w-100 ${style.imgStyle}`} src={simone} alt="" />
                        <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                            <a target='_blank' href="https://github.com/AhmedHassan222/simonee">
                                <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                            <a target='_blank' href="https://ahmedhassan222.github.io/simonee/">
                                <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                        </div>
                    </div>
                    <div id='six' className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box} `} >
                        <img className={`w-100 ${style.imgStyle}`} src={xo} alt="" />
                        <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                            <a target='_blank' href="https://github.com/AhmedHassan222/X-O_Game">
                                <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                            <a target='_blank' href="https://ahmedhassan222.github.io/X-O_Game/">
                                <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                        </div>
                    </div>
                    <div id='seven' className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box} `} >
                        <img className={`w-100 ${style.imgStyle}`} src={calculator} alt="" />
                        <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                            <a target='_blank' href="https://github.com/AhmedHassan222/Calculator">
                                <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                            <a target='_blank' href="https://ahmedhassan222.github.io/Calculator/">
                                <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                        </div>
                    </div>
                    <div id='eight' className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box}  `} >
                        <img className={`w-100 ${style.imgStyle}`} src={crud} alt="" />
                        <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                            <a target='_blank' href="https://github.com/AhmedHassan222/CRUD-system">
                                <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                            <a target='_blank' href="https://ahmedhassan222.github.io/CRUD-System/">
                                <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}

