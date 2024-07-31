import React from "react";

const BatchDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-4">
      <h1 className="text-2xl font-bold mb-4">Batch Details</h1>
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/150" // Replace this URL with the actual image URL
          alt="TP"
          className="w-32 h-32 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">Web Development Batch 1</h2>
          <p className="text-gray-600">Acme Training Center</p>
          <p className="text-gray-600">New Delhi, India</p>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Batch Information</h3>
        <p>
          <strong>Start Date:</strong> 2023-06-01
        </p>
        <p>
          <strong>End Date:</strong> 2023-08-31
        </p>
        <p>
          <strong>Participants:</strong> 50
        </p>
        <p>
          <strong>Status:</strong> Approved
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Courses</h3>
        <ul className="list-disc list-inside">
          <li>Web Development</li>
          <li>Data Science</li>
          <li>Cybersecurity</li>
        </ul>
      </div>
      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 text-white bg-green-500 rounded-lg mr-2">
          Approve
        </button>
        <button className="px-4 py-2 text-white bg-red-500 rounded-lg">
          Reject
        </button>
      </div>
    </div>
  );
};

export default BatchDetails;
