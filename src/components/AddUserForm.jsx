import React, { useState } from 'react';
import { ChevronDown, Calendar, Plus, ArrowRight } from 'lucide-react';

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    emailAddress1: '',
    emailAddress2: '',
    department: '',
    dateOfEntry: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-8">
          <button className="flex items-center text-red-500 hover:text-red-600 transition-colors">
            <span className="mr-2">←</span>
            Back
          </button>
        </div>

        {/* Form container */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-medium text-gray-900 mb-4">
              Add a new user to the team
            </h1>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </div>

          {/* Form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name field */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Phone Number field */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
              />
            </div>

            {/* Email Address 1 */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Email Address
              </label>
              <input
                type="email"
                value={formData.emailAddress1}
                onChange={(e) => handleInputChange('emailAddress1', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
              />
            </div>

            {/* Department field */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Department
              </label>
              <div className="relative">
                <select
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors appearance-none bg-white"
                >
                  <option value="">Select Department</option>
                  <option value="engineering">Engineering</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="hr">Human Resources</option>
                  <option value="finance">Finance</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <ChevronDown className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Email Address 2 */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Email Address
              </label>
              <input
                type="email"
                value={formData.emailAddress2}
                onChange={(e) => handleInputChange('emailAddress2', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
              />
            </div>

            {/* Date of Entry field */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Date of Entry
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  value={formData.dateOfEntry}
                  onChange={(e) => handleInputChange('dateOfEntry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <Calendar className="w-5 h-5 text-red-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-between items-center mt-12">
            {/* Add Another User button */}
            <button className="flex items-center text-red-500 hover:text-red-600 transition-colors font-medium">
              <Plus className="w-5 h-5 mr-2" />
              Add Another User
            </button>

            {/* Create New User button */}
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg flex items-center font-medium transition-colors">
              Create New User
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUserForm;