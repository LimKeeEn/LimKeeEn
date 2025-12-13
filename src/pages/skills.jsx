import React, { useState, useEffect, useRef } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const technicalSkills = [
    { name: "React/React Native", logo: "/logos/react.png" },
    { name: "HTML/CSS", logo: "/logos/htmlcss.png" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
    { name: "Firebase", logo: "/logos/firebase.png" },
    { name: "Node.js + Express JS", logo: "/logos/nodejs.png" },
    { name: "Java", logo: "/logos/java.png" },
    { name: "SQL", logo: "/logos/sql.png" },
    { name: "Android Studio", logo: "/logos/androidstudio.png" },
    { name: "Figma", logo: "/logos/figma.png" },
    { name: "Git", logo: "/logos/git.png" },
    { name: "PS/AI/LR/Pr", logo: "/logos/adobe.png" },
    { name: "WordPress", logo: "/logos/wordpress.png" },
    { name: "Unity (Game Development / VR)", logo: "/logos/unity.png" },
    { name: "Maya (3D Modeling)", logo: "/logos/maya.png" },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen py-20 px-6 bg-background relative overflow-hidden" 
      id="skills"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient orbs */}
        <div 
          className="absolute top-20 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 40%, transparent), transparent 70%)',
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute bottom-20 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 40%, transparent), transparent 70%)',
            animationDuration: '5s',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 30%, transparent), transparent 70%)'
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-sm text-primary font-semibold mb-3 tracking-widest uppercase">
            SKILLS
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            <span className="font-bold text-primary">Technical</span>{" "}
            <span className="font-light text-primary">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {technicalSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div 
                className="rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 border border-border relative overflow-hidden backdrop-blur-sm"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--card) 80%, transparent)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--card) 100%, transparent)';
                  e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary) 50%, transparent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--card) 80%, transparent)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: 'radial-gradient(circle at center, color-mix(in srgb, var(--primary) 20%, transparent), transparent 70%)'
                  }}
                />
                
                <div className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} Logo`} 
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              
              {/* Skill Name */}
              <p className="text-center mt-4 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}