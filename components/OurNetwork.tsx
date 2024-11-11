import React from "react";

const OurNetwork: React.FC = () => {
  const partners = [
    { name: "Otello" },
    { name: "Otivar" },
    { name: "Archzilla" },
    { name: "Riovolt" },
    { name: "Equal" },
    { name: "Alero" },
    { name: "Kaon" },
    { name: "Logo1" },
    { name: "Park Place" },
    { name: "Bushnell" },
    { name: "Nextel" },
  ];

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="text-center mb-12">
        <button className="px-4 py-2 bg-buttoncolor text-xs font-bold rounded-md">
          Partnerships
        </button>
        <h2 className="text-3xl font-bold mt-2">Our Network</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-24 bg-card rounded-md shadow-md hover:bg-background transition duration-300 border-2 border-gray-600"
          >
            <span className="text-lg font-semibold">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurNetwork;
