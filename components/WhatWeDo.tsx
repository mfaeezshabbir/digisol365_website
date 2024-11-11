import React from "react";

const WhatWeDo: React.FC = () => {
  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="text-center mb-12">
        <button className="px-4 py-2 bg-buttoncolor text-xs font-bold rounded-md">
          SOLUTIONS WE OFFER
        </button>
        <h2 className="text-3xl font-bold mt-2">What We Do</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-card p-8 rounded-lg max-w-xs flex-1 min-w-[250px] text-left">
          <div className="text-gray-600 text-2xl font-bold mb-4">01</div>
          <h3 className="text-xl font-semibold text-green-500 mb-2">
            Research & Discovery
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Web development is the process offer than operdol creating otar eros
            augue, ultricies sedatoni quamot authol websites and web. creatingot
            otar erosmont augue, ultricies sed.
          </p>
        </div>
        <div className="bg-card p-8 rounded-lg max-w-xs flex-1 min-w-[250px] text-left">
          <div className="text-gray-600 text-2xl font-bold mb-4">02</div>
          <h3 className="text-xl font-semibold text-green-500 mb-2">
            Industry Expertise
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Web development is the process offer than operdol creating otar eros
            augue, ultricies sedatoni quamot authol websites and web. creatingot
            otar erosmont augue, ultricies sed.
          </p>
        </div>
        <div className="bg-card p-8 rounded-lg max-w-xs flex-1 min-w-[250px] text-left">
          <div className="text-gray-600 text-2xl font-bold mb-4">03</div>
          <h3 className="text-xl font-semibold text-green-500 mb-2">
            Quality Assurance
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Web development is the process offer than operdol creating otar eros
            augue, ultricies sedatoni quamot authol websites and web. creatingot
            otar erosmont augue, ultricies sed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
