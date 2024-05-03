"use client"

import Image from "next/image";
import "../css/index.css";
import Hero from "../containers/hero";
import Banner from "../containers/Banner";
import Mobility from "../containers/Mobility";
import Faq from "../containers/faq";
import Contact from "../containers/contact";
import Footer from "../containers/footer";
import HowItworks from "../containers/howitworks";
import About from "../containers/about";
import Qr from "../containers/qr";
import Lenis from "lenis";
import { useEffect } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <FloatingWhatsApp
      accountName="Carpo"
      phoneNumber="+255622484581"
      chatMessage="Welcome to Carpo customer care. How can we assist you today?"
      statusMessage="Your reliable logistics partner!"
      darkMode="true"
      allowEsc="true"
      notificationSound="true"
      />
      <Hero />
      <div className="main-wrapper col-10-xs">
        <Banner />
        <HowItworks />
        <Mobility />
        <Qr />
        <Faq />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
