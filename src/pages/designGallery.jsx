import React, { useState, useEffect } from "react";
import Header from "./header";

const PortfolioGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSection, setActiveSection] = useState("portfolio");

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Header navigation scroll
  const scrollToSection = (sectionId) => {
    window.location.href = `/#${sectionId}`;
  };

  // Gallery images
  const images = [
    { id: 1, url: "/gallery/Lanyard-design.png", title: "Lanyard Design", cols: 1, rows: 1 },
    { id: 2, url: "/gallery/Flyer-design.png", title: "Flyer Design", cols: 1, rows: 2 },
    { id: 3, url: "/gallery/Tshirt-design.png", title: "Tshirt Design", cols: 2, rows: 1 },
    { id: 4, url: "/gallery/Sticker-design.png", title: "Sticker Design", cols: 1, rows: 1 },
    { id: 5, url: "/gallery/Trophy-design.png", title: "Trophy Design", cols: 1, rows: 1 },
    { id: 6, url: "/gallery/Club-tshirt.png", title: "Tshirt Design", cols: 2, rows: 1 },
    { id: 7, url: "/gallery/Axrail-roll-up-banner.png", title: "Banner Design", cols: 1, rows: 2 },
    { id: 8, url: "/gallery/Poster-design.png", title: "Poster Design", cols: 1, rows: 1 },
    { id: 9, url: "/gallery/Logo-design.png", title: "Logo Design", cols: 1, rows: 1 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Graphic Design
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of creative designs showcasing typography, illustration,
            and visual storytelling
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image) => (
            <div
              key={image.id}
              className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300
                ${image.cols === 2 ? "col-span-2" : "col-span-1"}
                ${image.rows === 2 ? "row-span-2" : "row-span-1"}`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors text-4xl w-12 h-12 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <div className="max-w-7xl max-h-[90vh] flex flex-col items-center">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <h2 className="text-white text-2xl font-semibold mt-6">
              {selectedImage.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGallery;
