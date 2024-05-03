import React from 'react'
import Image from 'next/image'
import Carpo from "../assets/carpo.png"
import Link from 'next/link'
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/X.svg";
import playstore from "../assets/google.png"
import apple from "../assets/appstore.png"
import "../css/index.css"

export default function Footer() {
    return (
        <main>
            <div className="main-footer-container">
                <div className="wrapper col-8-md footer-wrapper">
                    <div className="footer-carpo dsp-f fd-c">
                        <div className="footer-carpo dsp-f fd-r justify-space-between">

                            <div className="footer-carpo-text dsp-f fd-c">
                                <div>
                                    <Image src={Carpo} width={400} height={200} />
                                </div>
                                <div className='appstore-container'>
                                    <Image src={playstore} className='google' />
                                    <Image src={apple} className='appstore' />
                                </div>
                            </div>
                            

                            <div className='legal-company'>
                                <div className="dsp-f fd-c company">
                                    <h3>Company</h3>
                                    <Link href="#about">About us</Link>
                                    <Link href="#services">Our services</Link>
                                    <Link href="#">Careers</Link>
                                    <Link href="#faqs">FAQs</Link>
                                </div>

                                <div className="legal dsp-f fd-c">
                                    <h3>Legal</h3>
                                    <Link href="#">Privacy Policy</Link>
                                    <Link href="#">Terms & conditions</Link>
                                </div>
                            </div>


                        </div>
                        <div className="dsp-f fd-c ai-c justify-center footer-icons">
                            <div className='contact-icons dsp-f fd-r'>

                                <Image src={facebook} className='icons' />

                                <Image src={twitter} className='icons' />

                                <Image src={instagram} className='icons' />

                                <Image src={linkedin} className='icons' />
                            </div>
                            <div className='copyright'>
                                <p>Copyright. All rights reserved</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}
