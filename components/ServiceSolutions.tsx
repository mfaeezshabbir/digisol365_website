/* eslint-disable @next/next/no-img-element */
import React from "react";

const ServicesSolutions = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Web development is the process of creating websites and web applications for the internet or intranet.",
      icon: "https://img.icons8.com/fluency/48/000000/code.png",
    },
    {
      title: "Cloud Solutions",
      description:
        "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
      icon: "https://img.icons8.com/fluency/48/000000/cloud.png",
    },
    {
      title: "Cyber Security",
      description:
        "Cybersecurity refers to the protection of computer systems, networks, and data from theft, damage, or unauthorized access.",
      icon: "https://img.icons8.com/fluency/48/000000/lock.png",
    },
    {
      title: "Web Development",
      description:
        "Web development is the process of creating websites and web applications for the internet or intranet.",
      icon: "https://img.icons8.com/fluency/48/000000/code.png",
    },
    {
      title: "Cloud Solutions",
      description:
        "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
      icon: "https://img.icons8.com/fluency/48/000000/cloud.png",
    },
    {
      title: "Cyber Security",
      description:
        "Cybersecurity refers to the protection of computer systems, networks, and data from theft, damage, or unauthorized access.",
      icon: "https://img.icons8.com/fluency/48/000000/lock.png",
    },
  ];

  return (
    <section className="bg-background text-foreground py-12 px-6">
      <div className="text-center mb-8">
        <button className="px-4 py-2 bg-buttoncolor text-xs font-bold rounded-md">
          SOLUTIONS WE OFFER
        </button>
        <h2 className="text-4xl font-bold mt-4">Services & Solutions</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-card rounded-lg p-6 flex flex-col items-start text-left shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.icon}
              alt={`${service.title} Icon`}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <button className="mt-auto px-4 py-2 bg-secondary text-card-foreground font-semibold rounded-md hover:bg-primary-foreground flex items-center">
              Learn More <span className="ml-2">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSolutions;
