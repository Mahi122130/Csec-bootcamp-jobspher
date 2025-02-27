import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobList from './JobList';

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault(); 

    
    const foundJob = JobList.find(
      (job) =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase())
    );

    if (foundJob) {
      
      navigate(`/job/${foundJob.id}`);
    } else {
      
      alert('Job not found');
    }
  };

  return (
    <div className="flex justify-center"> {/* Center the search bar */}
      <form onSubmit={handleSearch} className=" flex gap-2 w-96"> {/* Set a smaller width */}
        <input
          type="text"
          placeholder="Job title, keywords, or company name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button
          type="submit"
          className=" px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search
        </button>

      </form>
    </div>
  );
}

export default SearchBar;
