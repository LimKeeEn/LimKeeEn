import React from "react";

export default function Education() {
  const education = [
    {
      school: "Design Academy",
      degree: "Master of Design",
      field: "UI/UX Design",
      year: "2022 - 2024",
      description: "Focused on user research, interaction design, and design systems.",
    },
    {
      school: "Tech University",
      degree: "Bachelor of Computer Science",
      field: "Software Engineering",
      year: "2018 - 2022",
      description: "Strong foundation in web development, algorithms, and software architecture.",
    },
    {
      school: "Digital Bootcamp",
      degree: "Full Stack Web Development",
      field: "Web Development",
      year: "2017 - 2018",
      description: "Intensive program covering frontend, backend, and modern development practices.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-primary pl-8 pb-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{edu.school}</h3>
                  <p className="text-lg text-primary font-semibold">{edu.degree}</p>
                </div>
                <span className="text-foreground/60 mt-2 md:mt-0">{edu.year}</span>
              </div>
              <p className="text-foreground/70 mb-2">{edu.field}</p>
              <p className="text-foreground/60 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
