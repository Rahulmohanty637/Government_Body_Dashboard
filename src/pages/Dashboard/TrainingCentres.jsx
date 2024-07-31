/* eslint-disable no-unused-vars */
import React from "react";

const TrainingCenters = () => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Training Batches</h1>
      <p className="text-gray-600 mb-4">
        View and manage the training batches submitted by the Training Agency.
      </p>
      <table className="min-w-full bg-white border rounded-md">
        <thead className="rounded-md">
          <tr>
            <th className="py-2 px-4 border-b">TP Name</th>
            <th className="py-2 px-4 border-b">Center Name</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Scheme</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b text-center">
              Information Technology
            </td>
            <td className="py-2 px-4 border-b text-center">
              Acme Training Center
            </td>
            <td className="py-2 px-4 border-b text-center">New Delhi, India</td>
            <td className="py-2 px-4 border-b text-center">XYZ</td>
            <td className="py-2 px-4 border-b text-center">
              <span className="inline-block px-2 py-1 text-white bg-green-500 rounded-full">
                Approved
              </span>
            </td>
            <td className="py-2 px-4 border-b text-center">
              <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
                View Details
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b text-center">
              Information Technology
            </td>
            <td className="py-2 px-4 border-b text-center">
              Zenith Training Institute
            </td>
            <td className="py-2 px-4 border-b text-center">Mumbai, India</td>
            <td className="py-2 px-4 border-b text-center">XYZ</td>
            <td className="py-2 px-4 border-b text-center">
              <span className="inline-block px-2 py-1 text-white bg-yellow-500 rounded-full">
                Pending
              </span>
            </td>
            <td className="py-2 px-4 border-b text-center">
              <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
                View Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TrainingCenters;
