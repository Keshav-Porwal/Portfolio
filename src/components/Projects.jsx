import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function FadeSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}

const projects = [
  {
    name: 'AgroStand.ai',
    stack: 'OpenAI API, FastAPI, React, Docker, Cloudjiffy',
    description:
      'AI-powered WhatsApp chatbot for real-time agricultural guidance. Integrated GPT-4o for multimodal crop disease detection from images and text. Projected to reduce fertilizer misapplication by 50–60%.',
    live: '#',
    github: '#',
  },
  {
    name: 'Walmart Sphere',
    stack: 'Node.js, Prisma, Vercel, React',
    description:
      'AI & AR-powered retail platform with smart chatbot, AR product visualization, and real-time Social Sync for collaborative group shopping.',
    live: '#',
    github: '#',
  },
  {
    name: 'Xplora',
    stack: 'MERN, Mappls API, Vercel',
    description:
      'Full-stack gamified web app with custom Geolocation API algorithms and MongoDB redemption system driving customer footfall to local vendors via location-based rewards.',
    live: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: '140px 0' }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
        {/* Heading */}
        <FadeSection>
          <div style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: '32px',
                fontWeight: 400,
                color: '#1a1a1a',
                margin: '0 0 12px 0',
              }}
            >
              Projects
            </h2>
            <div style={{ width: '60px', height: '1px', backgroundColor: '#e5e5e5' }} />
          </div>
        </FadeSection>

        {/* Project rows */}
        <div>
          {projects.map((project, i) => (
            <FadeSection key={i} delay={i * 0.05}>
              <div
                style={{
                  borderTop: '1px solid #f0f0f0',
                  padding: '36px 0',
                }}
                className="project-row"
              >
                {/* Left */}
                <div className="project-left">
                  <h3
                    style={{
                      fontFamily: '"DM Serif Display", serif',
                      fontSize: '22px',
                      fontWeight: 400,
                      color: '#1a1a1a',
                      margin: '0 0 6px 0',
                      lineHeight: 1.2,
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                      fontSize: '12px',
                      color: '#999',
                      margin: '0 0 12px 0',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {project.stack}
                  </p>
                  <p
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '14px',
                      color: '#6b6b6b',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Right: links */}
                <div className="project-links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-link"
                      style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '13px',
                        color: '#6b6b6b',
                        textDecoration: 'none',
                        display: 'block',
                      }}
                    >
                      Live ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-link"
                      style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '13px',
                        color: '#6b6b6b',
                        textDecoration: 'none',
                        display: 'block',
                      }}
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </FadeSection>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid #f0f0f0' }} />
        </div>
      </div>

      <style>{`
        .project-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
        }
        .project-left {
          flex: 1;
          max-width: 70%;
        }
        .project-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
          padding-top: 4px;
          min-width: 80px;
        }
        .proj-link:hover {
          color: #c45d3e !important;
        }
        @media (max-width: 700px) {
          .project-row { flex-direction: column; gap: 16px; }
          .project-left { max-width: 100%; }
          .project-links { align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}
