import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchModal = ({
  showModal,
  handleClose,
  searchResults,
  handleSearchChange,
  searchInputRef, // Accept searchInputRef as a prop
}) => {
  useEffect(() => {
    if (showModal && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showModal, searchInputRef]);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        showModal ? "flex" : "hidden"
      } items-center justify-center backdrop-blur bg-gray-800 bg-opacity-50`}
      onClick={handleClose} // Close modal when clicking the backdrop
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-11/12 lg:w-2/3 relative text-black"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-customGreen">
          Search Datasets
        </h2>
        <p className="mb-4 text-slate-500">
          Search for datasets related to agriculture. You can filter the search
          results by categories such as farmer profiles, cooperatives,
          agrodealers, and more.
        </p>
        <div className="relative mb-4">
          <input
            ref={searchInputRef} // Attach the ref to the input field
            type="text"
            placeholder="Search Datasets"
            className="border border-gray-300 p-2 pl-10 rounded-full w-full blinking-cursor"
            onChange={handleSearchChange} // Handle input change to open modal
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-3 text-gray-400"
          />
        </div>
        <div className="mb-4">
          <span className="block mb-2 font-semibold text-customGreen">
            Filter by Category:
          </span>
          <div className="flex flex-wrap gap-4">
            {[
              "Farmer Profiles",
              "Cooperatives",
              "Agrodealers",
              "Agripreneurs",
              "Commercial Farms",
              "Soil Sampling Units",
              "Stakeholders",
              "Interested Farmers",
            ].map((category, index) => (
              <label key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {category}
              </label>
            ))}
          </div>
        </div>
        <hr className="mb-4" />
        <div className="max-h-64 overflow-y-auto mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="bg-gray-100 hover:bg-yellow-100 p-4 rounded-lg shadow-md"
            >
              <h3 className="font-bold mb-2">Result {index + 1}</h3>
              <p>{result}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
