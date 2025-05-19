import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Student Projects</h1>
        <div className="grid gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Guidelines</h2>
            <p className="text-gray-600 mb-4">
              Find resources and guidelines for your academic projects.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              View Guidelines
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Repository</h2>
            <p className="text-gray-600 mb-4">
              Browse through previous student projects for reference.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Browse Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;