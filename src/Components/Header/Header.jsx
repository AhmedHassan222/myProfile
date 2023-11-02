import Typed from 'react-typed';
import style from "./Header.module.css"
import profilePic from "../../assets/profilePic2.png"
import WOW from 'wowjs';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();

    }, [])
    return <>



        <header className={`w-100 d-flex justify-content-center align-items-center `}>
            <div className="container">
                <div className={`row ${style.content}`}>
                    <div className={`col-sm-12 col-md-6 col-lg-6 wow bounceInRight ${style.right}`}>
                        <div className='d-flex justify-content-center '>
                            <img src={profilePic} alt="" className={` mx-auto  rounded-circle ${style.imgStyle}  `} />
                        </div>
                    </div>
                    <div className={`col-sm-12 col-md-6 col-lg-6   align-self-center ${style.left} `}>
                        <h3 className={`${style.heading3} wow bounceInLeft`}>Hello,</h3>
                        <h1 className={`${style.mainHeading} wow my-3`}>I'm Ahmed Hassan</h1>
                        <h3> <span >|</span>


                            <Typed
                                strings={[
                                    'Front End Developer',
                                    'ReactJS',
                                    'Angular'
                                ]}
                                showCursor={false}
                                typeSpeed={80}
                                backSpeed={50}

                                loop >
                                <span className={`mt-3 wow bounceInLeft`}></span>
                            </Typed>
                        </h3>
                        <Link className={`text-white nav-link ${style.linkStyle}`} to={'contact'} >
                            <button className={`py-3 btn btn-danger  wow bounceInLeft text-white mt-4`}> CONTACT ME</button>

                        </Link>


                    </div>

                </div>
            </div>
        </header>
        <section>
            <div className={`${style.air} ${style.air1} `}></div>
            <div className={`${style.air} ${style.air2} `}></div>
            <div className={`${style.air} ${style.air3} `}></div>
            <div className={`${style.air} ${style.air4} `}></div>
        </section>
    </>
}