import React from "react";

const SearchModal = ({
  showModal,
  handleClose,
  searchResults,
  handleSearchChange,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${
        showModal ? "flex" : "hidden"
      } items-center justify-center backdrop-blur bg-gray-800 bg-opacity-50`}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Search Datasets</h2>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 p-2 rounded-lg w-full mb-4"
          onChange={handleSearchChange}
        />
        <div className="max-h-64 overflow-y-auto">
          {searchResults.map((result, index) => (
            <div key={index} className="border-b py-2">
              {result}
            </div>
          ))}
        </div>
        <button
          onClick={handleClose}
          className="mt-4 px-4 py-2 bg-customGreen text-white rounded-full hover:bg-green-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
