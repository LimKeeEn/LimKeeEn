import React, { useState, useEffect, useRef } from "react";
import Header from "./header";

export default function DesignGallery() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    window.location.href = `/#${sectionId}`;
  };

  // Design portfolio items with different aspect ratios
  const designs = [
    {
      id: 1,
      image: "/graphic.png",
      title: "Plants Illustration",
      category: "Illustration",
      span: "tall" // portrait
    },
    {
      id: 2,
      image: "/designduel.png",
      title: "Croissants Typography",
      category: "Typography",
      span: "square"
    },
    {
      id: 3,
      image: "/umconvo.png",
      title: "Keep Growing",
      category: "Lettering",
      span: "square"
    },
    {
      id: 4,
      image: "/memorycard.png",
      title: "Soup Art",
      category: "Typography",
      span: "tall"
    },
    {
      id: 5,
      image: "/photography.png",
      title: "Floral Pattern",
      category: "Pattern Design",
      span: "tall"
    },
    {
      id: 6,
      image: "/dashboard.png",
      title: "Notebook Design",
      category: "Product Design",
      span: "square"
    },
    {
      id: 7,
      image: "/mainpage.jpg",
      title: "Food Photography",
      category: "Photography",
      span: "wide"
    },
    {
      id: 8,
      image: "/graphic.png",
      title: "Target Gift Card",
      category: "Branding",
      span: "square"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Graphic Design
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of creative designs showcasing typography, illustration, and visual storytelling
          </p>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section ref={galleryRef} className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* CSS Grid Masonry Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
            {designs.map((design, index) => (
              <div
                key={design.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  design.span === 'tall' ? 'row-span-2' : 
                  design.span === 'wide' ? 'md:col-span-2' : 
                  'row-span-1'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  cursor: 'pointer'
                }}
              >
                {/* Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-teal-300 text-sm font-semibold mb-2 tracking-wider uppercase">
                    {design.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-3">
                    {design.title}
                  </h3>
                  <button className="self-start px-5 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold text-sm hover:bg-white/30 transition-all border border-white/30">
                    View Details →
                  </button>
                </div>

                {/* Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400/50 rounded-2xl transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Like What You See?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's collaborate on your next creative project
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white text-teal-600 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}