import React, { useState, useEffect } from 'react'; // Add useEffect
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import Feed from './components/Feed';
import SavedJobs from './components/SavedJobs';
import JobDetails from './components/JobDetails';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [savedJobs, setSavedJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on page load
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Function to add a job to saved jobs
  const addToSavedJobs = (job) => {
    if (!savedJobs.some((savedJob) => savedJob.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  // Function to remove a job from saved jobs
  const removeFromSavedJobs = (jobId) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== jobId));
  };

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Function to handle successful authentication
  const handleAuthentication = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Persist authentication state
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Conditionally render Navbar */}
        {isAuthenticated && <Navbar isAuthenticated={isAuthenticated} />}
        <main className="container mx-auto mt-6">
          {/* Routes */}
          <Routes>
            {/* Redirect to Login if not authenticated */}
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <>
                    <SearchBar onSearch={handleSearch} />
                    <div className="flex gap-6 p-4">
                      <div className="w-[300px]">
                        <Filter />
                      </div>
                      <div className="w-[600px]">
                        <Feed
                          savedJobs={savedJobs}
                          addToSavedJobs={addToSavedJobs}
                          searchQuery={searchQuery}
                        />
                      </div>
                      <div className="w-[300px]">
                        <SavedJobs savedJobs={savedJobs} removeFromSavedJobs={removeFromSavedJobs} />
                      </div>
                    </div>
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/" />
                ) : (
                  <Login onAuthentication={handleAuthentication} />
                )
              }
            />
            <Route
              path="/signup"
              element={
                isAuthenticated ? (
                  <Navigate to="/" />
                ) : (
                  <SignUp onAuthentication={handleAuthentication} />
                )
              }
            />
            <Route path="/job/:jobId" element={<JobDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;