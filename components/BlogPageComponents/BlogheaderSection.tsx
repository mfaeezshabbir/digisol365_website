import Image from "next/image";
import React from "react";

function BlogheaderSection() {
  return (
    <div>
      <header className="relative bg-background py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Left Circular Image */}
        <div className="absolute hidden md:block left-8 transform top-[-3px] opacity-[0.7]">
          <Image
            width={400}
            height={100}
            src="https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Left Decor"
            className="rounded-t-full rounded-b-full w-44 h-48 lg:w-400 lg:h-100"
          />
        </div>

        {/* Right Circular Image */}
        <div className="absolute hidden md:block top-1/2 right-4 transform -translate-y-0.5 opacity-[0.7]">
          <Image
            width={120}
            height={120}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Right Decor"
            className="rounded-t-full w-40 h-40 lg:w-60 lg:h-50"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="bg-buttoncolor  text-gray-900 text-xs sm:text-sm py-1 px-3 sm:px-4 rounded-full inline-block">
            • BLOG MASONARY •
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            "Exploring The Softconic Blog"
          </h1>
          <nav className="text-xs sm:text-sm text-foreground mt-2">
            Home &rarr; BLOG MASONARY
          </nav>
        </div>
      </header>
    </div>
  );
}

export default BlogheaderSection;
