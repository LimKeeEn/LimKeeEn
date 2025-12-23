import React, { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/hero-background.png')] bg-contain bg-no-repeat bg-center opacity-50"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">

        {/* LEFT: Content - Fade up animation */}
        <div 
          className={`text-center md:text-left transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >

          <h1 
            className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent transition-all duration-1000 delay-100 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            Hi, I'm Kee En
          </h1>

          <p 
            className={`text-2xl md:text-3xl font-light text-foreground/80 mb-6 transition-all duration-1000 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            Frontend Develop & UI/UX Design
          </p>

          <p 
            className={`text-lg text-foreground/60 max-w-xl leading-relaxed mb-10 mx-auto md:mx-0 transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            Hello! I'm a Multimedia Computing student from the University of Malaya with hands-on experience in web and mobile development, as well as UI/UX design. Passionate about building meaningful digital experiences.
          </p>

          <div 
            className={`flex justify-center md:justify-start transition-all duration-1000 delay-500 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Social links */}
          <div 
            className={`flex gap-4 justify-center md:justify-start mt-8 transition-all duration-1000 delay-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <a
              href="mailto:keeenlim0834@gmail.com"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/lim-kee-en-6276232b5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/keeen_622"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT: Image - Fade from right with 3D effect */}
        <div 
          className={`flex justify-center md:justify-end transition-all duration-1000 delay-300 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-12'
          }`}
        >
          <div className="relative group">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

            
            {/* Profile image */}
            <img
              src="/me.png"
              alt="Hero Background"
              className="relative w-full max-w-md object-contain transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}