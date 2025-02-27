import React, { useState } from 'react';
import { FaRegBookmark, FaBookmark, FaShareAlt } from 'react-icons/fa'; // Bookmark and Share icons
import JobList from './JobList'; // Import your job list data

const Feed = ({ savedJobs, addToSavedJobs, searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const jobsPerPage = 4; // Number of jobs per page

  // Filter jobs based on search query
  const filteredJobs = JobList.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the jobs to display on the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle sharing a job
  const handleShare = (job) => {
    const shareText = `Check out this job: ${job.title} at ${job.company} - ${job.type}. Salary: ${job.salary}. Description: ${job.description}`;
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: shareText,
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert(shareText);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Display current jobs */}
      {currentJobs.map((job) => (
        <div
          key={job.id}
          className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow relative"
        >
          {/* Bookmark and Share Icons in Top-Right Corner */}
          <div className="absolute top-2 right-2 flex gap-2">
            {/* Bookmark Icon */}
            <button
              onClick={() => addToSavedJobs(job)}
              className="p-1 hover:bg-gray-100 rounded"
              title={savedJobs.some((savedJob) => savedJob.id === job.id) ? 'Remove from Saved' : 'Save Job'}
            >
              {savedJobs.some((savedJob) => savedJob.id === job.id) ? (
                <FaBookmark className="text-blue-500" /> // Filled bookmark
              ) : (
                <FaRegBookmark className="text-gray-400" /> // Outline bookmark
              )}
            </button>

            {/* Share Icon */}
            <button
              onClick={() => handleShare(job)}
              className="p-1 hover:bg-gray-100 rounded"
              title="Share Job"
            >
              <FaShareAlt className="text-gray-400" />
            </button>
          </div>

          {/* Job Details */}
          <div className="flex gap-4">
            {/* Company Logo */}
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Job Info */}
            <div className="flex-1">
              <h3 className="font-bold text-lg">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-600">{job.type} • {job.salary}</p>
              {/* Job Description */}
              <p className="text-sm text-gray-600 mt-2">{job.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.ceil(filteredJobs.length / jobsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Feed;