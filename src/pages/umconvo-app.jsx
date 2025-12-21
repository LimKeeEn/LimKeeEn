import React, { useState, useEffect, useRef } from "react";
import Header from "./header";

export default function UMConvo() {
  const [activeSection, setActiveSection] = useState("home");

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to scroll to section (for Header navigation)
  const scrollToSection = (sectionId) => {
    // Navigate back to home page with section
    window.location.href = `/#${sectionId}`;
  };

  // Refs for each animated section
  const heroRef = useRef(null);
  const projectRef = useRef(null);
  const challengesRef = useRef(null);
  const demoRef = useRef(null);

  // Visibility states
  const [heroVisible, setHeroVisible] = useState(false);
  const [projectVisible, setProjectVisible] = useState(false);
  const [challengesVisible, setChallengesVisible] = useState(false);
  const [demoVisible, setDemoVisible] = useState(false);

  // IntersectionObserver hook
  const createObserver = (ref, setVisible) => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, [ref, setVisible]);
  };

  createObserver(heroRef, setHeroVisible);
  createObserver(projectRef, setProjectVisible);
  createObserver(challengesRef, setChallengesVisible);
  createObserver(demoRef, setDemoVisible);

  return (
    <div className="min-h-screen bg-white">
      {/* Add Header */}
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`pt-24 pb-16 px-6 transition-all duration-1000 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
                UMConvo App
              </span>
            </h1>
            <h2 className="text-2xl md:text-2xl font-semibold text-gray-800 mb-3">
              Final Year Project
            </h2>
          </div>

          {/* Phone Mockups */}
          <div className="relative bg-gradient-to-br from-purple-100 via-blue-50 to-gray-100 rounded-3xl overflow-hidden min-h-[620px] flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-blue-200/30"></div>
            <div className="relative z-10 flex items-center justify-center gap-8 ml-20 mb-12">
              {/* Left Phone */}
              <div className="relative transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="w-54 h-[450px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-800">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-3xl z-10"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="/mainpage.jpg"
                      alt="Campus View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-56">
                  <button className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    User Interface
                  </button>
                </div>
              </div>

              {/* Center Logo */}
              <div className="mx-8 transform hover:scale-110 transition-transform duration-300">
                <div className="w-40 h-40 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto">
                      <div className="absolute inset-0 border-4 border-purple-500 rounded-full"></div>
                      <div className="absolute inset-2 border-4 border-purple-500 rounded-full"></div>
                      <div className="absolute inset-4 border-4 border-purple-500 rounded-full"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-purple-600">C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Laptop */}
              <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="w-[420px] h-[260px] bg-gray-900 rounded-xl shadow-2xl p-3">
                  <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                    <img
                      src="/dashboard.png"
                      alt="UMConvo Web Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-[420px] h-6 bg-gray-300 mx-auto rounded-b-3xl shadow-md relative -top-1">
                  <div className="absolute left-1/2 top-1 transform -translate-x-1/2 w-20 h-1 bg-gray-400 rounded-full" />
                </div>
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-56">
                  <button className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Admin Interface
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section
        ref={projectRef}
        className={`mt-10 transition-all duration-1000 ${
          projectVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          {/* Left Column */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-primary">About the Project</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              UMConvo App is a mobile application developed to support University of Malaya convocation activities.
              It provides graduands and guests with easy access to important convocation information, services, and updates in one centralized platform.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">
                React Native & React
              </span>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                Mobile App
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                UI/UX Design
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">
                Firebase
              </span>
              <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold">
                Node.js
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-primary">Key Features</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🔔</span>
                <div>
                  <h4 className="font-semibold text-lg">Notification</h4>
                  <p className="text-gray-600">Users receive real-time notifications for the latest updates.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <h4 className="font-semibold text-lg">Event Management</h4>
                  <p className="text-gray-600">Stay updated with campus events</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h4 className="font-semibold text-lg">Graduates Registration</h4>
                  <p className="text-gray-600">Users can confirm their attendance directly through the app.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📸</span>
                <div>
                  <h4 className="font-semibold text-lg">Social Feed</h4>
                  <p className="text-gray-600">Users can upload photos with UM convocation-themed frame filters.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section
        ref={challengesRef}
        className={`mt-32 transition-all duration-1000 ${
          challengesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 px-6">
          {/* Left Column */}
          <div className="flex items-center justify-center h-full">
            <h2 className="text-4xl font-bold text-primary">
              The <br /> Challenges
            </h2>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-gray-600 text-xl leading-relaxed">
              The current UM convocation information system is <strong>web-based</strong> and it contains numerous interlinked pages and unnecessary features. 
              While it provides essential details, the structure is often overwhelming for users.
              Furthermore, the current system also <strong>lack of real-time updates</strong> or <strong>notifications</strong>, and also does not provide a centralized status confirmation system.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section
        ref={demoRef}
        className={`mt-32 transition-all duration-1000 ${
          demoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h3 className="text-3xl font-bold mb-6 text-primary text-center">Demo Video</h3>
        <div className="flex justify-center pb-32">
          <div className="w-full md:w-3/4 lg:w-1/2 aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
            <video
              controls
              className="w-full h-full object-cover"
              poster="/dashboard.png"
            >
              <source src="/AP2-Monitoring-Presentation-Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}