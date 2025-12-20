import React, { useState, useEffect } from 'react';
import Header from "./header";

const PhotoGallery = () => {
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

  // Sample photos - replace with your actual photos
  const photos = [
    { id: 1, url: '/photo/IMG_1.JPG', orientation: 'landscape' },
    { id: 2, url: '/photo/IMG_2.JPG', orientation: 'portrait' },
    { id: 3, url: '/photo/IMG_3.JPG', orientation: 'landscape' },
    { id: 4, url: '/photo/IMG_4.JPG', orientation: 'portrait' },
    { id: 5, url: '/photo/IMG_5.jpg', orientation: 'portrait' },
    
    { id: 6, url: '/photo/IMG_6.jpg', orientation: 'landscape' },
    { id: 7, url: '/photo/IMG_7.jpg', orientation: 'landscape' },
    { id: 8, url: '/photo/IMG_22.JPG', orientation: 'portrait' },
    
    { id: 9, url: '/photo/IMG_21.JPG', orientation: 'landscape' },
    { id: 10, url: '/photo/IMG_8.jpg', orientation: 'portrait' },
    { id: 11, url: '/photo/IMG_9.jpg', orientation: 'landscape' },
    { id: 12, url: '/photo/IMG_11.jpg', orientation: 'portrait' },

    { id: 13, url: '/photo/IMG_10.jpg', orientation: 'landscape' },
    { id: 14, url: '/photo/IMG_17.jpg', orientation: 'landscape' },
    { id: 15, url: '/photo/IMG_18.jpg', orientation: 'portrait' },

    { id: 16, url: '/photo/IMG_16.jpg', orientation: 'landscape' },
    { id: 17, url: '/photo/IMG_12.jpg', orientation: 'portrait' },
    { id: 18, url: '/photo/IMG_13.jpg', orientation: 'landscape' },
    { id: 19, url: '/photo/IMG_14.JPG', orientation: 'portrait' },
    { id: 20, url: '/photo/IMG_15.JPG', orientation: 'portrait' },
  ];

  // Group photos into rows with varying heights
  const photoRows = [
    { photos: photos.slice(0, 5), height: 'h-64' },
    { photos: photos.slice(5, 8), height: 'h-80' },
    { photos: photos.slice(8, 12), height: 'h-72' },
    { photos: photos.slice(12, 15), height: 'h-70' },
    { photos: photos.slice(15, 20), height: 'h-64' },
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
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Photo Gallery
            </span>
          </h1>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Art of capturing moments, emotions, and stories through a camera
          </p>
        </div>
      </section>

      {/* Photo Gallery - Rows with consistent heights */}
      <div className="max-w-7xl mx-auto px-6 pb-16 space-y-4">
        {photoRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-4">
            {row.photos.map((photo, photoIndex) => (
              <div
                key={photo.id}
                className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-700 flex-1 ${row.height} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${rowIndex * 200 + photoIndex * 100}ms` }}
                onClick={() => setSelectedImage(photo)}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors text-4xl w-12 h-12 flex items-center justify-center hover:rotate-90 duration-300"
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
            <h2 className="text-white text-2xl font-semibold mt-6 animate-slideUp">{selectedImage.title}</h2>
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

export default PhotoGallery;