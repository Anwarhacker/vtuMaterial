import React, { useState } from 'react';
import pdf from "./sample.pdf"

const Syllabus = () => {
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);

  const syllabusData = [
    {
      id: 1,
      department: 'Computer Science Engineering',
      schemes: ['2022 Scheme', '2021 Scheme', '2020 Scheme'],
      icon: '💻'
    },
    {
      id: 2,
      department: 'Artificial Intelligence & ML',
      schemes: ['2022 Scheme', '2021 Scheme'],
      icon: '🤖'
    },
    
  ];

  const semesters = [
    { id: 1, name: 'Semester 1' },
    { id: 2, name: 'Semester 2' },
    { id: 3, name: 'Semester 3' },
    { id: 4, name: 'Semester 4' },
    { id: 5, name: 'Semester 5' },
    { id: 6, name: 'Semester 6' },
    { id: 7, name: 'Semester 7' },
    { id: 8, name: 'Semester 8' }
  ];

  const pdfs = [
    { id: 1, name: 'Mathematics', code: "21MAT11", url: pdf },
    { id: 2, name: 'Physics', code: "21PHY12", url: pdf },
    { id: 3, name: 'Chemistry', code: "21CHE13", url: pdf },
    { id: 4, name: 'Basic Electronics', code: "21ELN14", url: pdf }
  ];

  const handleBack = () => {
    if (selectedSemester) setSelectedSemester(null);
    else if (selectedScheme) setSelectedScheme(null);
    else if (selectedDept) setSelectedDept(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">VTU Syllabus</h1>
          <p className="text-xl text-gray-600">Access detailed syllabus for all engineering branches</p>
        </div>

        {selectedDept || selectedScheme || selectedSemester ? (
          <button
            onClick={handleBack}
            className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        ) : null}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!selectedDept && syllabusData.map((dept) => (
            <div 
              key={dept.id}
              onClick={() => setSelectedDept(dept)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800">{dept.department}</h2>
              </div>
            </div>
          ))}

          {selectedDept && !selectedScheme && selectedDept.schemes.map((scheme, index) => (
            <div 
              key={index}
              onClick={() => setSelectedScheme(scheme)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{scheme}</h2>
              </div>
            </div>
          ))}

          {selectedScheme && !selectedSemester && semesters.map((sem) => (
            <div 
              key={sem.id}
              onClick={() => setSelectedSemester(sem)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{sem.name}</h2>
              </div>
            </div>
          ))}

          {selectedSemester && pdfs.map((pdfItem) => (
            <div 
              key={pdfItem.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{pdfItem.name}</h2>
                <p className="text-xl font-bold text-blue-800 my-2">Code: {pdfItem.code}</p>
                <div className="pdf-container rounded-lg overflow-hidden shadow-lg">
                  <object
                    data={pdfItem.url}
                    type="application/pdf"
                    className="w-full h-[600px]"
                  >
                    <div className="p-8 bg-gray-100 rounded-lg text-center">
                      <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <p className="text-gray-700 mb-4">Your browser does not support viewing PDFs directly.</p>
                      <a 
                        href={pdfItem.url}
                        download
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download PDF
                      </a>
                    </div>
                  </object>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Note</h3>
          <p className="text-gray-600">
            The syllabus provided here is in accordance with the VTU guidelines. 
            For the most up-to-date information, please refer to the official VTU website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;