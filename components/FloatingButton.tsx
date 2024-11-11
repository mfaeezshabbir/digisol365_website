"use client";

import { useTheme } from "@/src/context/ThemeContext";
import { useState, useEffect } from "react";

export default function FloatingButton() {
  const { state, toggleTheme } = useTheme();
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);

  // Track mouse position
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition((prev) => ({
      x: prev.x + e.movementX,
      y: prev.y + e.movementY,
    }));
  };

  const handleMouseUp = () => {
    if (isDragging) setIsDragging(false);
  };

  // Attach event listeners to the document for smoother dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <button
      onClick={toggleTheme}
      onMouseDown={handleMouseDown}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      className={`fixed z-50 p-2 rounded-full transition-colors duration-300 focus:outline-none 
        ${
          state.theme === "dark" ? "bg-white text-black" : "bg-black text-white"
        } 
        cursor-pointer shadow-lg`}
    >
      {state.theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
