const CheckboxItem = ({ label, checked }) => {
  return (
    <div className="flex items-center cursor-pointer">
      <div className={`w-6 h-6 rounded flex items-center justify-center ${checked ? 'bg-rose-500' : 'bg-gray-200'}`}>
        {checked && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className="ml-2 text-gray-600">{label}</span>
    </div>
  );
};

export default CheckboxItem;