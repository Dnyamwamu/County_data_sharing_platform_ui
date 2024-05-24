import React, { useState } from "react";

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState("crops");
  const [loading, setLoading] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setLoading(true); // Set loading to true when switching tabs
  };

  const handleIframeLoad = () => {
    setLoading(false); // Set loading to false when iframe is fully loaded
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4 text-center">
        <button
          className={`px-4 py-2 mr-2 font-semibold rounded ${
            activeTab === "crops"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick("crops")}
        >
          Crops Dashboard
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded ${
            activeTab === "livestock"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick("livestock")}
        >
          Livestock Dashboard
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded ml-2 ${
            activeTab === "cooperatives"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick("cooperatives")}
        >
          Cooperatives Dashboard
        </button>
      </div>
      {loading && (
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-8 w-8 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l-2.293-2.293-1.414 1.414L4.586 20H6a8.001 8.001 0 01-4.293-1.709z"
            ></path>
          </svg>
        </div>
      )}
      <div className={loading ? "hidden" : "block"}>
        {activeTab === "crops" && (
          <iframe
            title="Crops Dashboard"
            width="100%"
            height="600"
            src="https://app.powerbi.com/view?r=eyJrIjoiNzAxNzEzYjYtYTc0NS00M2MzLWFiN2QtYWM0NjFlNTQ3ZTg0IiwidCI6IjMwY2JiODY1LTg2MDUtNGQ4NS1iZTA1LWU1ZjM0MjcyMTM5YyJ9"
            frameBorder="0"
            allowFullScreen
            onLoad={handleIframeLoad}
          ></iframe>
        )}
        {activeTab === "livestock" && (
          <iframe
            title="Livestock Dashboard"
            width="100%"
            height="600"
            src="https://app.powerbi.com/view?r=eyJrIjoiMzU5ZjMyMDYtOTA2YS00MTI1LTliOGEtN2EyYmVjMzY3ZDZjIiwidCI6IjMwY2JiODY1LTg2MDUtNGQ4NS1iZTA1LWU1ZjM0MjcyMTM5YyJ9"
            frameBorder="0"
            allowFullScreen
            onLoad={handleIframeLoad}
          ></iframe>
        )}
        {activeTab === "cooperatives" && (
          <iframe
            title="Cooperatives Dashboard"
            width="100%"
            height="600"
            src="YOUR_LIVESTOCK_DASHBOARD_EMBED_URhttps://app.powerbi.com/view?r=eyJrIjoiMzgzNzA5YzAtMDYyYy00YmY1LTgwNWEtMjJiNTVmMmVmZDlkIiwidCI6IjMwY2JiODY1LTg2MDUtNGQ4NS1iZTA1LWU1ZjM0MjcyMTM5YyJ9"
            frameBorder="0"
            allowFullScreen
            onLoad={handleIframeLoad}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default DashboardTabs;
