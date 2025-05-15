import React from 'react';
import reports  from '../data/reports';

// Define interface inside or import from reportData.ts if shared
interface Report {
  id: string;
  createdBy: string;
  dateCreated: string;
  lastModified: string;
  requestedBy: string;
  status: 'Active' | 'Inactive';
}

const ReportTable: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gray-100 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">All Reports</h2>
            <p className="text-sm text-green-500">Active Report</p>
          </div>first
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.817-4.818A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200">
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="p-8 min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Report ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created By
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Created
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Modified
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Requested By
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reports.map((report) => (
              <tr key={report.id}>
                <td className="px-8 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{report.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{report.createdBy}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{report.dateCreated}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{report.lastModified}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{report.requestedBy}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${
                      report.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-4 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing data 1 to 8 of 256K entries
        </div>
        <div className="flex space-x-2">
          <button className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300">{'<'}</button>
          <button className="px-2 py-1 rounded-md bg-red-500 text-white">1</button>
          <button className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300">2</button>
          <button className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300">3</button>
          <button className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300">4</button>
          <button className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300">...</button>
          <button className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300">40</button>
          <button className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300">{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default ReportTable;