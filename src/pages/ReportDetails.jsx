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
        'Customer',
        'Start Date',
        'Payment Terms',
        'Due Date',
        'Total Premium',
        'Amount Due',
        'Updates'
      ],
      data: [
        {
          col1: 'ABC Corporation',
          col2: '15-Apr-2025',
          col3: 'Annual',
          col4: '25-May-2025',
          col5: '4,000,000',
          col6: '3,000,000',
          col7: 'Client has been billed for premium according to latest policy rates'
        },
        {
          col1: 'Lily Hospital',
          col2: '15-May-2025',
          col3: 'Bi-Annual',
          col4: '22-Mar-2025',
          col5: '600,000,000',
          col6: '500,000,000',
          col7: 'Overdue'
        }
      ]
    },
    // Tab 2: Exclusions
    {
      headers: [
        'Company',
        'Amount Invoiced',
        'Date Invoiced',
        'Payment Remark',
      ],
      data: [
        {
          col1: 'Lily Hospital',
          col2: '3,452,700.00',
          col4: '01-Jan-2025',
          col3: 'Cardiac conditions older than 2 years',
        }
      ]
    },
    // Tab 3: Payment Received
    {
      headers: [
        'Client',
        'Status',
        'Amount received'
      ],
      data: [
        {
          col1: 'Lily Hospital',
          col2: 'Paid',
          col3: '2,356,780.50'
        }
      ]
    },
    // Tab 4: Weekly Addition/Renewal
    {
      headers: [
        'Client',
        'Amount',
        'Comment'
      ],
      data: [
        {
          col1: 'Dangote Refinery',
          col2: '12,450,780.00',
          col3: 'Pending Activation',
        }
      ]
    },
    // Tab 5: Activities on Existing Clients
    {
      headers: [
        'Client',
        'Activity',
        'Comments',
      ],
      data: [
        {
          col1: 'BUA Group',
          col2: 'Policy Review',
          col3: 'Annual coverage assessment was succesful.'
        }
      ]
    },
    // Tab 6: 7-Month HMO Policy Review
    {
      headers: [
        'Company',
        'Total Premium',
        'Loss Ratio (LR)',
        'Cost of Revenue (COR)',
        'Comment'
      ],
      data: [
        {
          col1: 'Airtel NG',
          col2: '8,675,420.00',
          col3: '40%',
          col4: '68%',
          col5: 'Premium increase of 5%',
        }
      ]
    },
    // Tab 7: Update on Renewals
    {
      headers: [
        'Company',
        'Date',
        'Premium',
        'Status',
        'Renewal Rate',
        'Loss Ratio (LR)',
      ],
      data: [
        {
          col1: 'Epsilon Technologies',
          col2: '30-Jun-2025',
          col4: '5,780,420.00',
          col5: 'Pending',
          col6: '10%',
          col7: '30%'
        }
      ]
    },
    // Tab 8: Challenges for the Week/Month
    {
      headers: [
        'Comments',
      ],
      data: [
        {
          col1: 'Claims processing delay due to system maintenance',
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