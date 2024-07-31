/* eslint-disable no-unused-vars */
import React from "react";

const BatchTable = () => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Training Batches</h1>
      <p className="text-gray-600 mb-4">
        View and manage the training batches submitted by the Training Agency.
      </p>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">TP Name</th>
            <th className="py-2 px-4 border-b">Batch ABN</th>
            <th className="py-2 px-4 border-b">Students</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b text-center">TP 1</td>
            <td className="py-2 px-4 border-b text-center">ABN1234</td>
            <td className="py-2 px-4 border-b text-center">50</td>
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
            <td className="py-2 px-4 border-b text-center">TP 1</td>
            <td className="py-2 px-4 border-b text-center">ABN1234</td>
            <td className="py-2 px-4 border-b text-center">50</td>
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
        </tbody>
      </table>
    </div>
  );
};

export default BatchTable;
