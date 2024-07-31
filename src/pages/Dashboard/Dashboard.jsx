import React from "react";
import { FaBuilding, FaCalendar, FaRegBuilding } from "react-icons/fa"; // Example icons

const Card = ({ title, count, pending, approved, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-64 flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
      <div className="text-blue-500 text-3xl mb-4">{icon}</div>
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{count}</p>
      </div>
      <div className="w-full">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Pending:</span>
          <span className="font-semibold">{pending}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>Approved:</span>
          <span className="font-semibold">{approved}</span>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
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
      <header className="bg-gray-800 text-white py-2 rounded-md">
        <h1 className="text-center text-xl font-semibold">Training Centers</h1>
      </header>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border rounded-md">
          <thead className="rounded-md">
            <tr>
              <th className="py-2 px-4 border-b">Center Name</th>
              <th className="py-2 px-4 border-b">Location</th>
              <th className="py-2 px-4 border-b">Scheme</th>
              <th className="py-2 px-4 border-b">Sector</th>
              <th className="py-2 px-4 border-b">Courses</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b text-center">
                Acme Training Center
              </td>
              <td className="py-2 px-4 border-b text-center">
                New Delhi, India
              </td>
              <td className="py-2 px-4 border-b text-center">XYZ</td>
              <td className="py-2 px-4 border-b text-center">
                Information Technology
              </td>
              <td className="py-2 px-4 border-b text-center">
                <div>Web Development</div>
                <div>Data Science</div>
                <div>Cybersecurity</div>
              </td>
              <td className="py-2 px-4 border-b text-center">
                <span className="inline-block px-2 py-1 text-white bg-green-500 rounded-full">
                  Approved
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-center">
                Acme Training Center
              </td>
              <td className="py-2 px-4 border-b text-center">
                New Delhi, India
              </td>
              <td className="py-2 px-4 border-b text-center">XYZ</td>
              <td className="py-2 px-4 border-b text-center">
                Information Technology
              </td>
              <td className="py-2 px-4 border-b text-center">
                <div>Web Development</div>
                <div>Data Science</div>
                <div>Cybersecurity</div>
              </td>
              <td className="py-2 px-4 border-b text-center">
                <span className="inline-block px-2 py-1 text-white bg-yellow-500 rounded-full">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <header className="bg-gray-800 text-white py-2 mt-4 rounded-md">
        <h1 className="text-center text-xl font-semibold">Training Centers</h1>
      </header>
      <div className="">
        {/* <h1 className="text-2xl font-bold">Training Batches</h1>
        <p className="text-gray-600 mb-4">
          View and manage the training batches submitted by the Training Agency.
        </p> */}
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Batch Name</th>
                <th className="py-2 px-4 border-b">Center</th>
                <th className="py-2 px-4 border-b">Start Date</th>
                <th className="py-2 px-4 border-b">End Date</th>
                <th className="py-2 px-4 border-b">Participants</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Web Development Batch 1</td>
                <td className="py-2 px-4 border-b">Acme Training Center</td>
                <td className="py-2 px-4 border-b">2023-06-01</td>
                <td className="py-2 px-4 border-b">2023-08-31</td>
                <td className="py-2 px-4 border-b">50</td>
                <td className="py-2 px-4 border-b">
                  <span className="inline-block px-2 py-1 text-white bg-green-500 rounded-full">
                    Approved
                  </span>
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
