/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

const TrainingCenters = () => {
  const [centerDetails, setCenterDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const state = localStorage.getItem("state");
        const scheme = localStorage.getItem("scheme");
        console.log(state);
        console.log(scheme);
        const response = await axios.get(
          `http://localhost:8000/api/v1/sna/centers/query?state=${state}&schemeName=${scheme}`
        );
        const { data } = response.data;
        console.log(data);
        setCenterDetails(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="overflow-x-auto rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Training Batches</h1>
      <p className="text-gray-600 mb-4">
        View and manage the training batches submitted by the Training Agency.
      </p>
      <table className="min-w-full bg-white border rounded-md">
        <thead className="rounded-md">
          <tr>
            <th className="py-2 px-4 border-b">Center ID</th>
            <th className="py-2 px-4 border-b">Center Name</th>
            <th className="py-2 px-4 border-b">PRN No.</th>
            <th className="py-2 px-4 border-b">Sanction Letter</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {centerDetails.map((center) => (
            <tr key={center._id}>
              <td className="py-2 px-4 border-b text-center">{center.centerId}</td>
              <td className="py-2 px-4 border-b text-center">{center.name}</td>
              <td className="py-2 px-4 border-b text-center">{center.PRN_NO}</td>
              <td className="py-2 px-4 border-b text-center">
                <a
                  href={center.sanction_order_letter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Letter
                </a>
              </td>
              <td className="py-2 px-4 border-b text-center">{center.state}</td>
              <td className="py-2 px-4 border-b text-center">
                <button className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-blue-600 transition duration-300">
                  Approve
                </button>
                <button className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300 ml-2">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainingCenters;
