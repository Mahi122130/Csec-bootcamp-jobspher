import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Remove icon

const SavedJobs = ({ savedJobs, removeFromSavedJobs }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Saved Jobs</h2>
      {savedJobs.map((job) => (
        <div
          key={job.id}
          className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow relative mb-4"
        >
          {/* Remove Icon in Top-Right Corner */}
          <button
            onClick={() => removeFromSavedJobs(job.id)}
            className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded"
            title="Remove Job"
          >
            <FaTimes className="text-red-500" />
          </button>

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
            <div>
              <h3 className="font-bold text-lg">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-600">{job.type} • {job.salary}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedJobs;