import { useState } from 'react';
import CheckboxItem from './CheckboxItem';

const CreateReportModal = ({ onClose }) => {
  const [selectAll, setSelectAll] = useState(true);
  const [checkboxes, setCheckboxes] = useState({
    premiumDash: true,
    receivables: true,
    exclusions: true,
    paymentReceived: true,
    weeklyAdditions: true,
    activitiesOnExisting: true,
    sevenMonthPolicy: true,
    updatesOnRenewals: true,
    challenges: true
  });

  const handleSelectAll = () => {
    const newValue = !selectAll;
    setSelectAll(newValue);
    
    // Update all checkboxes to match selectAll state
    const updatedCheckboxes = {};
    Object.keys(checkboxes).forEach(key => {
      updatedCheckboxes[key] = newValue;
    });
    
    setCheckboxes(updatedCheckboxes);
  };

  const handleCheckboxChange = (name) => {
    const updatedCheckboxes = {
      ...checkboxes,
      [name]: !checkboxes[name]
    };
    
    setCheckboxes(updatedCheckboxes);
    
    // If all checkboxes are checked, set selectAll to true
    // If any checkbox is unchecked, set selectAll to false
    const allChecked = Object.values(updatedCheckboxes).every(value => value === true);
    setSelectAll(allChecked);
  };

  return (
    <div className="fixed right-16 h-40 z-50">
      <div className="bg-white rounded-xl shadow-xl border border-gray-200 w-4/4 overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-3 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-rose-500">Create Report</h2>
        </div>

        {/* Modal Content */}
        <div className="px-6 py-3">
          <div className="mb-3">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-400">Select tabs</p>
              <button className="flex items-center text-rose-500 border border-rose-500 rounded-full px-3 py-1 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Upload File
              </button>
            </div>

            {/* Checkboxes */}
            <div className="space-y-2">
              <div onClick={handleSelectAll}>
                <CheckboxItem label="Select all" checked={selectAll} />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div onClick={() => handleCheckboxChange('premiumDash')}>
                  <CheckboxItem label="Premium Dash" checked={checkboxes.premiumDash} />
                </div>
                <div onClick={() => handleCheckboxChange('receivables')}>
                  <CheckboxItem label="Receivables" checked={checkboxes.receivables} />
                </div>
                <div onClick={() => handleCheckboxChange('exclusions')}>
                  <CheckboxItem label="Exclusions" checked={checkboxes.exclusions} />
                </div>
                <div onClick={() => handleCheckboxChange('paymentReceived')}>
                  <CheckboxItem label="Payment Received" checked={checkboxes.paymentReceived} />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div onClick={() => handleCheckboxChange('weeklyAdditions')}>
                  <CheckboxItem label="Weekly Additions/Renewals" checked={checkboxes.weeklyAdditions} />
                </div>
                <div onClick={() => handleCheckboxChange('activitiesOnExisting')}>
                  <CheckboxItem label="Activities on Existing Clients" checked={checkboxes.activitiesOnExisting} />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div onClick={() => handleCheckboxChange('sevenMonthPolicy')}>
                  <CheckboxItem label="7 Month Policy Renewal" checked={checkboxes.sevenMonthPolicy} />
                </div>
                <div onClick={() => handleCheckboxChange('updatesOnRenewals')}>
                  <CheckboxItem label="Updates on Renewals" checked={checkboxes.updatesOnRenewals} />
                </div>
                <div onClick={() => handleCheckboxChange('challenges')}>
                  <CheckboxItem label="Challenges" checked={checkboxes.challenges} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Table Settings */}
          <div className="bg-gray-50 -mx-6 px-4 py-2 border-t border-b border-gray-200">
            <h3 className="text-gray-400 mb-4">Table settings</h3>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-40 text-gray-500">Number of Rows</span>
                <div className="bg-gray-100 rounded w-full h-10"></div>
              </div>
              <div className="flex items-center">
                <span className="w-40 text-gray-500">Number of Columns</span>
                <div className="bg-gray-100 rounded w-full h-10"></div>
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex justify-end items-center space-x-3 mt-4">
            <button className="border border-gray-300 rounded-lg px-6 py-3 text-gray-700">
              Use Default
            </button>
            <button className="bg-rose-500 text-white rounded-lg px-10 py-3" onClick={onClose}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateReportModal;