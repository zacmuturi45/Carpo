import React from 'react'
import Image from 'next/image'
import toyo from "../assets/4.png"
import fuso from "../assets/1.png"
import dai from "../assets/3.png"
import honda from "../assets/honda.png"
import "../css/index.css"


export default function Mobility() {
  return (
    <main className="wrapper col-8-md services-container">
      <div className=' services-header dsp-f justify-center ai-c mt-4'>
        <h2 id='services'>Our services</h2>
      </div>
      <div className="services-wrapper row">
        <div className="cols-6-xl col-10-xs">
          <div>
            <h3>Light cargo</h3>
            <p>Parcels, packages, light goods; our highly-rated, speedy boda riders are on standby.</p>
          </div>
          <Image src={honda} className='services-image' />
        </div>

        <div className="cols-6-xl col-10-xs">
        <div>
            <h3>Semi-light</h3>
            <p>Got heavy cargo but on a budget? Our toyo riders are here for you. Fast, efficient and budget-friendly.</p>
          </div>
          <Image src={toyo} className='services-image' />
        </div>

        <div className="cols-6-xl col-10-xs">
        <div>
            <h3>Mid-sized cargo</h3>
            <p>Let our light trucks take the pressure of your enterprise deliveries. On time. Every time.</p>
          </div>
          <Image src={dai} className='services-image' />
        </div>

        <div className="cols-6-xl col-10-xs">
        <div>
            <h3>Heavy Cargo</h3>
            <p>Exhausted your factory cargo transportation? We'll help you fill the gaps with our ever-ready heavy truckers. Get Carpo today and experience unmatched services.</p>
          </div>
          <Image src={fuso} className='services-image' />
        </div>
      </div>
    </main>
  )
}

