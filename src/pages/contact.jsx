import React, { useState } from "react";

export default function Contact({ scrollToSection }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your contact form logic here
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-primary">Get In Touch</h2>
        <p className="text-lg text-foreground/70 mb-12">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <p className="text-foreground/60 mb-2">Email</p>
                <a
                  href="mailto:kee.en@example.com"
                  className="text-primary font-semibold hover:text-accent transition-colors"
                >
                  kee.en@example.com
                </a>
              </div>
              <div>
                <p className="text-foreground/60 mb-2">Social Links</p>
                <div className="flex gap-4">
                  {[
                    { name: "GitHub", url: "#" },
                    { name: "LinkedIn", url: "#" },
                    { name: "Twitter", url: "#" },
                  ].map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      className="text-primary hover:text-accent transition-colors font-semibold"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-foreground font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-foreground font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-foreground font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-16 pt-12 border-t border-border text-center">
          <p className="text-foreground/60 mb-4">© 2025 Kee En. All rights reserved.</p>
          <button
            onClick={() => scrollToSection("home")}
            className="text-primary hover:text-accent transition-colors font-semibold"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </section>
  );
}
