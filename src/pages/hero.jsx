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
            UI Designer & Developer
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
            className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-1000 delay-500 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <button 
              onClick={() => scrollToSection('work')}
              className="group px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get In Touch
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
            {['github', 'linkedin', 'twitter'].map((social, idx) => (
              <a
                key={social}
                href={`#${social}`}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
                style={{ transitionDelay: `${700 + idx * 100}ms` }}
              >
                <span className="text-sm font-bold">{social[0].toUpperCase()}</span>
              </a>
            ))}
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
              src="/profile-bg.png"
              alt="Hero Background"
              className="relative w-full max-w-md object-contain transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}