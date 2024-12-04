import React, { useState } from "react";

// Create array with short and long descriptions
const services = [
  {
    id: "1",
    title: "Web Design",
    shortDescription: "Short intro about Web Design.",
    fullDescription:
      "Web Design involves creating visually appealing and user-friendly websites.",
  },
  {
    id: "2",
    title: "Frontend Development",
    shortDescription: "Short intro about Frontend Development.",
    fullDescription:
      "Frontend Development focuses on building responsive and interactive user interfaces.Frontend Development focuses on building responsive and interactive.Frontend Development focuses on building responsive and interactive.",
  },
  {
    id: "3",
    title: "Backend Development",
    shortDescription: "Short intro about Backend Development.",
    fullDescription:
      "Backend Development involves server-side programming, databases, and APIs.",
  },
  {
    id: "4",
    title: "Backend Development",
    shortDescription: "Short intro about Backend Development.",
    fullDescription:
      "Backend Development involves server-side programming, databases, and APIs.",
  },
  {
    id: "5",
    title: "Backend Development",
    shortDescription: "Short intro about Backend Development.",
    fullDescription:
      "Backend Development involves server-side programming, databases, and APIs.",
  },
  {
    id: "6",
    title: "Backend Development",
    shortDescription: "Short intro about Backend Development.",
    fullDescription:
      "Backend Development involves server-side programming, databases, and APIs.",
  },
];

// Optional: Show how state works in below code
const Services = () => {
  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over services and create cards */}
          {services.map((service) => (
            <div key={service.id} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">
                {/* Show either fullDescription or shortDescription */}
              </p>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full">
                {/* Show button text */}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
