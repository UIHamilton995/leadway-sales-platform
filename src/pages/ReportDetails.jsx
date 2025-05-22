import { useState } from 'react';
import { Trash2, Edit, PlusCircle } from 'lucide-react';

const ReportDetails = () => {
  // Navigation tabs data
  const navTabs = [
    'Premium Dashboard',
    'Receivables',
    'Exclusions',
    'Payment Received',
    'Weekly Addition/Renewal',
    'Activities on Existing Clients',
    '7-Month HMO Policy Review',
    'Update on Renewals',
    'Challenges for the Week/Month'
  ];

  // Dynamic table configurations for each tab
  const tabConfigurations = [
    // Tab 0: Premium Dashboard
    {
      headers: [
        'Team',
        'Full-Year Budget 2025',
        'Retention-Existing Business',
        'WTD Income (Renewals)',
        'WTD Income (Adds)',
        'MTD Premium (Retention)',
        'YTD Premium (Retention)'
      ],
      data: [
        {
          col1: 'Retail SME 2025 Budget',
          col2: '1,324,815,450.77',
          col3: '681,203,527.65',
          col4: '111,227,926.00',
          col5: '5,676,808.77',
          col6: '118,907,462.95',
          col7: '388,510,265.70'
        }
      ]
    },
    // Tab 1: Receivables
    {
      headers: [
        'Client',
        'Policy Number',
        'Receivable Amount',
        'Due Date',
        'Days Outstanding',
        'Status',
        'Follow-up Date'
      ],
      data: [
        {
          col1: 'ABC Corporation',
          col2: 'POL-2025-001244',
          col3: '4,521,780.00',
          col4: '15-Apr-2025',
          col5: '36',
          col6: 'Pending',
          col7: '25-May-2025'
        },
        {
          col1: 'XYZ Limited',
          col2: 'POL-2025-002137',
          col3: '2,145,325.50',
          col4: '22-Mar-2025',
          col5: '60',
          col6: 'Overdue',
          col7: '22-May-2025'
        }
      ]
    },
    // Tab 2: Exclusions
    {
      headers: [
        'Policy Type',
        'Exclusion Category',
        'Description',
        'Effective Date',
        'Impacted Clients',
        'Revenue Impact',
        'Mitigation Plan'
      ],
      data: [
        {
          col1: 'Health Insurance',
          col2: 'Pre-existing Conditions',
          col3: 'Cardiac conditions older than 2 years',
          col4: '01-Jan-2025',
          col5: '127',
          col6: '3,452,700.00',
          col7: 'Specialized coverage option'
        }
      ]
    },
    // Tab 3: Payment Received
    {
      headers: [
        'Client Name',
        'Policy Number',
        'Payment Amount',
        'Payment Date',
        'Payment Method',
        'Reference Number',
        'Status'
      ],
      data: [
        {
          col1: 'Omega Industries',
          col2: 'POL-2025-004567',
          col3: '2,356,780.50',
          col4: '15-May-2025',
          col5: 'Bank Transfer',
          col6: 'BT-20250515-089',
          col7: 'Completed'
        }
      ]
    },
    // Tab 4: Weekly Addition/Renewal
    {
      headers: [
        'Client',
        'Policy Type',
        'Premium Value',
        'Start Date',
        'End Date',
        'Status',
        'Account Manager'
      ],
      data: [
        {
          col1: 'Delta Corporation',
          col2: 'Group Health Insurance',
          col3: '12,450,780.00',
          col4: '01-Jun-2025',
          col5: '31-May-2026',
          col6: 'Pending Activation',
          col7: 'Jane Smith'
        }
      ]
    },
    // Tab 5: Activities on Existing Clients
    {
      headers: [
        'Client Name',
        'Activity Type',
        'Description',
        'Date',
        'Outcome',
        'Follow-up Required',
        'Assigned To'
      ],
      data: [
        {
          col1: 'Phoenix Group',
          col2: 'Policy Review',
          col3: 'Annual coverage assessment',
          col4: '12-May-2025',
          col5: 'Additional coverage needed',
          col6: 'Yes - 26-May-2025',
          col7: 'Michael Johnson'
        }
      ]
    },
    // Tab 6: 7-Month HMO Policy Review
    {
      headers: [
        'Client',
        'Policy Start',
        'Review Date',
        'Utilization Rate',
        'Claim Ratio',
        'Recommendation',
        'Expected Renewal Premium'
      ],
      data: [
        {
          col1: 'Gamma Healthcare',
          col2: '01-Nov-2024',
          col3: '15-May-2025',
          col4: '68%',
          col5: '72%',
          col6: 'Premium increase of 5%',
          col7: '8,675,420.00'
        }
      ]
    },
    // Tab 7: Update on Renewals
    {
      headers: [
        'Client',
        'Current Policy End',
        'Renewal Status',
        'Current Premium',
        'Proposed Premium',
        'Change %',
        'Decision Date'
      ],
      data: [
        {
          col1: 'Epsilon Technologies',
          col2: '30-Jun-2025',
          col3: 'Pending Client Decision',
          col4: '5,780,420.00',
          col5: '6,128,245.20',
          col6: '+6%',
          col7: '15-Jun-2025'
        }
      ]
    },
    // Tab 8: Challenges for the Week/Month
    {
      headers: [
        'Challenge Type',
        'Description',
        'Impact Level',
        'Affected Clients',
        'Resolution Plan',
        'Owner',
        'Target Date'
      ],
      data: [
        {
          col1: 'System Outage',
          col2: 'Claims processing delay due to system maintenance',
          col3: 'Medium',
          col4: '47',
          col5: 'Extended working hours',
          col6: 'IT & Claims Team',
          col7: '25-May-2025'
        }
      ]
    }
  ];

  // State for currently selected tab
  const [selectedTab, setSelectedTab] = useState(0);
  const currentTabConfig = tabConfigurations[selectedTab];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Navigation tabs */}
        <div className="flex flex-wrap border-b">
          {navTabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-3 text-sm font-medium border-r border-gray-200 
                ${selectedTab === index ? 'bg-white' : 'bg-gray-100'}`}
              onClick={() => setSelectedTab(index)}
            >
              {tab}
            </button>
          ))}
          <button className="p-2 text-blue-500">
            <PlusCircle size={20} />
          </button>
        </div>
        
        {/* Dynamic Table Based on Selected Tab */}
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-950 text-white">
                {currentTabConfig.headers.map((header, index) => (
                  <th key={index} className="py-3 px-4 text-left">{header}</th>
                ))}
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentTabConfig.data.map((row, rowIndex) => (
                <tr 
                  key={rowIndex} 
                  className="border-b hover:bg-gray-50 bg-gray-50"
                >
                  {Object.keys(row).map((key, colIndex) => (
                    <td key={colIndex} className="py-3 px-4">{row[key]}</td>
                  ))}
                  <td className="py-3 px-4 flex justify-center space-x-2">
                    <button className="text-red-500">
                      <Trash2 size={18} />
                    </button>
                    <button className="text-blue-500">
                      <Edit size={18} />
                    </button>
                    <button className="text-green-500">
                      <PlusCircle size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReportDetails;