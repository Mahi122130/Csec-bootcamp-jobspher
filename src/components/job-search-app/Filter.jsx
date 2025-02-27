import React from 'react';

function Filter() {
  return (
    <div className="flex flex-col gap-4 rounded-lg shadow p-6 bg-white">
      <h3 className="font-bold">Filter</h3>
      <div className="flex flex-col gap-4">
        {/* Date Posted */}
        <div>
          <label className="block text-sm font-medium mb-1">Date Posted</label>
          <select className="w-full p-2 border rounded">
            <option>Last 24 Hours</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Job Type</label>
          <select className="w-full p-2 border rounded">
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
            <option>Contract</option>
            <option>Volunteer</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            placeholder="Enter your location"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Experience Level */}
        <div>
          <label className="block text-sm font-medium mb-1">Experience Level</label>
          <select className="w-full p-2 border rounded">
            <option>Entry Level</option>
            <option>Intermediate</option>
            <option>Senior</option>
          </select>
        </div>

        {/* Salary Range */}
        <div>
          <label className="block text-sm font-medium mb-1">Salary Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="From"
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              placeholder="To"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Reset Filters Button */}
        <button className="w-full p-2 bg-gray-200 rounded hover:bg-gray-300">
          Reset All Filters
        </button>
      </div>
    </div>
  );
}

export default Filter;