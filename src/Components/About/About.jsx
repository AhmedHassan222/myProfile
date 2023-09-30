

import style from "./About.module.css"
import { Helmet } from "react-helmet";
export default function About() {
    const downloadTxtFile = () => {
        // text content
        const texts = [`AHMED HASSAN
Front End Developer
E 01123686114  ahmedhassan.2472@gmail.com q https://github.com/AhmedHassan222
q https://www.linkedin.com/in/ahmed-hassan-27a371245/ e Alexandria, Egypt
SUMMARY                                TRAINING / COURSES

I'm a frontend web developer           Front-End intership                           Front-End Development
using Angular JS and React JS          ITI, 2023                                     Route Acadmy, 2022
frameworks, I am looking for a full
time position as a front end           JavaScript Algorithms and Data
developer in this company. I           Structures Certification
aspire to work in this company to      FreeCodeCamp.com, 2022
gain new experiences and work
with a good team that supports         PROJECTS
me.
My code is clean, readable, and        noxe
easily editable. I learn quickly and   q https://ahmedhassan222.github.io/noxe/
develop myself easily when new         Angular project
technology emerges and this is         •   source code : https://github.com/AhmedHassan222/noxe/tree/master
what makes me the perfect
candidate.                             E-shop
                                       q https://ahmedhassan222.github.io/E-shop/
TECHNICAL SKILLS                       E-commerece website
                                       (I used HTML, CSS, Bootstrap and JS
                                       •   source code : https://github.com/AhmedHassan222/E-shop
 React JS        Angular JS

                                       Backery
 HTML/HTML5           CSS/CSS3
                                       q https://ahmedhassan222.github.io/Backery/
 SCSS       SASS       Bootstrap       I used HTML, CSS, Bootstrap and JS
                                       •   source code : https://github.com/AhmedHassan222/Backery
 Tailwind-CSS        JavaScript/ES6
                                       Fokir
 TypeScript        OOP        jQuery   q https://ahmedhassan222.github.io/fokir/
                                       I used HTML, CSS, Bootstrap and JS
 Regex        Git & Github             •   source code : https://github.com/AhmedHassan222/Fokir


                                       CRUDS system
EDUCATION                              q https://ahmedhassan222.github.io/CRUD-System/
                                       System with native JS
Bachelor of Computer                   •   source code : https://github.com/AhmedHassan222/CRUD-System
Science
University of Tanta                    Calculator
   2023 - 2024        Tanta
                                       q https://ahmedhassan222.github.io/Calculator/
                                       JavaScript Calculator
LANGUAGES                              •   source code : https://github.com/AhmedHassan222/Calculator

Arabic                   Native        X O game
English               Advanced
                                       q https://ahmedhassan222.github.io/X-O_Game/
                                       I used JS to create X O game




                                                                                                           
                                       •   source code : https://github.com/AhmedHassan222/x-o_game




                                                                             `]
        // file object
        const file = new Blob(texts, { type: 'text/plain' });
        // anchor link
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = "100ideas-" + Date.now() + ".txt";
        // simulate link click
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

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
 

            <div className="btnDiv">
                <button className={`py-3 btn btn-danger    text-white mt-4`} id="downloadBtn" onClick={downloadTxtFile} value="download">Download</button>
            </div>

        </div>

    </>
}