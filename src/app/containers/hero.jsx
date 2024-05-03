import React from 'react';
import Image from 'next/image';
import heroImage from '../assets/logistics.svg';
import '../css/index.css';
import Link from 'next/link';

export default function Hero() {
    return (
        <main className='hero-section cols-9-md col-12-xs wrapper'>
            <Image src={heroImage} className='hero-image' />
            <div className="hero-content dsp-f fd-c">
                <div className="hero-text">
                    {/* <h1 className="fw-5 cl-grey-3">Your reliable</h1>
                    <h1 className="cl-red-5 fw-7">logistics partner!</h1> */}
                    <h1 className="fw-5 cl-grey-3">Your reliable <span className='cl-red-5 fw-7'>logistics partner!</span></h1>
                    <p className="m-b-2 fs-lg spans-white"><strong className='cl-red-5'>Carpo</strong> is the delivery app for your business needs. Get your goods picked up by our vetted drivers in minutes and track your package to your client's doorstep. It's that simple!</p>
                </div>
                <div className="hero-buttons">
                    <button className='bg-red-5'>
                        Get the App
                    </button>
                    <button id='how-button'>
                        <Link href="#faqs">Learn more</Link>
                    </button>
                </div>
            </div>
        </main>
    )
}
