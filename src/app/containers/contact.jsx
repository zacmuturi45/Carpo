import React from 'react'
import Image from 'next/image'
import Smiling from "../assets/carp.jpg"
import contact from "../assets/contact2.svg"
import phone from "../assets/mobile.svg";
import location from "../assets/location.svg";
import email from "../assets/email.svg";
import "../css/index.css"

export default function Contact() {
  return (
    <main className="wrapper col-8-md">
        <div className="contact-container dsp-f justify-center fd-r p-1">
          <div className='contact-content dsp-f fd-c cols-6-lg justify-space-between'>
            <div className='contact-text dsp-f fd-c justify-flex-start'>
              <h1 id='contact'>Talk to us</h1>
              <p id='contact-p' style={{maxWidth: 500}}>Got questions or feedback? We're here to help! Reach out to us anytime for assistance or inquiries. Our dedicated support team will assist you with any concerns. Contact us via email, phone, or <span className='cl-green-5'>whatsapp</span> and we'll get back to you as soon as possible. Your satisfaction is our priority!</p>
              <div className='dsp-f fd-r ai-c mt-4 m-b-3'>
              <Image src={email} className='icons' />
              <p className='m-l-1 fw-5'>info@carpo.co.tz</p>
              </div>
              <div className='dsp-f fd-r ai-c m-b-3'>
              <Image src={phone} className='icons' />
              <p className='m-l-1 fw-5'>+255 622 484 581</p>
              </div>
              <div className='dsp-f fd-r ai-c m-b-3'>
              <Image src={location} className='icons' />
              <p className='m-l-1 fw-5'>Isere road, Kinondoni, Dar-es-Salaam</p>
              </div>
            </div>
          </div>
          <div className='contact-image cols-6-lg'>
            <Image src={contact} className='image' />
          </div>
        </div>
    </main>
  )
}
