import { Plus, Info, ChevronDown } from 'lucide-react';

// Report History Table Component
const ReportHistoryTable = () => {
  const reports = [
    { id: '1234564', creator: 'Damilare Foluho', created: '31st March 2025', modified: '1st April 2025', status: 'Approved' },
    { id: '1234564', creator: 'Damilare Foluho', created: '31st March 2025', modified: '1st April 2025', status: 'Approved' },
    { id: '1234564', creator: 'Damilare Foluho', created: '31st March 2025', modified: '1st April 2025', status: 'Approved' },
    { id: '1234564', creator: 'Damilare Foluho', created: '31st March 2025', modified: '1st April 2025', status: 'Approved' },
    { id: '1234564', creator: 'Damilare Foluho', created: '31st March 2025', modified: '1st April 2025', status: 'Approved' },
    { id: '1234564', creator: 'Damilare Foluho', created: '31st March 2025', modified: '1st April 2025', status: 'Approved' },
    { id: '1234564', creator: 'Damilare Foluho', created: '31st March 2025', modified: '1st April 2025', status: 'Approved' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex justify-between items-center px-3 py-2 border-b">
        <h3 className="font-medium">Report History</h3>
        <a href="#" className="text-rose-500 text-sm hover:underline">See More</a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-rose-500">
              <th className="px-6 py-3 font-normal">Report ID</th>
              <th className="px-6 py-3 font-normal">Created By</th>
              <th className="px-6 py-3 font-normal">Date Created</th>
              <th className="px-6 py-3 font-normal">Last Modified</th>
              <th className="px-6 py-3 font-normal">Approval Status</th>
              <th className="px-6 py-3 font-normal"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {reports.map((report, index) => (
              <tr key={index} className="text-sm">
                <td className="px-6 py-4">#{report.id}</td>
                <td className="px-6 py-4">{report.creator}</td>
                <td className="px-6 py-4">{report.created}</td>
                <td className="px-6 py-4">{report.modified}</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-rose-500 border border-rose-500 rounded-full px-4 py-1 text-sm hover:bg-rose-50">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportHistoryTable;