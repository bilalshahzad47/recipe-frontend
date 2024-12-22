import React from "react";

const Tabs = ({ activeTab, setActiveTab, tabs, selectedWeek, setSelectedWeek, handleSaveMealToWeek }) => {
  return (
    <div className="flex justify-between items-center bg-white py-4 px-40 rounded-lg shadow-md border border-gray-300">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 text-sm rounded-lg transition-all text-center duration-300 ${
              activeTab === tab
                ? "text-blue-900 border-b-4 border-blue-900 font-bold"
                : "text-black-900 font-bold"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Add to Week Selector */}
      {activeTab === "All Meals" && (
        <div className="mt-2 flex justify-center">
          <select
            className="border rounded-lg px-4 py-2 mr-4"
            onChange={(e) => setSelectedWeek(e.target.value)}
            value={selectedWeek}
          >
            <option Value="Add to Week">Add to Week</option>
            {tabs
              .filter((tab) => tab !== "All Meals")
              .map((week) => (
                <option key={week} value={week}>
                  {week}
                </option>
              ))}
          </select>
          <button
            className="bg-blue-900 text-white px-6 py-2 rounded-sm text-md"
            onClick={handleSaveMealToWeek}
          >
            Add to Week
          </button>
        </div>
      )}
    </div>
  );
};

export default Tabs;