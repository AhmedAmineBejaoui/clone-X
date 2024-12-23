import  { useState } from "react";
import PropTypes from "prop-types";

const Top = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("For You");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab); // Cette fonction peut notifier le composant parent
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 border-b border-slate-600 bg-black">
      {/* Tabs */}
      <div className="flex space-x-6">
        {/* For You Tab */}
        <div
          onClick={() => handleTabClick("For You")}
          className={`text-lg font-bold cursor-pointer ${
            activeTab === "For You"
              ? "text-white"
              : "text-gray-500 hover:text-white"
          }`}
        >
          For You
        </div>

        {/* Following Tab */}
        <div
          onClick={() => handleTabClick("Following")}
          className={`text-lg font-bold cursor-pointer ${
            activeTab === "Following"
              ? "text-white"
              : "text-gray-500 hover:text-white"
          }`}
        >
          Following
        </div>
      </div>

      {/* Contenu dynamique selon l'onglet sélectionné */}
      <div className="mt-4">
        {activeTab === "For You" ? (
          <div>
            <h2>For You Content</h2>
            {/* Ajoutez le contenu spécifique pour l'onglet "For You" */}
            
          </div>
        ) : (
          <div>
            <h2>Following Content</h2>
            {/* Ajoutez le contenu spécifique pour l'onglet "Following" */}
            
          </div>
        )}
      </div>
    </div>
  );
};

Top.propTypes = {
  onTabChange: PropTypes.func.isRequired,
};

export default Top;
