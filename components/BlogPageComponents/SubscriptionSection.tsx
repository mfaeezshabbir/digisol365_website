import Image from "next/image";
import React from "react";

function SubscriptionSection() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 sm:px-8 md:py-20">
      <div className="relative bg-white text-white p-8 sm:p-10 md:p-12 rounded-xl shadow-lg overflow-hidden">
        {/* Background image */}
        <Image
          height={400}
          width={800}
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Team Work"
          className="absolute inset-0 w-full h-full object-cover opacity-70" // Set opacity to 40%
        />
        {/* Content section */}
        <div className="relative z-10 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">Blog</h2>
          <p className="text-sm sm:text-lg mb-4 sm:mb-6">
            Join 50,000+ Subscribers
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Email input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="text-white bg-gray-800 border border-gray-600 px-8 py-3 sm:py-3 rounded-md sm:rounded-l-md w-full outline-none focus:ring-2 focus:ring-blue-400"
            />
            {/* Subscribe button */}
            <button className="bg-buttoncolor text-foreground px-8 py-3 rounded-md sm:rounded-r-md w-auto sm:w-1/3 hover:bg-buttoncolorhover-400 mt-2 sm:mt-0 ">
              SUBSCRIBE →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscriptionSection;
