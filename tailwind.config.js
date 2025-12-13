/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // 1. Configure Dark Mode Strategy
  darkMode: ["class"], 
  
  theme: {
    // 2. Define standard container settings (optional, but good practice)
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    // 3. Extend the theme with custom variables
    extend: {
      colors: {
        // --- Core Colors ---
        // We use a CSS variable definition here, which will read the oklch value
        // from your :root or .dark blocks in index.css.
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },

        // --- Chart/Sidebar Colors ---
        'chart-1': "var(--chart-1)",
        'chart-2': "var(--chart-2)",
        'chart-3': "var(--chart-3)",
        'chart-4': "var(--chart-4)",
        'chart-5': "var(--chart-5)",
        
        // Tailwind classes for sidebar components (e.g., bg-sidebar)
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          'primary-foreground': "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          'accent-foreground': "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      
      // 4. Map the Radius Variable
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)", // Using the calc from your @theme
        sm: "calc(var(--radius) - 4px)", // Using the calc from your @theme
      },
      
      // 5. Map the Font Variables
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  // 6. Ensure Plugins are Correctly Configured
  plugins: [], // You may need to add the 'tw-animate-css' plugin here if it is one.
};