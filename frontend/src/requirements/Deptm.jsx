import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const Deptm = () => {
  const departments = [
    {
      title: "Computer Science",
      description:
        "Dive into cutting-edge computing, software development, and system design.",
      link: "/cse-dept",
      buttonText: "Explore CSE",
      icon: "💻",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Unleash the power of AI, machine learning, and intelligent systems.",
      link: "/ai-dept",
      buttonText: "Discover AI",
      icon: "🤖",
      color: "from-purple-500 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <Search />
        </div>

        <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div
                className={`text-5xl mb-4 bg-gradient-to-r ${dept.color} bg-clip-text text-transparent animate-pulse`}
              >
                {dept.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {dept.title}
              </h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {dept.description}
              </p>
              <NavLink
                to={dept.link}
                className={`bg-gradient-to-r ${dept.color} text-white px-6 py-3 rounded-full text-base font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
              >
                {dept.buttonText}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deptm;
