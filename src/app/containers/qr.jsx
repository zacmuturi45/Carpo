import React from 'react'
import Image from 'next/image'
import qrcode from "../assets/qrcode.svg"
import google from "../assets/playstore.svg"
import "../css/index.css"

export default function Qr() {
    return (
        <main className='wrapper qr-wrapper col-8-md dsp-f fd-c'>
            <div className='qr-div-container'>
            <h1 id='driver'>Learn more in the app</h1>

                <div className='qr-container dsp-f justify-space-between p-2'>
                    <div className='qr-image-container'>
                        <Image src={qrcode} className='qrcode' />
                    </div>
                    <div className='qr-text-container'>
                        <h4>Download the <span className='cl-red-5'>Carpo</span> app</h4>
                        <p>Scan to download</p>
                    </div>
                    {/* <div className='qr-google-container'>
                        <Image src={google} />
                    </div> */}
                </div>

                {/* <div className='qr-container dsp-f justify-space-between p-2'>
                    <div className='qr-image-container'>
                        <Image src={qrcode} className='qrcode' />
                    </div>
                    <div className='qr-text-container'>
                        <h4>Download the <span className='cl-red-5'>Driver</span> app</h4>
                        <p>Scan to download</p>
                    </div>
                    <div className='qr-google-container'>
                        <Image src={google} />
                    </div>
                </div> */}
            </div>

        </main>
    )
}
