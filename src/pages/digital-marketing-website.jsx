import React, { useState, useEffect, useRef } from "react";
import Header from "./header";

export default function DigitalMarketing() {
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
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-900 to-green-500 bg-clip-text text-transparent">
                Data-driven Marketing & Content Planning
              </span>
            </h1>
            <h2 className="text-2xl md:text-2xl font-semibold text-gray-800 mb-3">
              2025 Future Ready Hackathon (KABEL)
            </h2>
            <h3 className="text-xl md:text-xl text-gray-400">
              Top 12 Finalist 
            </h3>
          </div>

          {/* Phone Mockups */}
          <div className="relative bg-gradient-to-br from-green-100 via-yellow-50 to-blue-300 rounded-3xl overflow-hidden flex items-center justify-center w-full h-[500px]">
            <div className="relative z-10 flex items-center justify-center">

              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/futureReady-wb.png"
                  alt="Campus View"
                  className="w-3/4 h-auto object-cover"
                />
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
              Plan smarter, generate content ideas, schedule across platforms, run and control ads, and get a clear performance insights for digital marketing — <strong>all in one place.</strong>
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">
                React
              </span>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                TSX
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                Node.js
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">
                Prototype
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-primary">Key Features</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold text-lg">Content Planning</h4>
                  <p className="text-gray-600">Start with a simple idea, and it transforms the idea into a full strategic plan with ready-to-use content.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <h4 className="font-semibold text-lg">Scheduling</h4>
                  <p className="text-gray-600">Pick your platform and content draft, just with one click.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🔔</span>
                <div>
                  <h4 className="font-semibold text-lg">Ads</h4>
                  <p className="text-gray-600">Monitor all your ads across platforms in one place, track real-time performance, and get instant AI insights with alerts and smart recommendations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📈</span>
                <div>
                  <h4 className="font-semibold text-lg">Monitoring</h4>
                  <p className="text-gray-600">See real-time metrics like ROI, audience engagement, and content interactions at a glance.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🤖</span>
                <div>
                  <h4 className="font-semibold text-lg">AI Agent</h4>
                  <p className="text-gray-600">Give it a brief idea, and it creates full campaigns that include making content, scheduling posts at the best times, and even optimizing your ads automatically.</p>
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
              Many growth-stage companies lack the resources or clarity to run effective marketing campaigns. They struggle with planning, execution, and measuring impact. 
              Develop a tool that helps teams plan content, generate ideas with AI, schedule posts, and track marketing performance with easy-tounderstand dashboards.
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
              <source src="/TestVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}