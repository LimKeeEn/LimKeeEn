import React, { useState, useEffect } from 'react';
import Header from "./header";
import PhotoGallery from "./photoGallery";
import VideoGallery from "./videoGallery";

const Production = () => {
  const [activeTab, setActiveTab] = useState("photo");
  const [activeSection, setActiveSection] = useState("production");

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Header navigation scroll
  const scrollToSection = (sectionId) => {
    window.location.href = `/#${sectionId}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Tab Navigation */}
      <div className="pt-24 px-6 bg-white sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab("photo")}
              className={`pb-4 px-6 text-lg font-semibold transition-all duration-300 relative ${
                activeTab === "photo"
                  ? "text-teal-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Photo Gallery
              {activeTab === "photo" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 animate-slideIn"></span>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab("video")}
              className={`pb-4 px-6 text-lg font-semibold transition-all duration-300 relative ${
                activeTab === "video"
                  ? "text-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Video Gallery
              {activeTab === "video" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 animate-slideIn"></span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="transition-all duration-500">
        {activeTab === "photo" ? <PhotoGallery /> : <VideoGallery />}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
          transform-origin: left;
        }
      `}</style>
    </div>
  );
};

export default Production;
