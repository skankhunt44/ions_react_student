import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";
//Activity 2: How to add data to array, then use map function
const projects = [
  {
    id: 1,
    name: "Employee MS",
    technologies: "MERN Stack",
    // Add "image" and "github" properties for this project
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "MERN Stack",
    // Add "image" and "github" properties for this project
  },
  {
    id: 3,
    name: "Book MS",
    technologies: "MERN Stack",
    // Add "image" and "github" properties for this project
  },
  {
    id: 4,
    name: "Book MS",
    technologies: "MERN Stack",
    // Add "image" and "github" properties for this project
  },
];

function Projects() {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Structure for each card:
              - A div for the card (className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
                transform transition-transform duration-300 hover:scale-105")
              - An img for the project image (className="rounded-lg mb-4 
                w-full h-48 object-cover")
              - A title for the project name (className="text-2xl font-bold mb-2")
              - A paragraph for the technologies (className="text-gray-400 mb-4")
              - An <a> for the GitHub link (className="inline-block bg-gradient-to-r 
                from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer")*/}
        </div>
      </div>
    </div>
  );
}

export default Projects;
