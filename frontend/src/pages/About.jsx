import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">About VTU Material</h1>
          <p className="text-xl text-gray-600">Your one-stop platform for engineering excellence</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Welcome to VTU Material</h2>
            <p className="text-lg text-gray-700">
              Your comprehensive platform dedicated to providing engineering resources for all branches. 
              We understand the importance of having access to well-organized educational materials, 
              which is why we strive to deliver high-quality notes, results links, and syllabus copies 
              to make your academic journey smoother.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-blue-50 rounded-xl p-6 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Comprehensive Notes</h3>
              <p className="text-gray-600">
                Access detailed and well-structured notes for all engineering branches, 
                tailored to help you understand complex topics with ease.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-xl p-6 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Syllabus Copies</h3>
              <p className="text-gray-600">
                Stay on top of your academic requirements with downloadable 
                syllabus copies for each branch and year.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Results Links</h3>
              <p className="text-gray-600">
                Easily access your academic results through our quick and reliable 
                results portal links.
              </p>
            </div>

            <div className="bg-pink-50 rounded-xl p-6 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-pink-700 mb-3">Module PDFs</h3>
              <p className="text-gray-600">
                Download individual module PDFs to focus on specific subjects or topics 
                relevant to your branch and year.
              </p>
            </div>
          </div>

          <div className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Regular updates with latest materials
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Quality-checked content
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Easy navigation and accessibility
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Responsive support system
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
