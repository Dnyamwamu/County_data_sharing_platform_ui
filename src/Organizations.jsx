import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCloudSun,
  faLeaf,
  faGlobe,
  faUsers,
  faCogs,
  faSearch,
  faFileDownload,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from "./components/Breadcrumbs";
import Header from "./components/Header";

const categories = [
  { name: "Farmer Profile", icon: faUser },
  { name: "Weather", icon: faCloudSun },
  { name: "GAPS", icon: faLeaf },
  { name: "Soil", icon: faGlobe },
  { name: "DAT Cohorts", icon: faUsers },
  { name: "TIMPS", icon: faCogs },
];

const dropdownOptions = [
  ["Option 1", "Option 2", "Option 3"],
  ["Option A", "Option B", "Option C"],
  ["Option X", "Option Y", "Option Z"],
  ["Option Alpha", "Option Beta", "Option Gamma"],
  ["Option Red", "Option Green", "Option Blue"],
  ["Option One", "Option Two", "Option Three"],
];

const dummyResults = [
  {
    title: "Machakos County",
    organization: "Machakos County",
    downloads: "500+ Downloads",
    timePeriod: "October 21, 2023-May 21, 2024",
    description:
      "The dataset provides an overview of the material entry process through Rafah and Kerem Shalom crossings. It gives insight into the progress of supplies and dispatched items as well as the vital manifest details associated with them.",
    format: "XLSX",
    updateFrequency: "Every two weeks",
    updated: "21 May 2024",
    added: "23 November 2023",
  },
  {
    title: "Katumani",
    organization: "Machakos County",
    downloads: "500+ Downloads",
    timePeriod: "October 21, 2023-May 21, 2024",
    description:
      "The dataset provides an overview of the material entry process through Rafah and Kerem Shalom crossings. It gives insight into the progress of supplies and dispatched items as well as the vital manifest details associated with them.",
    format: "XLSX",
    updateFrequency: "Every 3 months",
    updated: "21 May 2024",
    added: "23 November 2023",
  },
  // Add more dummy data as needed
];

const Organizations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
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
        <p className="font-bold pb-4 text-4xl ml-2">ORGANIZATIONS</p>
        <div className="flex flex-col lg:flex-row">
          <aside className="lg:w-1/4 bg-white text-customGreen p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Filters by Category</h2>
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
              <h4>Search all Organizations.</h4>
              <input
                type="text"
                placeholder="Search Organizations"
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
                Organization List
              </h2>
              {results.map((result, index) => (
                <div
                  key={index}
                  className="mb-6 border rounded-lg p-6 bg-white"
                >
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
                  <div className="flex items-center">
                    {/* Download button */}
                    <button
                      className="bg-customGreen text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
                      title="Download Dataset Excel"
                      //   onClick={() => handleDownload(result)}
                    >
                      <FontAwesomeIcon icon={faFileDownload} className="mr-1" />
                      Download Excel
                    </button>
                    {/* View details button */}
                    <Link to="#" className="text-customGreen hover:underline">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Organizations;
