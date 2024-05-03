import React from "react"
import Image from "next/image"
import about from "../assets/about.svg"
import "../css/index.css"

export default function About() {
    return (
        <main className="wrapper main-about col-8-md dsp-f ai-c">

            <div className="dsp-f ai-c fd-c about-container pt-4">
                <h1 className="cl-grey-5" id="about">About us</h1>
                <div className="about">
                    <div className="about-image">
                        <Image src={about} alt="about-image"/>
                    </div>
                    <div className="carpo-about">
                        <h4>Transforming lives</h4>
                        <p>
                            Carpo was founded with a mission to streamline the delivery process from businesses to clients, empowering you, the business owner to focus on what truly matters - growing your business.<br />
                        </p>
                        <p>
                            We pride ourselves on being more than just a delivery service. We&apos;re committed to providing tailored solutions to meet your specific business needs. Whether you&apos;re a large corporation or a small local business, we&apos;ve got you covered.<br />
                            </p>
                        <p>
                            Get Carpo today and experience the difference of a delivery service that&apos;s as dedicated to your success as you are.<br />
                            Welcome to a new era of business deliveries - welcome to <strong className="cl-red-5">Carpo!</strong>
                        </p>
                    </div>
                </div>

            </div>

        </main>
    )
}
