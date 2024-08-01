/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect } from "react";
import { FaBuilding, FaCalendar, FaRegBuilding } from "react-icons/fa"; // Example icons

const Card = ({ title, count, pending, approved, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-64 transform transition-transform duration-300 hover:scale-105">
      <div className="flex items- justify-between">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
        <div className="text-gray-800 text-xl mb-4">{icon}</div>
      </div>
      <div className="mb-2 flex flex-col">
        <p className="text-2xl font-bold text-gray-900">{count}</p>
        <div className="flex justify-start gap-2 text-sm text-gray-600">
          <span>Pending: {pending}</span>
          <span>Approved: {approved}</span>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  useEffect(() => {
    const fetchData = async (e) => {
      try {
        const state = localStorage.getItem("state");
        const scheme = localStorage.getItem("scheme");
        console.log(state);
        console.log(scheme);
        const response = await axios.get(
          `http://localhost:8000/api/v1/sna/batch/query`,
          {
            params: {
              state,
              scheme,
            },
          }
        );
        const { data } = response;
        console.log(data)
        // console.log(data.state);
        // localStorage.setItem("state", data.state);

        // navigate("/dashboard");
      } catch (error) {
        console.log(error);
        // setErrorMessage(
        //   "Login failed. Please check your credentials and try again."
        // );
      }
    };

    fetchData();
  });
  return (
    <>
      <div className="flex flex-wrap justify-around">
        <Card
          title="Total Training Centers"
          count={120} // Example count
          pending={10} // Example pending count
          approved={110} // Example approved count
          icon={<FaBuilding />}
        />
        <Card
          title="Total Batches"
          count={45} // Example count
          pending={5} // Example pending count
          approved={40} // Example approved count
          icon={<FaCalendar />}
        />
        <Card
          title="Agencies Registered"
          count={30} // Example count
          pending={2} // Example pending count
          approved={28} // Example approved count
          icon={<FaRegBuilding />}
        />
      </div>
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white mt-4 p-4">
        <div className="p-3">
          <h1 className="text-2xl font-bold">Training Centers</h1>
          <p className="text-gray-600 mb-4">
            View and manage the training centers submitted by the Training
            Agency.
          </p>
        </div>
        <table className="min-w-full bg-white border rounded-md">
          <thead className="rounded-md bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 border-b">TP Name</th>
              <th className="py-2 px-4 border-b">Center Name</th>
              <th className="py-2 px-4 border-b">Location</th>
              <th className="py-2 px-4 border-b">Scheme</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b text-center">TP 1</td>
              <td className="py-2 px-4 border-b text-center">
                Acme Training Center
              </td>
              <td className="py-2 px-4 border-b text-center">
                New Delhi, India
              </td>
              <td className="py-2 px-4 border-b text-center">XYZ</td>
              <td className="py-2 px-4 border-b text-center">
                <span className="inline-block px-2 py-1 text-white bg-green-500 rounded-full">
                  Approved
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-center">TP 2</td>
              <td className="py-2 px-4 border-b text-center">
                Acme Training Center
              </td>
              <td className="py-2 px-4 border-b text-center">
                New Delhi, India
              </td>
              <td className="py-2 px-4 border-b text-center">XYZ</td>
              <td className="py-2 px-4 border-b text-center">
                <span className="inline-block px-2 py-1 text-white bg-yellow-500 rounded-full">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-lg shadow-lg mt-4 p-4">
        <div className="overflow-x-auto">
          <div className="p-3">
            <h1 className="text-2xl font-bold">Training Batches</h1>
            <p className="text-gray-600 mb-4">
              View and manage the training batches submitted by the Training
              Agency.
            </p>
          </div>
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-800 text-white">
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
      </div>
    </>
  );
};

export default Dashboard;
