import React, { useState } from 'react';
import { Calendar, Search, Download, Eye } from 'lucide-react';

export default function CollateReportModal() {
  const [formData, setFormData] = useState({
    reportTitle: '',
    to: '',
    from: '',
    location: '',
    date: '',
    subject: ''
  });

  const [selectedTabs, setSelectedTabs] = useState({
    selectAll: false,
    premiumDash: false,
    receivables: false,
    exclusions: false,
    paymentReceived: false,
    weeklyAdditions: false,
    activitiesExisting: false,
    policyRenewal: false,
    updatesRenewals: false,
    challenges: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field) => {
    if (field === 'selectAll') {
      const newValue = !selectedTabs.selectAll;
      setSelectedTabs(prev => ({
        ...Object.keys(prev).reduce((acc, key) => {
          acc[key] = newValue;
          return acc;
        }, {})
      }));
    } else {
      setSelectedTabs(prev => ({
        ...prev,
        [field]: !prev[field],
        selectAll: false
      }));
    }
  };

  const tabOptions = [
    { key: 'premiumDash', label: 'Premium Dash' },
    { key: 'receivables', label: 'Receivables' },
    { key: 'exclusions', label: 'Exclusions' },
    { key: 'paymentReceived', label: 'Payment Received' },
    { key: 'weeklyAdditions', label: 'Weekly Additions/Renewals' },
    { key: 'activitiesExisting', label: 'Activities on Existing Clients' },
    { key: 'policyRenewal', label: '7 Month Policy Renewal' },
    { key: 'updatesRenewals', label: 'Updates on Renewals' },
    { key: 'challenges', label: 'Challenges' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl">
        {/* Header */}
        <h1 className="text-3xl font-bold text-red-500 mb-8">
          Collate Report
        </h1>

        {/* Form fields in 3 columns */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Enter Report Title */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              Enter Report Title
            </label>
            <input
              type="text"
              value={formData.reportTitle}
              onChange={(e) => handleInputChange('reportTitle', e.target.value)}
              className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            />
          </div>

          {/* To */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              To
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.to}
                onChange={(e) => handleInputChange('to', e.target.value)}
                className="w-full px-3 py-3 pl-8 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <div className="w-3 h-3 border-2 border-red-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* From */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              From
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.from}
                onChange={(e) => handleInputChange('from', e.target.value)}
                className="w-full px-3 py-3 pl-8 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Search className="w-3 h-3 text-red-500" />
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full px-3 py-3 pl-8 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Search className="w-3 h-3 text-red-500" />
              </div>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              Date
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full px-3 py-3 pr-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Calendar className="w-4 h-4 text-red-500" />
              </div>
            </div>
          </div>

          {/* Subject - spans full width */}
          <div className="col-span-3">
            <label className="block text-gray-400 text-sm mb-2">
              Subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            />
          </div>
        </div>

        {/* Select tabs section */}
        <div className="mb-8">
          <h2 className="text-lg text-gray-400 mb-6">
            Select tabs to include in report
          </h2>

          {/* Select all checkbox */}
          <div className="flex items-center mb-6">
            <div className="relative">
              <input
                type="checkbox"
                id="selectAll"
                checked={selectedTabs.selectAll}
                onChange={() => handleCheckboxChange('selectAll')}
                className="sr-only"
              />
              <div 
                className={`w-5 h-5 border-2 rounded ${
                  selectedTabs.selectAll 
                    ? 'bg-red-500 border-red-500' 
                    : 'border-gray-300'
                } cursor-pointer flex items-center justify-center`}
                onClick={() => handleCheckboxChange('selectAll')}
              >
                {selectedTabs.selectAll && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
            <label htmlFor="selectAll" className="ml-3 text-red-500 text-sm cursor-pointer">
              Select all
            </label>
          </div>

          {/* Tab options grid - 3 columns */}
          <div className="grid grid-cols-3 gap-y-4 gap-x-6">
            {tabOptions.map((option) => (
              <div key={option.key} className="flex items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    id={option.key}
                    checked={selectedTabs[option.key]}
                    onChange={() => handleCheckboxChange(option.key)}
                    className="sr-only"
                  />
                  <div 
                    className={`w-5 h-5 border-2 rounded ${
                      selectedTabs[option.key] 
                        ? 'bg-red-500 border-red-500' 
                        : 'border-gray-300'
                    } cursor-pointer flex items-center justify-center flex-shrink-0`}
                    onClick={() => handleCheckboxChange(option.key)}
                  >
                    {selectedTabs[option.key] && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <label htmlFor={option.key} className="ml-3 text-gray-500 text-sm cursor-pointer">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-between items-center pt-4">
          {/* Download Report button */}
          <button className="flex items-center text-red-500 border border-red-500 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors text-sm">
            <span className="mr-2">Download Report</span>
            <Download className="w-4 h-4" />
          </button>

          <div className="flex gap-3">
            {/* Preview button */}
            <button className="flex items-center text-gray-600 bg-gray-100 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
              <span className="mr-2">Preview</span>
              <Eye className="w-4 h-4" />
            </button>

            {/* Send button */}
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-lg text-sm transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}