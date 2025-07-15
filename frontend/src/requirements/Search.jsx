import { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm);
      // Add your search logic here (e.g., API call or navigation)
    }
  };

  return (
    <div className="w-full mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 p-12 sm:p-16 mt-6 rounded-2xl shadow-2xl">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-white tracking-tight animate-fade-in">
        Discover Your Academic Journey Here
      </h1>
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Search courses, departments, or facilities..."
              className="w-full px-6 py-4 bg-white rounded-lg text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all duration-300 shadow-md"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center px-5 text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          {isFocused && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl p-4 z-10 animate-slide-down">
              <p className="text-sm text-gray-600">
                Try searching for: <span className="font-semibold">Computer Science</span>,{' '}
                <span className="font-semibold">AI Syllabus</span>, or{' '}
                <span className="font-semibold">Lab Facilities</span>
              </p>
            </div>
          )}
        </form>
      </div>
      
    </div>
  );
};

export default Search;