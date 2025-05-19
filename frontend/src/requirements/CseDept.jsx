import React from "react";
import { useNavigate } from "react-router-dom";

const CseDept = () => {
  const navigate = useNavigate();

  const handleBackk = () => {
    navigate(-1);
  };

  return (
    <div className=" bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={handleBackk}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
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
          Back
        </button>
        <div className=" rounded-3xl shadow-2xl p-8 backdrop-blur-sm bg-white/90">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Computer science enginering
            </h1>
            <p className="text-xl text-gray-600">Department of Engineering</p>
            <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="mt-12 space-y-8">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Available Schemes
              </h2>
              <p className="text-gray-600 mb-6">
                Select your academic scheme to access course materials and
                resources
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => navigate("/cse-dept/2022-scheme")}
                  className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-2">2022 Scheme</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CseDept;
