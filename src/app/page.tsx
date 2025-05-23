"use client"
import { useRef } from "react";
import { AppSidebar } from "@/components/Sidebar/Sidebar";
import LandingPage from "../components/LandingPage/LandingPage";
import AboutPage from "@/components/AboutPage/AboutPage";
import "./globals.css";
import PortfolioPage from "@/components/PortfolioPage/PortfolioPage";
import ContactPage from "@/components/ContactPage/ContactPage";

export default function MainPage() {
  const landingRef = useRef<HTMLDivElement>(null!);
  const aboutRef = useRef<HTMLDivElement>(null!);
  const portfolioRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);

  return (
    <div className='flex w-full h-full bg-[#fafafa] mr-[19rem]'>
      <AppSidebar landingRef={landingRef} aboutRef={aboutRef} portfolioRef={portfolioRef} contactRef={contactRef} />
      <div>
        <div ref={landingRef}>
          <LandingPage aboutRef={aboutRef} />
        </div>
        <div ref={aboutRef}>
          <AboutPage portfolioRef={portfolioRef} />
        </div>
        <div ref={portfolioRef}> 
          <PortfolioPage />
        </div>
        <div ref={contactRef}>
          <ContactPage />
        </div>
      </div>
    </div>
  );
}
