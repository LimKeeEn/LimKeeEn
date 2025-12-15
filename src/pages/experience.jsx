import React, { useState, useEffect, useRef } from "react";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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

  const experiences = [
    {
      date: "July 2025 - Oct 2025",
      title: "Digital Marketing Intern",
      company: "Axrail.ai, Kuala Lumpur (Mid Valley)",
      badge: "INTERN",
      description:<>Supports marketing campaigns by creating engaging content across digital platforms, including written posts, visuals, and videos. <strong>Successfully helped Axrail establish an XHS account and achieved strong engagement insights.</strong></>,
      subRoles: [
        {
          title: "Minor Role: Frontend Developer Intern",
          description:
            <>Assisted in developing and refining UI components using React (tsx), improving responsiveness and user experience for internal dashboards and <strong>Family Mart Admin Web.</strong></>
        }
      ]
    },
    {
      date: "July 2024 - Dec 2024",
      title: "Multimedia Intern",
      company: "META Technology (FootfallCam), Sunagi Long",
      badge: "INTERN",
      description: <>Assists with <strong>Nursery Web</strong> and internal dashboard updates using <strong>WordPress</strong>. Creating product videos to support marketing and communication efforts.</>
    },
    {
      date: "Oct 2023 - Present",
      title: "Freelance Photographer & Videographer",
      badge: "FRELANCER",
      description: "Captures high-quality photos and videos for clients and also handles photo and video editing."
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-background relative overflow-hidden"
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
            EXPERIENCE
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            <span className="font-bold text-primary">Professional</span>{" "}
            <span className="font-light text-primary">Journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr,3fr] gap-12 items-start">
          {/* Left: Profile Image */}
          <div className={`flex justify-center lg:justify-start top-24 items-center min-h-screen transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="relative w-full max-w-sm">
              <div className="relative bg-gradient-to-br from-green-500 to-emerald-700 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/profile-bg.png"
                  alt="Profile"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-8 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-2 w-3 h-3 rounded-full bg-gray-400 transform -translate-x-1.5 transition-all duration-300 ${
                      hoveredIndex === index ? "scale-150 bg-blue-500" : ""
                    }`}
                  ></div>

                  {/* Date badge */}
                  <div className="inline-block bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-medium mb-3">
                    {exp.date}
                  </div>

                  {/* Content card */}
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 ${
                      hoveredIndex === index ? "transform -translate-y-1" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {exp.title}
                      </h3>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                        {exp.badge}
                      </span>
                    </div>

                    <p className="text-gray-600 font-medium mb-4">
                      {exp.company}
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Minor roles */}
                    {exp.subRoles && (
                      <div className="mt-4 border-l-2 border-blue-200 pl-4 space-y-3">
                        {exp.subRoles.map((role, i) => (
                          <div key={i}>
                            <p className="text-sm font-semibold text-primary">
                              {role.title}
                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {role.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}