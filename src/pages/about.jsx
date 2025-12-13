import React from "react";

export default function About() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I'm a passionate UI Designer and Developer with a unique blend of creative design thinking and solid
              technical skills. My journey in tech started with a fascination for how great design can solve real
              problems.
            </p>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Over the years, I've had the opportunity to work on diverse projects, from startups to established
              companies, always focusing on creating user-centered solutions that are both beautiful and performant.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not designing or coding, you'll find me exploring new design trends, contributing to open-source
              projects, or sharing knowledge with the design community.
            </p>
          </div>

          {/* Image / Avatar Placeholder */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(236,72,153,0.1))',
            borderRadius: '1rem',
            padding: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '24rem'
          }}>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary/20 mb-4">
                ✨
              </div>
              <p className="text-foreground/60">
                Placeholder for your photo or avatar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
