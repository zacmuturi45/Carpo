"use client"

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function FaqCard({ header, body }) {
    const [toggleFaq, setToggleFaq] = useState(false);

    const handleClick = () => {
        setToggleFaq(!toggleFaq)
    }

    const slideDown = {
        initial: {
            opacity: 0,
            height: 0
        },
        enter: {
            opacity: 1,
            height: "auto",
            transition: { duration: .3 }
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: { duration: .3 }
        }
    }

    return (
        <AnimatePresence>
            <div className="faq-content dsp-f fd-r justify-space-between ai-c">
                <div className="dsp-f fd-c faq-main-plus">
                    <div className='faq-text dsp-f fd-r justify-flex-start'>
                        <h1>{header}</h1>
                        <div className='faq-icon'>
                            <FontAwesomeIcon icon={faPlus} className={toggleFaq ? "plus-icon rotate-icon" : "plus-icon"} onClick={handleClick} />
                        </div>
                    </div>
                    {
                        toggleFaq &&
                        <AnimatePresence>
                            <motion.div variants={slideDown} key={toggleFaq} initial="initial" animate="enter" exit="closed" className='faqP'>
                                <p>{body}</p>
                            </motion.div>
                        </AnimatePresence>
                    }
                </div>

            </div>
        </AnimatePresence>
    )
}
