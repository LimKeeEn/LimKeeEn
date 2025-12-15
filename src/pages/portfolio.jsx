import React, { useState, useEffect, useRef } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Modern e-commerce solution with real-time inventory management and payment processing.",
      image: "https://placehold.co/800x600/9333ea/ffffff?text=E-Commerce",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Mobile Fitness App",
      category: "mobile",
      description: "AI-powered fitness tracking app with personalized workout recommendations.",
      image: "https://placehold.co/800x600/10b981/ffffff?text=Fitness+App",
      tech: ["React Native", "Firebase", "TensorFlow"],
      link: "#",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "design",
      description: "Complete brand identity package including logo, color palette, and style guide.",
      image: "https://placehold.co/800x600/f97316/ffffff?text=Brand+Design",
      tech: ["Figma", "Illustrator", "Photoshop"],
      link: "#",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "VR Experience Game",
      category: "game",
      description: "Immersive virtual reality adventure game with stunning visuals and intuitive controls.",
      image: "https://placehold.co/800x600/3b82f6/ffffff?text=VR+Game",
      tech: ["Unity", "C#", "Blender"],
      link: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 5,
      title: "Dashboard Analytics",
      category: "web",
      description: "Real-time analytics dashboard with interactive data visualizations and reports.",
      image: "https://placehold.co/800x600/6366f1/ffffff?text=Analytics",
      tech: ["React", "D3.js", "Express"],
      link: "#",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Social Media Campaign",
      category: "design",
      description: "Multi-platform social media campaign with engaging visuals and copy.",
      image: "https://placehold.co/800x600/ec4899/ffffff?text=Social+Media",
      tech: ["After Effects", "Premiere Pro", "Photoshop"],
      link: "#",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: "⚡" },
    { id: "web", label: "Web Dev", icon: "🌐" },
    { id: "mobile", label: "Mobile", icon: "📱" },
    { id: "design", label: "Design", icon: "🎨" },
    { id: "game", label: "Game Dev", icon: "🎮" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden"
      id="projects"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating orbs */}
        <div 
          className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)',
            animationDuration: '6s'
          }}
        />
        <div 
          className="absolute bottom-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%)',
            animationDuration: '8s',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent 70%)'
          }}
        />
        
        {/* Animated grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xs font-bold mb-2 tracking-[0.3em] uppercase bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Portfolio
          </p>
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent leading-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of work that showcases creativity, innovation, and technical excellence
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white shadow-md hover:shadow-lg border border-gray-200'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card */}
              <div className="relative h-[450px] rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 mix-blend-multiply transition-opacity duration-500 ${
                    hoveredProject === project.id ? 'opacity-70' : 'opacity-90'
                  }`}></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-lg">
                    {filters.find(f => f.id === project.category)?.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-[calc(100%-14rem)]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={project.link}
                    className="group/btn flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-[1.02]"
                  >
                    View Project
                    <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </a>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* External Glow on Hover */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 font-semibold">No projects found in this category</p>
          </div>
        )}

        {/* View More CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="group px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            View All Projects
            <span className="inline-block ml-2 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}