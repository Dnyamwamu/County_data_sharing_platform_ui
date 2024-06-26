import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faHandshake,
  faStore,
  faMobileAlt,
  faTractor,
  faVial,
  faUsersCog,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import { TypeAnimation } from "react-type-animation";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import SearchModal from "./components/SearchModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null); // Create a ref for the input field

  const handleInputChange = (e) => {
    setShowModal(true);
    const query = e.target.value;
    setSearchResults([
      `Result for "${query}" 1`,
      `Result for "${query}" 2`,
      `Result for "${query}" 3`,
    ]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-customGreen text-white font-sans">
      <Header />
      <main className="container mx-auto px-4 lg:px-20 py-16">
        <section className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h1 className="text-3xl font-bold">
              Welcome to the Kenya Agricultural{" "}
              <br className="hidden lg:inline" /> Data Sharing Platform (KADP)
            </h1>
            <p className="mt-4 text-lg">
              <TypeAnimation
                sequence={[
                  `Revolutionary approach to data exchange in agriculture by
                  fostering collaboration between organisations and harnessing the
                  power of collective data.`,
                ]}
                wrapper="span"
                cursor={true}
                repeat={true}
                speed={90}
              />
            </p>

            <button className="mt-6 px-16 py-3 bg-white text-green-800 font-semibold rounded-full hover:bg-yellow-200">
              Get Started
            </button>
          </div>
          <div className="mt-8 lg:mt-0 w-full md:w-3/4 lg:w-1/2 bg-white text-customGreen rounded-b-2xl p-6 pt-2 mx-auto">
            <div className="bg-slate-400 w-full">
              <h2 className="text-center text-lg font-bold text-white py-2">
                FIND DATA
              </h2>
            </div>

            <div className="flex justify-center items-center mt-4">
              <input
                type="text"
                placeholder="Search Datasets"
                className="border border-gray-300 p-2 rounded-l-2xl w-full blinking-cursor"
                onChange={handleInputChange}
              />
              <button className="bg-customGreen p-2 rounded-r-lg text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.707 22.293l-6.482-6.482A9.931 9.931 0 0020 10a10 10 0 10-10 10 9.931 9.931 0 005.811-2.225l6.482 6.482a1 1 0 001.414-1.414zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>
              </button>
            </div>

            <div className="flex justify-around mt-8 text-customGreen">
              <div className="text-center">
                <h2 className="text-2xl font-bold">6M+</h2>
                <p>FARMERS</p>
              </div>
              <div className="h-10 border-l border-gray-300 mx-2"></div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">47</h2>
                <p>Counties</p>
              </div>
              <div className="h-10 border-l border-gray-300 mx-2"></div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">8</h2>
                <p>Categories</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="bg-customGray p-4 text-center">
        <section className="container mx-auto px-4 lg:px-20 py-8">
          <h2 className="text-center text-3xl font-bold text-black">
            CATEGORIES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {[
              { name: "Farmer Profile", icon: faUserCircle },
              { name: "Cooperatives", icon: faHandshake },
              { name: "Agrodealers", icon: faStore },
              { name: "Agripreneurs", icon: faMobileAlt },
              { name: "Commercial Farms", icon: faTractor },
              { name: "Soil Sampling Units", icon: faVial },
              { name: "Stakeholders", icon: faUsersCog },
              { name: "Interested Farmers", icon: faUserCheck },
            ].map((category, index) => (
              <Link to="/data" key={index}>
                <div className="bg-white text-center p-4 rounded-lg shadow-md h-36 hover:bg-yellow-100 flex flex-col justify-center items-center">
                  <FontAwesomeIcon
                    icon={category.icon}
                    className="text-4xl text-customGreen mb-2"
                  />
                  <p className="font-bold text-slate-600">{category.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>

      <Footer />

      <SearchModal
        showModal={showModal}
        handleClose={handleCloseModal}
        searchResults={searchResults}
        handleSearchChange={handleInputChange}
        searchInputRef={searchInputRef} // Pass the ref to the SearchModal
      />
    </div>
  );
};

export default Home;
