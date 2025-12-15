import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

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

  const projects = [
    {
      title: "UM Convo App",
      description: "A mobile app that helps UM graduates manage and access their convocation information, schedules, and related services easily in one place.",
      image: "/umconvo.png",
      tags: ["React Native","React", "Node.js", "Express.js", "JSX", "Tailwind CSS", "Firebase", "RestAPI"],
      link: "/umconvo-app"
    },
    {
      title: "Health Care Product Website",
      description: "Full-featured online shopping experience with seamless checkout and inventory management.",
      image: "/designduel.png",
      tags: ["Figma", "User Interface Design", "Responsive Design", "Wireframe"],
      link: "/skincare-product-website"
    },
    {
      title: "Memory Cards Mobile Game",
      description: "A casual mobile game where players flip cards to find matching pairs, helping improve memory and concentration skills.",
      image: "/memorycard.png",
      tags: ["Unity", "C++"],
      link: "/projects/memory-cards-game"
    },
    {
      title: "Graphic Design",
      description: "Creative process of communicating ideas and messages through visual elements to create engaging and effective designs for digital and print media.",
      image: "/graphic.png",
      tags: ["Logo", "Tshirt", "Poster", "Lanyard", "Banner", "Flyer", "Sticker", "Illustrator", "Photoshop", "Canva"],
      span: 2,
      link: "/projects/graphic-design"
    },
    {
      title: "Photography",
      description: "Art of capturing moments, emotions, and stories through a camera",
      image: "/photography.png",
      tags: ["Photography", "Videography", "Photo Editing", "Video Editing"],
      span: 2,
      link: "/projects/photography"
    },
  ];

  const handleProjectClick = (projectLink) => {
    navigate(projectLink);
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-background relative overflow-hidden"
      id="projects"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-40 right-20 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 40%, transparent), transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 40%, transparent), transparent 70%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-sm text-primary font-semibold mb-3 tracking-widest uppercase">
            Recent Works
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            <span className="font-bold text-primary">Featured</span>{" "}
            <span className="font-light text-primary">Projects</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Explore my latest work showcasing design and development expertise
          </p>
        </div>

        {/* Projects Grid - Custom layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${
                project.span === 2 
                  ? 'lg:col-span-3 md:col-span-1 aspect-[16/9]' 
                  : 'lg:col-span-2 md:col-span-1 aspect-[4/5]'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, color-mix(in srgb, var(--primary) 90%, transparent), color-mix(in srgb, var(--accent) 90%, transparent))'
                }}
              />

              {/* Content - Hidden by default, shows on hover */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-auto">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-white rounded-full"
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--background) 30%, transparent)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => handleProjectClick(project.link)}
                  className="self-start px-6 py-2 bg-white text-primary rounded-lg font-semibold text-sm hover:scale-105 transition-transform"
                >
                  View Project →
                </button>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold transition-all hover:scale-105"
            onClick={() => navigate("/portfolio")}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "color-mix(in srgb, var(--primary) 10%, transparent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
}