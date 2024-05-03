"use client"

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function FaqCard({ header, body }) {
    const [toggleFaq, setToggleFaq] = useState(false);

    const handleClick = () => {
        setToggleFaq(!toggleFaq)
    }

    return (
        <div className="faq-content dsp-f fd-r justify-space-between ai-c">
            <div className='faq-text dsp-f fd-c justify-flex-start'>
                <h1>{header}</h1>
                <p id={toggleFaq ? "" : "toggle-faq"}>{body}</p>
            </div>
            <div className='faq-icon'>
                <FontAwesomeIcon icon={faPlus} className='plus-icon' onClick={handleClick} />
            </div>
        </div>
    )
}
