"use client"

import React, { useEffect, useState } from 'react';
import "../css/index.css";
import carpo from "../assets/carpo.png";
import Image from 'next/image';
import Link from 'next/link';
import useScrollDirection from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {

    const [visible, setVisible] = useState(true);
    const scrollDirection = useScrollDirection();
    const [toggleMenu, setToggleMenu] = useState(true)

    useEffect(() => {
        if (scrollDirection === 'down') {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }, [scrollDirection]);

    return (
        <main>
            <nav className={visible ? "" : "nav-hidden"}>
                <Image src={carpo} className='carpo-image' alt='carpo-logo' />
                <div className='navlinks'>
                    <Link href="#services">Our Services</Link>
                    <Link href="#driver">Carpo Driver</Link>
                    <Link href="#faqs">FAQs</Link>
                    <Link href="#about">About</Link>
                    <Link href="#contact">
                        <button>Contact us</button>
                    </Link>
                </div>
                <div className="hamburger-menu dsp-f ai-c">
                    {toggleMenu ? (
                        <div>
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: 35 }} onClick={() => setToggleMenu(false)} />

                        </div>
                    ) : (
                        <div>
                            <FontAwesomeIcon icon={faXmark} style={{ fontSize: 35 }} onClick={() => setToggleMenu(true)} />

                        </div>)}
                    {!toggleMenu && (
                        <div className='ham-navlinks dsp-f fd-c ai-c bg-red-1'>
                            <Link href="#services">Our Services</Link>
                            <Link href="#services">How it works</Link>
                            <Link href="#services">About</Link>
                            <button id='contactbutton' className='contact-button'>Contact us</button>
                        </div>
                    )}
                </div>
            </nav>
        </main>
    )
}
