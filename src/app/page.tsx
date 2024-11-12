"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import { useTheme } from "../context/ThemeContext";
import FloatingButton from "@/components/FloatingButton";
import Sidebar from "@/components/Sidebar";
import WhoWeAre from "@/components/WhoWeAre";
import ServicesSolutions from "@/components/ServiceSolutions";
import WhatWeDo from "@/components/WhatWeDo";
import OurNetwork from "@/components/OurNetwork";
import SuccessStories from "@/components/SuccessStories";
import ReviewSection from "@/components/ReviewSection";
import { ProfileCard } from "@/components/OurExperts";
import Footer from "@/components/Footer";

export default function Home() {
  const { state } = useTheme();

  // State to track screen width
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check if window is defined (to avoid SSR issues)
    if (typeof window !== "undefined") {
      // Update screen width state
      setIsLargeScreen(window.innerWidth > 900);

      // Add event listener to handle window resize
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 900);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div
      className={`${
        state.theme === "dark" ? "dark" : ""
      } max-h-[100vh] transition-all duration-500 ease-in-out flex flex-col`}
    >
      <FloatingButton />

      {/* Conditionally render Sidebar based on screen size */}
      {isLargeScreen && <Sidebar />}

      {/* Main Content Section */}
      <div className="w-[100%] md:w-[92%] md:ml-[8%] bg-background dark:bg-foreground text-foreground dark:text-background transition-all duration-500 ease-in-out">
        <HeroSection />
        <WhoWeAre />
        <ServicesSolutions />
        <WhatWeDo />
        <OurNetwork />
        <SuccessStories />
        <ReviewSection />
        <ProfileCard />
        <Footer />
      </div>
    </div>
  );
}
