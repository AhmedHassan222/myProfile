

import { Link } from "react-router-dom";
import style from "./About.module.css"
import { Helmet } from "react-helmet";
export default function About() {
    return <>
        <Helmet>
            <title>About Me - A.</title>
        </Helmet>
        <div className="container  pt-5 ">
            <div className="position-relative text-center">
                <h3 className={`${style.bigTitle}`}>ABOUT ME</h3>
                <p className={`position-absolute ${style.positonStyle} ${style.smallTitle}`}>ABOUT ME</p>
            </div>
            <div>
                <ul>

                    <li className={`fs-3 ${style.subTitle} py-5`}>Skills</li>
                    <div className="row py-4 fw-bold">
                        <div className="col-sm-12 col-md-6 col-lg-4  ">
                            <p>HTML/HTML5</p>

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4  ">
                            <p>CSS/CSS3</p>

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4  ">
                            <p>SCSS</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4   ">
                            <p>Bootstrap</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4  ">
                            <p>Tailwind CSS</p>

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4  ">
                            <p>JavaScript/ES6</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4  ">
                            <p>TypeScript</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4  ">
                            <p>AngularJS</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4  ">
                            <p>ReactJS</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4  ">
                            <p>jQuery</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4  ">
                            <p>Git & Github</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4  ">
                            <p>Regex</p>
                        </div>


                    </div>
                    <li className={`fs-3 py-5 ${style.subTitle}`}>Education</li>
                    <p className="fw-bold pt-4  ">Bachlor of Computer Science</p>
                    <p className="fw-bold pb-4  ">Factuly of computers and informations Tanta university</p>
                    <li className={`fs-3 py-5 ${style.subTitle}`}>Cources</li>
                    <p className="fw-bold pt-4  ">Front End Development at Route Academy</p>
                    <p className="fw-bold pt-4  ">JavaScript Algorithms and Data structures at freeCodeCamp</p>


                    <li className={`fs-3 py-5 ${style.subTitle}`}>Experience</li>
                    <p className="fw-bold pt-4  ">Intership at Information Technology Institute (ITI) </p>

                    <li className={`fs-3 py-5 ${style.subTitle}`}>Languages</li>
                    <p className="fw-bold pt-4  ">English</p>
                    <p className="fw-bold pb-4  ">Arabic</p>
                </ul>
            </div>


            <Link className={`text-white nav-link ${style.linkStyle}`} to={'https://drive.google.com/file/d/1vQnaPp4quzNzoK3vmiCGOwfMbWBAckSB/view?usp=sharing'} >
                <button className={`py-3 btn btn-danger   text-white mt-4`}>Review Resume</button>

            </Link>

        </div>

    </>
}