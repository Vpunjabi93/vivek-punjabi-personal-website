import React from 'react';
import { BookOpen, Cpu, Globe, ArrowUpRight } from 'lucide-react';

const PortfolioGallery = () => {
  const projects = [
    {
      title: "React Interactive Tour Framework",
      desc: "A custom React component library that embeds fluid, step-by-step clickable walkthroughs into SaaS onboarding. Designed to drive conversion and teach product features without user friction.",
      tech: ["React", "CSS Transitions", "Framer Motion"],
      icon: <Globe size={18} />,
      link: "https://github.com/Vpunjabi93/vivek-punjabi-personal-website"
    },
    {
      title: "AI Persona & positioning Mapper",
      desc: "A node pipeline that parses product landing pages, runs them through custom LLM prompts, and maps out target customer personas, operational pain points, and product-market fit scores.",
      tech: ["Node.js", "Nemotron API", "Cheerio Scraper"],
      icon: <Cpu size={18} />,
      link: "https://github.com/Vpunjabi93/vivek-punjabi-personal-website"
    },
    {
      title: "WebGL Audit Portfolio",
      desc: "This website itself. Features an interactive 3D WebGL coin cylinder, a responsive client-side webpage crawler, and live state-synchronized animation pipelines built with vanilla Three.js.",
      tech: ["Three.js", "React", "OpenRouter API", "Vite"],
      icon: <BookOpen size={18} />,
      link: "https://github.com/Vpunjabi93/vivek-punjabi-personal-website"
    }
  ];

  return (
    <section id="portfolio-gallery" className="section-split scroll-reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        
        <div className="label" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          Origin & Selected Builds
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Origin Story */}
          <div className="glass-card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '1.5rem' }}>
              <img 
                src="/src/assets/profile.jpg" 
                alt="Vivek Punjabi" 
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  objectFit: 'cover', 
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'; // Hide if image fails to load
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div className="label" style={{ color: 'var(--mode-accent)', fontSize: '0.7rem' }}>
                  // THE ORIGIN
                </div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, lineHeight: 1.2 }}>
                  From Cold Calls <br />
                  to <span style={{ fontStyle: 'italic', color: 'var(--mode-accent)' }}>GTMs</span>
                </h3>
              </div>
            </div>
            
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 300 }}>
              I am primarily a Product Marketing Manager (PMM) who uses AI as an enhancer to scale my work. I spent years in B2C sales, learning what makes consumers tick and why products succeed or fail.
            </p>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 300 }}>
              To bridge the gap between product strategy and real-world execution, I learned to build. I code interactive product tours, write conversion narratives, and leverage AI to map product-market fit and target personas.
            </p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
              <span className="label" style={{ fontSize: '0.65rem', opacity: 0.5 }}>
                PMM Focus // AI Enhancer
              </span>
            </div>
          </div>

          {/* Right Column: Selected Builds */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="label" style={{ fontSize: '0.7rem', opacity: 0.5, marginBottom: '0.5rem' }}>
              // SELECTED CODE BUILDS
            </div>

            {projects.map((proj, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                onClick={() => window.open(proj.link, '_blank')}
                style={{ 
                  padding: '2rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(199, 198, 198, 0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ color: 'var(--mode-accent)', background: 'rgba(255,255,255,0.02)', padding: '0.5rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      {proj.icon}
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{proj.title}</h4>
                  </div>
                  <ArrowUpRight size={16} style={{ opacity: 0.3 }} />
                </div>

                <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300 }}>
                  {proj.desc}
                </p>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  {proj.tech.map((t, i) => (
                    <span 
                      key={i} 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.65rem', 
                        background: 'rgba(255,255,255,0.03)', 
                        color: 'var(--silver)', 
                        padding: '0.2rem 0.5rem', 
                        borderRadius: '3px',
                        border: '1px solid rgba(255,255,255,0.04)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default PortfolioGallery;
