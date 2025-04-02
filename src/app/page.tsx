"use client"
import { useRef } from "react";
import { AppSidebar } from "@/components/Sidebar/Sidebar";
import LandingPage from "../components/LandingPage/LandingPage";
import AboutPage from "@/components/AboutPage/AboutPage";
import "./globals.css";

export default function MainPage() {
  const landingRef = useRef<HTMLDivElement>(null!);
  const aboutRef = useRef<HTMLDivElement>(null!);

  return (
    <div className='flex w-[100vw] h-full bg-[#fafafa]'>
      <AppSidebar landingRef={landingRef} aboutRef={aboutRef} />
      <div>
        <div ref={landingRef}>
          <LandingPage />
        </div>
        <div ref={aboutRef}>
          <AboutPage />
        </div>
      </div>
    </div>
  );
}
