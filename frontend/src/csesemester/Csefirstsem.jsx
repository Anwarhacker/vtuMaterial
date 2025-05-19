import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pdf from './sample.pdf';

const Csefirstsem = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [showModules, setShowModules] = useState(false);
  const [showPapers, setShowPapers] = useState(false);
  const [showSyllabus, setShowSyllabus] = useState(false);
  const navigate = useNavigate();

  const handleBackk = () => {
    navigate(-1);
  };

  const subjects = [
    { code: '21MAT11', name: 'MATHEMATICS FOR CSE STREAM' },
    { code: '21PHY12', name: 'PHYSICS FOR CSE STREAM' },
    
  ];

  // Add this to your state declarations at the top
  const [showModuleContent, setShowModuleContent] = useState(null);
  
  // Update the modules array to include PDF links
  const modules = [
      {
        id: 1,
        title: 'Module-1',
        description: 'Click here to get a detailed description and understanding of the fundamental concepts covered in this module. Learn the basics, solve examples, and master the topics through comprehensive study materials.',
        materials: [
          {
            id: 'm1_1',
            title: 'Module 1 Notes',
            description: 'Complete lecture notes',
            link: '/pdfs/module1-notes.pdf'
          },
          {
            id: 'm1_2',
            title: 'Practice Problems',
            description: 'Solved examples and practice questions',
            link: '/pdfs/module1-problems.pdf'
          }
        ]
      },
      {
        id: 2,
        title: 'Module-2',
        description: 'Spatial Derivatives and Vector Calculus: Study the concepts of vector derivatives and their applications in engineering problems. Focus on vector calculus fundamentals and their practical implementations.',
        materials: [
          {
            id: 'm2_1',
            title: 'Module 2 Notes',
            description: 'Complete lecture notes',
            link: '/pdfs/module2-notes.pdf'
          },
          {
            id: 'm2_2',
            title: 'Practice Problems',
            description: 'Solved examples and practice questions',
            link: '/pdfs/module2-problems.pdf'
          }
        ]
      }
    ];
  
  // Add this handler function
  const handleStudyClick = (moduleId) => {
    setShowModuleContent(moduleId);
  };
  
  
  const questionPapers = [
    {
      id: 1,
      year: '2023',
      term: 'Winter',
      link: '/pdfs/2023-winter.pdf'
    },
    {
      id: 2,
      year: '2023',
      term: 'Summer',
      link: '/pdfs/2023-summer.pdf'
    },
    
  ];

  // Replace the existing syllabusContent with this
  const syllabusContent = {
    title: "Course Syllabus",
    description: "Access the complete course syllabus and related documents",
    documents: [
      {
        id: 1,
        title: "Complete Syllabus",
        description: "Detailed course syllabus with all units and outcomes",
        link: "sample.pdf"
      },
      {
        id: 2,
        title: "Course Outcomes",
        description: "Expected learning outcomes and objectives",
        link: "/pdfs/course-outcomes.pdf"
      },
      
    ]
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    resetViews();
  };

  const handleBack = () => {
    if (showModules || showPapers || showSyllabus) {
      resetViews();
    } else {
      setSelectedSubject(null);
    }
  };

  const resetViews = () => {
    setShowModules(false);
    setShowPapers(false);
    setShowSyllabus(false);
    setShowModuleContent(null);
  };

  const handleCourseNotesClick = () => {
    resetViews();
    setShowModules(true);
  };

  const handleQuestionPapersClick = () => {
    resetViews();
    setShowPapers(true);
  };

  const handleSyllabusClick = () => {
    resetViews();
    setShowSyllabus(true);
  };

const renderMaterialContent = () => {
  if (showModules) {
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Course Modules</h2>
        <div className="grid gap-6">
          {showModuleContent ? (
            <>
              <button
                onClick={() => setShowModuleContent(null)}
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Modules
              </button>
              <div className="grid gap-4">
                {modules
                  .find(m => m.id === showModuleContent)
                  ?.materials.map((material) => (
                    <div
                      key={material.id}
                      className="bg-white p-2 rounded-xl border hover:border-blue-300 hover:shadow-md transition-all duration-200"
                    >
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{material.title}</h3>
                          <p className="text-gray-600 mt-1">{material.description}</p>
                        </div>
                        
                        <div className="pdf-container rounded-lg overflow-hidden shadow-lg">
                          <object
                            data={pdf}
                            type="application/pdf"
                            className="w-full h-[600px]"
                          >
                            <div className="p-8 bg-gray-100 rounded-lg text-center">
                              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                              <p className="text-gray-700 mb-4">Your browser does not support viewingggg PDFs directly.</p>
                              <a 
                                href={pdf}
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
            </>
          ) : (
            modules.map((module) => (
              <div key={module.id} className="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl hover:border-blue-200 transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-3">{module.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{module.description}</p>
                <button 
                  onClick={() => handleStudyClick(module.id)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 font-semibold shadow-md hover:shadow-lg"
                >
                  <span>Access Notes</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

  if (showPapers) {
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Question Papers</h2>
        <div className="grid gap-4">
          {questionPapers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white p-2 rounded-xl border hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{paper.term} {paper.year}</h3>
                    <p className="text-gray-600 mt-1">Question Paper</p>
                  </div>
                </div>
                
                <div className="pdf-container rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://pxl.to/81lua6c" 
                    width="100%" 
                    height="600" 
                    className="w-full"
                    allowFullScreen
                  ></iframe>
                  {/* <div className="p-8 bg-gray-100 rounded-lg text-center">
                    <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-gray-700 mb-4">Your browser does not support viewing PDFs directly.</p>
                    <a 
                      href={pdf}
                      download
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (showSyllabus) {
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">{syllabusContent.title}</h2>
        <p className="text-gray-600 mb-6">{syllabusContent.description}</p>
        
        <div className="grid gap-4">
          {syllabusContent.documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-2 rounded-xl border hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{doc.title}</h3>
                    <p className="text-gray-600 mt-1">{doc.description}</p>
                  </div>
                </div>
                
                <div className="pdf-container rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://pxl.to/81lua6c" 
                    width="100%" 
                    height="600" 
                    className="w-full"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">{selectedSubject.name}</h2>
      <div className="inline-block bg-blue-50 px-4 py-2 rounded-lg">
        <span className="font-mono text-blue-600">Subject Code: {selectedSubject.code}</span>
      </div>
      <div className="mt-8 space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">Course Materials</h3>
        <div className="grid gap-6">
          <button 
            onClick={handleCourseNotesClick}
            className="text-left p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <span className="font-semibold text-gray-700 group-hover:text-blue-600">Course Notes</span>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
          <button 
            onClick={handleQuestionPapersClick}
            className="text-left p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📝</span>
                <span className="font-semibold text-gray-700 group-hover:text-blue-600">Question Papers</span>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
          <button 
            onClick={handleSyllabusClick}
            className="text-left p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📖</span>
                <span className="font-semibold text-gray-700 group-hover:text-blue-600">Syllabus</span>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

  return (
    <div className=" bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
          First Semester
        </h1>
        <p className="text-center text-gray-600 mb-8">AI Engineering - 2022 Scheme</p>
        
        {!selectedSubject ? (
          <div className="rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/90">
            <h2 className="text-2xl font-bold mb-8 text-center text-blue-800 border-b pb-4">
              Course Subjects
            </h2>
            
            <div className="grid gap-6">
              <button
                onClick={handleBackk}
                className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              {subjects.map((subject, index) => (
                <button
                  key={index}
                  onClick={() => handleSubjectClick(subject)}
                  className="w-full text-left group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl hover:from-blue-50 hover:to-white transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                      <div className="flex items-center gap-6">
                        <span className="font-mono text-blue-600 bg-blue-100/50 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">
                          {subject.code}
                        </span>
                        <span className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors text-lg">
                          {subject.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-500 group-hover:text-blue-600 transition-colors">
                        <span className="hidden sm:inline font-medium">View Details</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <button
              onClick={handleBack}
              className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to {showModules || showPapers || showSyllabus ? 'Materials' : 'Subjects'}
            </button>
            
            {renderMaterialContent()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Csefirstsem;