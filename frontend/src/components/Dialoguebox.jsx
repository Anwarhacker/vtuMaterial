import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dialoguebox = () => {
  const [commit, setCommit] = useState('');
  const [commits, setCommits] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([])


  // Fetch commits function
  const fetchCommits = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/commits');
      setCommits(response.data);
    } catch (err) {
      console.error('Error fetching commits:', err);
    }
  };

  // Load commits on component mount
  useEffect(() => {
    fetchCommits();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await axios.post('http://localhost:3000/api/commit', {
        message: commit
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setCommit('');
      await fetchCommits(); // Added await here
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save commit');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users')
        setUsers(response.data)
      } catch (err) {
        setError('Failed to fetch user data')
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-3xl w-full space-y-8">
        {/* Commit Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Register Commit</h2>
          {error && (
            <div className="mb-4 text-red-500 text-sm">{error}</div>
          )}
          <textarea
            value={commit}
            onChange={(e) => setCommit(e.target.value)}
            placeholder="Enter your commit message..."
            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 ${isLoading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-lg transition-colors`}
          >
            {isLoading ? 'Saving...' : 'Submit'}
          </button>
        </form>

        {/* Commits Display */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Commits</h3>
          <div className="space-y-6">
            {commits.map((commit) => {
              const user = users.find(u => u._id === commit.userId);
              return (
                <div key={commit._id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                        {user?.profileImage ? (
                          <img 
                            src={user.profileImage} 
                            alt={user.username} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white text-lg">
                            {user?.username?.charAt(0).toUpperCase() || '?'}
                          </div>
                        )}
                      </div>
                      <span className="font-medium text-gray-800">{user?.username || 'Unknown User'}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(commit.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                  <p className="text-gray-800 whitespace-pre-wrap break-words pl-13">
                    {commit.message}
                  </p>
                </div>
              );
            })}
            {commits.length === 0 && (
              <p className="text-gray-500 text-center py-4">No commits yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialoguebox;