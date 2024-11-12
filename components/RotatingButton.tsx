import React, { useState } from "react";

const RotatingButton = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <button className="relative group w-[60px] h-[200px] bg-background border-2 border-foreground overflow-hidden">
      <div className="absolute inset-0 bg-buttoncolor transform  skew-y-[30deg] group-hover:translate-y-0 translate-y-full transition-all duration-500 ease-in-out" />
      {/* Rotated Text */}
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 text-foreground font-bold">
        Get A Quote
      </span>

      {/* Animated Green Overlay */}
    </button>
  );
};

export default RotatingButton;
