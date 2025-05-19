import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Results = () => {
  const navigate = useNavigate();
  const [selectedBatch, setSelectedBatch] = useState(null);
  
  const batches = [
    { 
      id: 1, 
      year: "2022-23 batch", 
      color: "from-blue-500 to-indigo-500",
      semesterUrls: [
        "https://www.youtube.com/",
        "https://results.vtu.ac.in/FMEcbcs22/index.php",
        "https://results.vtu.ac.in/TMEcbcs22/index.php",
        "https://results.vtu.ac.in/FOEcbcs22/index.php",
        "https://results.vtu.ac.in/FIEcbcs22/index.php",
        "https://results.vtu.ac.in/SIEcbcs22/index.php",
        "https://results.vtu.ac.in/SEEcbcs22/index.php",
        "https://results.vtu.ac.in/EIEcbcs22/index.php"
      ]
    },
    { 
      id: 2, 
      year: "2023-24 batch", 
      color: "from-blue-500 to-indigo-500",
      semesterUrls: [
        "https://results.vtu.ac.in/JAEcbcs23/index.php",
        "https://results.vtu.ac.in/FMEcbcs23/index.php",
        "https://results.vtu.ac.in/TMEcbcs23/index.php",
        "https://results.vtu.ac.in/FOEcbcs23/index.php",
        "https://results.vtu.ac.in/FIEcbcs23/index.php",
        "https://results.vtu.ac.in/SIEcbcs23/index.php",
        "https://results.vtu.ac.in/SEEcbcs23/index.php",
        "https://results.vtu.ac.in/EIEcbcs23/index.php"
      ]
    },
    { 
      id: 3, 
      year: "2024-25 batch", 
      color: "from-blue-500 to-indigo-500",
      semesterUrls: [
        "https://results.vtu.ac.in/JAEcbcs24/index.php",
        "https://results.vtu.ac.in/FMEcbcs24/index.php",
        "https://results.vtu.ac.in/TMEcbcs24/index.php",
        "https://results.vtu.ac.in/FOEcbcs24/index.php",
        "https://results.vtu.ac.in/FIEcbcs24/index.php",
        "https://results.vtu.ac.in/SIEcbcs24/index.php",
        "https://results.vtu.ac.in/SEEcbcs24/index.php",
        "https://results.vtu.ac.in/EIEcbcs24/index.php"
      ]
    }
  ];

  const handleBatchSelect = (batch) => {
    setSelectedBatch(batch);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 mb-12">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          >
            Results Portal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-center text-gray-600"
          >
            {selectedBatch ? `Select semester for ${selectedBatch.year}` : 'Select your batch to view semester results'}
          </motion.p>
        </div>

        {!selectedBatch ? (
          <div className="space-y-6">
            {batches.map((batch, index) => (
              <motion.button
                key={batch.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleBatchSelect(batch)}
                className={`w-full group relative overflow-hidden rounded-2xl shadow-lg p-8 text-xl font-medium transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.02]`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${batch.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-white text-2xl">{batch.year}</span>
                  <svg 
                    className="w-6 h-6 text-white transform group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <button
              onClick={() => setSelectedBatch(null)}
              className="md:col-span-2 mt-4 px-4 py-2 flex items-center gap-2 text-blue-600 hover:text-blue-800 bg-white/50 hover:bg-white/80 rounded-lg shadow-sm hover:shadow transition-all duration-300 transform hover:scale-105"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Batches
            </button>
            {[...Array(8)].map((_, index) => (
              <a
                key={index}
                href={selectedBatch.semesterUrls[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-blue-50 rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
              >
                
                <h3 className="text-xl font-semibold text-gray-800">Semester {index + 1}</h3>
                <p className="text-sm text-gray-600 mt-2">View Results</p>
              </a>
            ))}

            
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-gray-600"
        >
          <p className="text-sm">
            Need help? Contact your department coordinator
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Results;