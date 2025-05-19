import React from "react";
import { useNavigate } from "react-router-dom";

const Cse2022 = () => {
  const navigate = useNavigate();
  const semesters = [
    {
      number: 1,
      title: "1st Semester",
      description: "Foundations of AI and programming basics",
    },
    {
      number: 2,
      title: "2nd Semester",
      description: "Core algorithms and data structures",
    },
    {
      number: 3,
      title: "3rd Semester",
      description: "Machine learning fundamentals",
    },
    {
      number: 4,
      title: "4th Semester",
      description: "Advanced AI techniques and applications",
    },
    {
      number: 5,
      title: "5th Semester",
      description: "Deep learning and neural networks",
    },
    {
      number: 6,
      title: "6th Semester",
      description: "AI systems design and ethics",
    },
    {
      number: 7,
      title: "7th Semester",
      description: "Specialized AI projects and research",
    },
    {
      number: 8,
      title: "8th Semester",
      description: "Capstone project and industry internship",
    },
  ];

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={handleBack}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 transform hover:-translate-x-1"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Departments
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 bg-clip-text  bg-gradient-to-r from-blue-600 to-indigo-600 animate-fade-in">
            Computer science enginering
          </h1>
          <p className="mt-4 text-xl text-gray-600 font-medium">2022 Scheme</p>
          <div className="mt-6 w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {semesters.map((sem) => (
            <button
              key={sem.number}
              onClick={() =>
                navigate(`/cse-dept/2022-scheme/semester-${sem.number}`)
              }
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <span className="text-4xl font-extrabold text-blue-600 group-hover:text-white transition-colors duration-300">
                    {sem.number}
                  </span>
                  <span className="ml-2 text-lg text-gray-500 group-hover:text-blue-100 transition-colors duration-300">
                    {sem.number === 1
                      ? "st"
                      : sem.number === 2
                      ? "nd"
                      : sem.number === 3
                      ? "rd"
                      : "th"}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                  {sem.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 group-hover:text-blue-100 transition-colors duration-300 line-clamp-2">
                  {sem.description}
                </p>
              </div>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cse2022;
