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
import Footer from "./components/Footer";

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
    title: "Machakos Farmer Profile",
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
    title: "Machakos Soil Data",
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

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-customGreen text-white font-sans">
      <Header />

      <main className="container mx-auto px-4 lg:px-20 py-4">
        <Breadcrumbs />
        <p className="font-bold pb-4 text-4xl ml-2">DASBOARD</p>
      </main>
    </div>
  );
};

export default Dashboard;
