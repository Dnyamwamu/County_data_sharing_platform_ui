import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faMap,
  faMapMarkerAlt,
  faSearch,
  faFileDownload,
  faMinus,
  faPlus,
  faCogs,
  faBell,
  faEye,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from "./components/Breadcrumbs";
import Header from "./components/Header";
import Footer from "./components/Footer";

const categories = [
  { name: "County", icon: faMapMarkedAlt },
  { name: "Subcounty", icon: faMap },
  { name: "Ward", icon: faMapMarkerAlt },
  { name: "Categories", icon: faCogs },
  { name: "Organization Types", icon: faCogs },
  { name: "Node", icon: faCogs },
  { name: "Value Chain", icon: faCogs },
];

const dropdownOptions = [
  ["Machakos", "Kakamega", "Baringo"],
  ["Katumani", "Wote", "Syokimau"],
  ["Ward X", "Ward Y", "Ward Z"],
  ["Farmer Profile", "Cooperatives", "Agrodealers", "Agripreneurs"],
  ["Cooperatives", "Research Centers", "SACCO"],
  ["Farmer Profile", "Cooperatives", "Agrodealers", "Agripreneurs"],
  ["Maize", "Coffee"],
];

const dummyResults = [
  {
    title: "Machakos Farmer Profile",
    organization: "Machakos County",
    downloads: "500+ Downloads",
    timePeriod: "October 21, 2023-May 21, 2024",
    description:
      "The dataset provides an overview of the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    format: "XLSX",
    updateFrequency: "Every two weeks",
    updated: "21 May 2024",
    added: "23 November 2023",
    data: {
      column1: "Data 1.1",
      column2: "Data 1.2",
      column3: "Data 1.3",
    },
  },
  {
    title: "Machakos Soil Data",
    organization: "Machakos County",
    downloads: "500+ Downloads",
    timePeriod: "October 21, 2023-May 21, 2024",
    description:
      "The dataset provides an overview of the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    format: "XLSX",
    updateFrequency: "Every 3 months",
    updated: "21 May 2024",
    added: "23 November 2023",
    data: {
      column1: "Data 1.1",
      column2: "Data 1.2",
      column3: "Data 1.3",
    },
  },
  // Add more dummy data as needed
];

const Data = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewDetails = (result) => {
    setSelectedResult(result);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedResult(null);
  };
  // State to track dropdown status for each category
  const [isDropdownOpen, setIsDropdownOpen] = useState(
    new Array(categories.length).fill(false)
  );

  // State to track selected checkboxes for each category
  const [isSelected, setIsSelected] = useState(
    new Array(categories.length).fill(Array(dropdownOptions.length).fill(false))
  );

  const handleSearch = (e) => {
    e.preventDefault();
    // Replace with your search logic
    setResults(dummyResults);
  };

  // Function to toggle dropdown status
  const handleDropdownToggle = (index) => {
    setIsDropdownOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (categoryIndex, optionIndex) => {
    setIsSelected((prevState) => {
      const newState = [...prevState];
      newState[categoryIndex][optionIndex] =
        !newState[categoryIndex][optionIndex];
      return newState;
    });
  };

  return (
    <div className="min-h-screen bg-customGreen text-white font-sans">
      <Header />

      <main className="container mx-auto px-4 lg:px-20 py-4">
        <Breadcrumbs />
        <p className="font-bold pb-4 text-4xl ml-2">DATA</p>
        <div className="flex flex-col lg:flex-row">
          <aside className="lg:w-1/4 bg-white text-customGreen p-4 rounded-lg mb-2">
            <h2 className="text-lg font-bold mb-4">Filters by:</h2>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="mb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={category.icon}
                        className="text-customGreen mr-2"
                      />
                      {category.name}
                    </div>
                    <FontAwesomeIcon
                      icon={isDropdownOpen[index] ? faMinus : faPlus}
                      className="text-customGreen cursor-pointer"
                      onClick={() => handleDropdownToggle(index)}
                    />
                  </div>
                  {isDropdownOpen[index] && (
                    <ul className="mt-2 ml-4">
                      {dropdownOptions[index].map((option, optionIndex) => (
                        <li
                          key={optionIndex}
                          className="flex flex-col items-start mb-1"
                        >
                          <label>
                            <input
                              type="checkbox"
                              checked={isSelected[index][optionIndex]}
                              onChange={() =>
                                handleCheckboxChange(index, optionIndex)
                              }
                              className="mr-2"
                            />
                            {option}
                          </label>
                        </li>
                      ))}
                    </ul>
                  )}
                  {index < categories.length - 1 && (
                    <hr className="my-2 border-gray-300" />
                  )}
                </li>
              ))}
            </ul>
          </aside>

          <section className="lg:w-3/4 lg:ml-4 bg-slate-100 text-customGreen p-4 rounded-lg">
            <form
              onSubmit={handleSearch}
              className="flex mb-4 p-6 bg-slate-200 "
            >
              <h4>Search all datasets.</h4>
              <input
                type="text"
                placeholder="Search Datasets"
                className="border border-gray-300 p-2 rounded-l-2xl w-full ml-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-customGreen p-2 rounded-r-2xl text-white"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>

            <div className=" mt-4">
              <h2 className="text-lg font-bold mb-2 text-black bg-slate-100 pb-4">
                Dataset List
              </h2>
              {results.map((result, index) => (
                <div
                  key={index}
                  className="mb-6 border rounded-lg p-6 bg-white shadow-lg relative"
                >
                  {/* Eye Icon for View Details */}

                  <button
                    className="bg-customGreen text-white px-3 py-1 rounded mr-2 hover:bg-green-600 absolute top-4 right-4"
                    onClick={() => handleViewDetails(result)}
                  >
                    <FontAwesomeIcon icon={faEye} size="lg" className="mr-2" />
                    View
                  </button>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    <Link to="#" className="text-customGreen hover:underline">
                      {result.title}
                    </Link>
                  </h3>
                  <hr className="my-2 border-green-300" />
                  {/* Organization */}
                  <p className="text-sm text-gray-500 mb-2">
                    {result.organization}
                  </p>
                  {/* Downloads */}
                  <p className="text-sm text-gray-500 mb-2">
                    {result.downloads}
                  </p>
                  {/* Time Period */}
                  <p className="text-sm text-gray-500 mb-2">
                    {result.timePeriod}
                  </p>
                  {/* Description */}
                  <p className="text-sm text-gray-700 mb-4">
                    {result.description}
                  </p>
                  {/* Format */}
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-gray-500 mr-2">Format:</span>
                    <span className="text-sm text-green-500">
                      {result.format}
                    </span>
                  </div>
                  {/* Update Frequency */}
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-gray-500 mr-2">
                      Update Frequency:
                    </span>
                    <span className="text-sm text-green-500">
                      {result.updateFrequency}
                    </span>
                  </div>
                  {/* Action buttons */}
                  <div className="flex items-center justify-end">
                    {/* Request for Download button */}
                    <button
                      className="bg-slate-300 text-white px-3 py-1 rounded mr-2 hover:bg-slate-500"
                      title="Request for Download"
                      //   onClick={() => handleRequestDownload(result)}
                    >
                      <FontAwesomeIcon icon={faBell} className="mr-1" />
                      Request Data
                    </button>
                    {/* Download button */}
                    <button
                      className="bg-customGreen text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
                      title="Download Dataset Excel"
                      //   onClick={() => handleDownload(result)}
                    >
                      <FontAwesomeIcon icon={faFileDownload} className="mr-1" />
                      Download Excel
                    </button>
                  </div>
                </div>
              ))}
              {/* Modal */}
              {showModal && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                  onClick={handleClose}
                >
                  <div
                    className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">
                        {selectedResult?.title}
                      </h2>
                      <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </div>
                    {selectedResult && selectedResult.data ? (
                      <table className="w-full">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 bg-gray-200">Column 1</th>
                            <th className="px-4 py-2 bg-gray-200">Column 2</th>
                            <th className="px-4 py-2 bg-gray-200">Column 3</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2">
                              {selectedResult.data.column1}
                            </td>
                            <td className="px-4 py-2">
                              {selectedResult.data.column2}
                            </td>
                            <td className="px-4 py-2">
                              {selectedResult.data.column3}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      <p>No data available</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Data;
