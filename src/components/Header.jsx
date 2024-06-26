import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulating login state
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "DATA", path: "/data" },
    { name: "DATA REQUEST", path: "/datarequest", auth: true },
    { name: "PARTNERS", path: "/partners", auth: true },
    { name: "DASHBOARDS", path: "/dashboard" },
  ];

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 lg:px-20 flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <img src="KALRO.png" alt="KADP Logo" className="h-12 w-16" />
          <div className="h-10 border-l border-gray-300 mx-2"></div>
          <div className="text-black font-bold text-lg">
            <span className="font-bold">KADP</span>
            <span className="block text-xs text-slate-600">
              KENYA AGRICULTURAL
              <br className="hidden lg:inline" /> DATA-SHARING PLATFORM
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <nav
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 text-slate-600 text-sm absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-10 md:z-auto shadow-md md:shadow-none`}
          >
            {navItems
              .filter((item) => !item.auth || isLoggedIn)
              .map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? "font-bold underline underline-offset-8 decoration-2 text-customGreen"
                      : "hover:text-customGreen transition duration-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
          </nav>
          {!isLoggedIn && (
            <Link
              to="login"
              className="px-6 py-2 bg-customGreen text-white rounded-full hover:bg-green-600 transition duration-300"
            >
              Login
            </Link>
          )}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-slate-600 focus:outline-none"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
