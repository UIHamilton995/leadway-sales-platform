import { useState } from 'react';
import { Plus } from 'lucide-react';
import CreateReportModal from '../CreateReportModal';

const DashboardHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="relative">
      {/* Header Content */}
      <div className="flex justify-between items-center px-3">
        <h2 className="text-xl font-medium">
          Welcome <span className="text-rose-500">Favour</span> - What would you like to do today?
        </h2>
        <button 
          className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg flex items-center mb-2"
          onClick={openModal}
        >
          <Plus className="w-5 h-5 mr-2" />
          Create New Report
        </button>
      </div>

      {/* Modal */}
      {showModal && <CreateReportModal onClose={closeModal} />}
    </div>
  );
};

export default DashboardHeader;