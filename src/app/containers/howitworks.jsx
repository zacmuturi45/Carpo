import React from 'react'
import Image from 'next/image'
import location from "../assets/woman.png"
import prompt from "../assets/man.png"
import arrived from "../assets/unbox.png"
import trucks from "../assets/vehicles.png"
import "../css/index.css"

export default function HowItworks() {
    return (
        <main className="wrapper faqs-wrapper col-8-md">            
            <div className="main-works">
                <div className='flex-div1 dsp-f justify-center fd-c'>
                    <h3>How to</h3>
                    <h3>get started</h3>
                    <p className='m-l-1'>in 4 easy steps</p>
                </div>
                <div className='svg-div'>
                    <div className='grid1 dsp-f fd-c'>
                        <Image src={location} width={120} height={120} className='grid-image'/>
                        <p><span className="circle">1</span>Enter your location details in the app.</p>
                    </div>

                    <div className='grid2 dsp-f fd-c'>
                    <Image src={prompt} width={120} height={120} className='grid-image'/>
                        <p><span className="circle">2</span>Follow the instructions on the app to get a tailor made transport solution for your goods.</p>
                    </div>

                    <div className='grid3 dsp-f fd-c'>
                    <Image src={trucks} width={120} height={120} className='grid-image'/>
                        <p><span className="circle">3</span>Get contacted by one of our drivers in seconds who will assist with packaging and loading.</p>
                    </div>

                    <div className='grid4 dsp-f fd-c'>
                    <Image src={arrived} width={120} height={120} className='grid-image'/>
                        <p><span className="circle">4</span>Sit back and track your package as its delivered to your client.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
