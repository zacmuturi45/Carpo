import React from 'react'
import How from "../assets/truck.svg"
import Image from 'next/image'
import FaqCard from '../components/faq'
import "../css/index.css"

export default function Faq() {
    return (
        <main className="wrapper faq-wrapper col-8-md">
            <div className='faq-container dsp-f fd-c'>
                <div className='faq-heading dsp-f ai-c justify-center m-b-4'>
                    <h1 id='faqs'>FAQs</h1>
                </div>
                <div>
                    <FaqCard header="How does Carpo work?" body="Carpo simplifies the process of business deliveries. After signing up, you can easily schedule pickups, track your packages in real-time, and receive notifications every step of the way. Our platform connects you with professional drivers who ensure safe and timely delivery of your items." />

                    <FaqCard header="What types of businesses does Carpo serve?" body="Carpo caters to a wide range of businesses, including large corporations, small businesses, e-commerce stores, restaurants, medical facilities, and more. Whether you need to deliver documents, products, food orders, or medical supplies, our platform is designed to meet your delivery needs." />

                    <FaqCard header="How do you ensure the security of my deliveries?" body="We prioritize the security of your packages. All our drivers undergo rigorous background checks and are trained to handle packages with care. Additionally, our platform provides real-time tracking, so you can monitor your deliveries every step of the way and ensure they reach their destination safely." />

                    <FaqCard header="What delivery options does Carpo offer?" body="Carpo offers same-day delivery, scheduled pickups, or recurring deliveries. You can choose the delivery option that best fits your timeline and budget." />

                    <FaqCard header="How does pricing work for deliveries with Carpo?" body="Our pricing is transparent and competitive. We offer flexible pricing plans tailored to your business requirements. Factors such as distance, package size, and delivery urgency may influence the cost, but you'll always know the price upfront before confirming your delivery request. Plus, there are no hidden fees or surprises.
" />
                </div>
            </div>
        </main>
    )
}
