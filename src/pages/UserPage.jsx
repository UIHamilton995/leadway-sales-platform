import React from 'react';
import { Edit2, Download } from 'lucide-react';

export default function UserProfile() {
  const reportData = [
    {
      id: '#1234564',
      createdBy: 'Damilare Folusho',
      dateCreated: '31st March 2025',
      lastModified: '1st April 2025',
      approvalStatus: 'Approved'
    },
    {
      id: '#1234564',
      createdBy: 'Damilare Folusho',
      dateCreated: '31st March 2025',
      lastModified: '1st April 2025',
      approvalStatus: 'Approved'
    },
    {
      id: '#1234564',
      createdBy: 'Damilare Folusho',
      dateCreated: '31st March 2025',
      lastModified: '1st April 2025',
      approvalStatus: 'Approved'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <div className="mb-8 flex justify-end">
          <button className="flex items-center text-red-500 hover:text-red-600 transition-colors">
            <span className="mr-2">←</span>
            Back
          </button>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* User profile section */}
          <div className="p-8 flex">
            {/* Left side - Avatar and basic info */}
            <div className="flex-shrink-0 mr-8">
              <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <div className="text-6xl">👨🏽</div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-blue-600 mb-2">Enoch Adejare</h1>
                <p className="text-gray-600 mb-6">#EID123DS</p>
                <button className="flex items-center justify-center w-full px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit User
                </button>
              </div>
            </div>

            {/* Right side - User details grid */}
            <div className="flex-1">
              <div className="grid grid-cols-5 gap-x-12 gap-y-8">
                {/* Email */}
                <div>
                  <p className="text-gray-600 text-sm mb-1">Email:</p>
                  <p className="font-medium">Enochadejare@gmail.com</p>
                </div>

                {/* Phone Number */}
                <div>
                  <p className="text-gray-600 text-sm mb-1">Phone Number:</p>
                  <p className="font-medium">08123456734</p>
                </div>

                {/* Department */}
                <div>
                  <p className="text-gray-600 text-sm mb-1">Department:</p>
                  <p className="font-medium">Sales</p>
                </div>

                {/* Date Created */}
                <div>
                  <p className="text-gray-600 text-sm mb-1">Date Created:</p>
                  <p className="font-medium">25th April 2025</p>
                </div>

                {/* Total Report */}
                <div>
                  <p className="text-gray-600 text-sm mb-1">Total Report</p>
                  <p className="font-medium">57</p>
                </div>

                {/* Gender */}
                <div>
                  <p className="text-gray-600 text-sm mb-1">Gender</p>
                  <p className="font-medium">Male</p>
                </div>

                {/* Status */}
                <div>
                  <p className="text-gray-600 text-sm mb-1">Status</p>
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Report History section */}
          <div className="px-8 pb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Report History</h2>
            
            {/* Table */}
            <div className="overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-6 gap-4 py-4 border-b border-gray-200">
                <div className="text-red-500 font-medium text-sm">Report ID</div>
                <div className="text-red-500 font-medium text-sm">Created By</div>
                <div className="text-red-500 font-medium text-sm">Date Created</div>
                <div className="text-red-500 font-medium text-sm">Last Modified</div>
                <div className="text-red-500 font-medium text-sm">Approval Status</div>
                <div></div>
              </div>

              {/* Table rows */}
              {reportData.map((report, index) => (
                <div key={index} className="grid grid-cols-6 gap-4 py-4 border-b border-gray-100 items-center">
                  <div className="text-gray-900 font-medium">{report.id}</div>
                  <div className="text-gray-700">{report.createdBy}</div>
                  <div className="text-gray-700">{report.dateCreated}</div>
                  <div className="text-gray-700">{report.lastModified}</div>
                  <div>
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {report.approvalStatus}
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <button className="flex items-center text-red-500 border border-red-500 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors text-sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}