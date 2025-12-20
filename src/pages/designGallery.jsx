import React, { useState, useEffect } from "react";

const Header = ({ activeSection, scrollToSection }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-40">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
          Portfolio
        </div>
        <div className="flex gap-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-teal-600 transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-teal-600 transition-colors">
            Gallery
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-teal-600 transition-colors">
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

const PortfolioGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSection, setActiveSection] = useState("portfolio");
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Trigger animations on mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
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

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

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
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Graphic Design
            </span>
          </h1>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            A collection of creative designs showcasing typography, illustration,
            and visual storytelling
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-700
                ${image.cols === 2 ? "col-span-2" : "col-span-1"}
                ${image.rows === 2 ? "row-span-2" : "row-span-1"}
                ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
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
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-all duration-300 text-4xl w-12 h-12 flex items-center justify-center hover:rotate-90"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <div className="max-w-7xl max-h-[90vh] flex flex-col items-center animate-scaleIn">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <h2 className="text-white text-2xl font-semibold mt-6 animate-slideUp">
              {selectedImage.title}
            </h2>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out 0.2s backwards;
        }
      `}</style>
    </div>
  );
};

export default PortfolioGallery;