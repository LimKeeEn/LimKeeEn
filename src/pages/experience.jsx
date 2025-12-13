import React from "react";

export default function Experience() {
  const experiences = [
    {
      company: "Design Studio Co.",
      position: "Senior UI/UX Designer",
      period: "2024 - Present",
      description:
        "Leading design initiatives for digital products. Creating design systems, conducting user research, and mentoring junior designers.",
      highlights: ["Design Systems", "User Research", "Team Leadership"],
    },
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      period: "2022 - 2024",
      description:
        "Built scalable web applications using React and Node.js. Collaborated with design teams to implement pixel-perfect UIs.",
      highlights: ["React", "Node.js", "Database Design"],
    },
    {
      company: "Startup Hub",
      position: "Junior Developer",
      period: "2020 - 2022",
      description:
        "Developed multiple web projects from concept to deployment. Worked with modern tech stack and agile methodologies.",
      highlights: ["JavaScript", "CSS", "Git"],
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                  <p className="text-lg text-primary font-semibold">{exp.company}</p>
                </div>
                <span className="text-foreground/60 mt-2 md:mt-0 text-sm">{exp.period}</span>
              </div>
              <p className="text-foreground/70 mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
