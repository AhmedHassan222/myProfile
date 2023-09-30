import style from "./Contact.module.css"
import { Helmet } from "react-helmet";
import {  useState } from "react";
import $ from 'jquery';
export default function Contact() {
    const [character, setCharacter] = useState(500)
    const [value, setValue] = useState('')
    const [buttonPress, setButtonPress] = useState('')
    function knowLetter(e) {
        if (e.key == 'Control') {
            e.preventDefault()
        } else {
            setButtonPress(e.key)
            console.log(buttonPress)
        }

    }
    function review(e) {
        $('textarea').on("cut copy paste", function (e) {
            e.preventDefault();
        });


        if (character >= 1) {
            setCharacter(500 - e.target.value.length)
            setValue(e.target.value.slice(0, 500))
        } else {
            if (buttonPress == 'Backspace') {
                setValue(e.target.value)
                setCharacter(500 - e.target.value.length)

            }
        }


    }

    function noneContext(e) {
        e.preventDefault()

    }


    return <>
        <Helmet>
            <title>Contact Me - A.</title>
        </Helmet>
        <div className="container  pt-5 ">
            <div className="position-relative text-center">
                <h3 className={`${style.bigTitle}`}>CONTACT</h3>
                <p className={`position-absolute ${style.positonStyle} ${style.smallTitle}`}>CONTACT</p>
            </div>
        </div>
        <div className="container">


            <form className={` mx-auto my-3  `} action="https://formspree.io/f/xoqokzjr" method="POST" >
                <div className={`${style.bigScreen} my-3`}>
                    <div className={`${style.inputSpecial} w-sm-100 me-4 `}>
                        <input required type="text" name="Name" placeholder="Full Name*" />
                    </div>
                    <div className={` ${style.inputSpecial} w-sm-100 `}>
                        <input required type="email" name="Email" placeholder="E-mail*" />
                    </div>
                </div>

                <div className="my-3">
                    <input required type="text" name="Subject" placeholder="Subject*" />
                </div>
                <div className="my-3">
                    <textarea onChange={review} onContextMenu={noneContext} onKeyDownCapture={knowLetter} rows={10} value={value} placeholder="Message*"></textarea>
                </div>
                <p className={`text-end ${style.character} `}>{character} character</p>
                <button type="submit" className={`py-3 btn btn-danger  text-white `}>Send Message</button>
            </form>
        </div>






    </>
}