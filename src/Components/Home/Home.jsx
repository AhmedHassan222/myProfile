
import About from './../About/About';
import Project from '../Projects/Projects';
import Contact from './../Contact/Contact';
import { Helmet } from 'react-helmet';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import style from './Home.module.css'
export default function Home() {
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        window.scroll(0, 0)

    }, [])
    useEffect(() => {
        if(scrollY >=200){
            document.querySelector('#sign').classList.remove('opacity-0')
        }else{
            document.querySelector('#sign').classList.add('opacity-0')
        }

    }, [scrollY])
    function goToUp() {
        window.scroll(0, 0)
    }
    window.addEventListener('scroll', function () {
        setScrollY(this.window.scrollY)
    })
    return <>
        <div id='sign' onClick={goToUp} className={`position-fixed opacity-0  ${style.positionStyle}`}>
            <i class={`fa-solid fa-angle-up ${style.upButton} p-2 bg-danger text-white rounded-circle`}></i>
        </div>
        <Header />
        <About />
        <Project />
        <Contact />
        <Helmet>
            <title>Home Page - A.</title>
        </Helmet>
    </>
}