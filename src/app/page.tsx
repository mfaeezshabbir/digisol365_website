"use client";
import AnimatedButton from "@/components/AnimatedButton";
import HeroSection from "@/components/HeroSection";
import { MenuIcon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { state, toggleTheme } = useTheme();
  return (
    <div className="max-h-[100vh]">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-md transition-colors duration-300 focus:outline-none"
      >
        {state.theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
      <div className="flex">
        <div className="bg-black w-[8%]">
          <div>logo</div>
          <div>
            <MenuIcon color="white" />
          </div>
          <div>
            <button>sdf</button>
          </div>
        </div>
        <div className=" w-[92%]">
          <div>
            <HeroSection />
          </div>
        </div>
      </div>
    </div>
  );
}
