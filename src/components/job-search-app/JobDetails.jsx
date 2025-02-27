import React from 'react';
import { useParams } from 'react-router-dom';
import JobList from './JobList'; // Import your job list data

function JobDetails() {
  const { jobId } = useParams(); // Get the job ID from the URL

  // Find the job by ID
  const job = JobList.find((job) => job.id === jobId);

  if (!job) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Job not found</h1>
        <p className="text-gray-600">The job you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-600">{job.type} • {job.salary}</p>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Job Description</h2>
        <p className="text-gray-800">{job.description}</p>
      </div>
    </div>
  );
}

export default JobDetails;