import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function FadeSection({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

const experiences = [
  {
    dates: 'Jan 2026 – Feb 2026',
    company: 'DREAMVIEW',
    location: 'Remote',
    role: 'Software Development Intern',
    bullets: [
      'Developed front-end features using React, integrating TanStack Router for seamless page navigation and TanStack React Query for efficient data fetching.',
      'Revamped the user interface by building clean, reusable components with Shadcn UI, improving overall visual consistency and responsiveness.',
    ],
  },
  {
    dates: 'Mar 2025 – Present',
    company: 'Kheti.ai',
    location: 'Remote',
    role: 'Tech Lead for MVP Development',
    bullets: [
      'Architected the complete startup MVP using FastAPI, MongoDB, Redis, and Docker, with rate limiting, pagination, OAuth, and session management.',
      'Built an AI-powered WhatsApp chatbot using Twilio, GPT-4o, Google Earth Engine, and Leaflet.js, serving 500+ farmers; added AI voice input to improve crop diagnosis accuracy by 15–20%.',
      'Instrumented FastAPI services with Prometheus metrics and built Grafana dashboards for request latency, error rates, and Redis queue depth, enabling proactive incident detection.',
    ],
  },
];

const skills = [
  { category: 'Languages', values: 'C++, JavaScript, Python' },
  { category: 'Frameworks & DB', values: 'FastAPI, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, React' },
  { category: 'Tools', values: 'Git, Postman, Prometheus, Grafana, Docker, AWS, Azure, GCP, OpenAI APIs' },
  { category: 'Fundamentals', values: 'DSA, OS, DBMS, OOP, SDLC, Computer Networks' },
];

const achievements = [
  'ICPC 2025 Regionalist',
  'Top 100 Startup — recognized nationally by APEDA\'s Indus Food Programme for Kheti.ai',
  '400+ DSA problems solved across platforms',
  'Winner — IIT Indore Hackathon (DevCraft)',
  'Finalist — Smart India Hackathon 2024',
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: '140px 0' }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
        <FadeSection>
          {/* Section heading */}
          <div style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: '32px',
                fontWeight: 400,
                color: '#1a1a1a',
                margin: '0 0 12px 0',
              }}
            >
              Experience
            </h2>
            <div style={{ width: '60px', height: '1px', backgroundColor: '#e5e5e5' }} />
          </div>
        </FadeSection>

        {/* Experience entries */}
        {experiences.map((exp, i) => (
          <FadeSection key={i}>
            <div className="exp-row">
              {/* Date column */}
              <div className="exp-date">
                {exp.dates}
              </div>

              {/* Content column */}
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '4px' }}>
                  <span
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#1a1a1a',
                    }}
                  >
                    {exp.company}
                  </span>
                  <span
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '14px',
                      color: '#999',
                      marginLeft: '8px',
                    }}
                  >
                    · {exp.location}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '14px',
                    fontStyle: 'italic',
                    color: '#6b6b6b',
                    marginBottom: '12px',
                  }}
                >
                  {exp.role}
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '14px',
                        color: '#3d3d3d',
                        lineHeight: 1.6,
                        display: 'flex',
                        gap: '10px',
                      }}
                    >
                      <span style={{ color: '#c45d3e', flexShrink: 0, marginTop: '1px' }}>—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {i < experiences.length - 1 && (
              <div style={{ height: '1px', backgroundColor: '#f0f0f0', margin: '48px 0' }} />
            )}
          </FadeSection>
        ))}

        {/* Education */}
        <FadeSection>
          <div style={{ height: '1px', backgroundColor: '#f0f0f0', margin: '48px 0' }} />
          <div className="exp-row">
            <div className="exp-date">2023 – 2027</div>
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: '4px' }}>
                <span
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                  }}
                >
                  IET DAVV, Indore
                </span>
              </div>
              <div
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '14px',
                  fontStyle: 'italic',
                  color: '#6b6b6b',
                }}
              >
                B.E. in Information Technology · CGPA 8.11
              </div>
            </div>
          </div>
        </FadeSection>

        {/* Skills */}
        <FadeSection>
          <div
            style={{
              marginTop: '64px',
              backgroundColor: '#f5f0eb',
              borderRadius: '4px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {skills.map(({ category, values }) => (
              <div key={category} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'baseline' }}>
                <span
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#999',
                    minWidth: '130px',
                    flexShrink: 0,
                  }}
                >
                  {category}
                </span>
                <span
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '14px',
                    color: '#3d3d3d',
                  }}
                >
                  {values}
                </span>
              </div>
            ))}
          </div>
        </FadeSection>

        {/* Achievements */}
        <FadeSection>
          <div style={{ marginTop: '64px' }} className="achievements-grid">
            {/* Achievements list */}
            <div>
              <h3
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#999',
                  margin: '0 0 20px 0',
                }}
              >
                Achievements
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {achievements.map((a, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '14px',
                      color: '#3d3d3d',
                      lineHeight: 1.6,
                      display: 'flex',
                      gap: '10px',
                    }}
                  >
                    <span style={{ color: '#c45d3e', flexShrink: 0 }}>—</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              {/* CV download */}
              <a
                href="#"
                className="cv-link"
                style={{
                  display: 'inline-block',
                  marginTop: '32px',
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '14px',
                  color: '#6b6b6b',
                  textDecoration: 'none',
                }}
              >
                Download CV ↓
              </a>
            </div>

            {/* Hackathon photo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <img
                src="/images/hackathon.jpg"
                alt="Smart India Hackathon 2024"
                style={{
                  width: '100%',
                  maxWidth: '280px',
                  height: '220px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  filter: 'saturate(0.9) brightness(1.02)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.09), 0 2px 6px rgba(0,0,0,0.05)',
                  display: 'block',
                }}
              />
              <span
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.06em',
                  color: '#999',
                }}
              >
                Smart India Hackathon, 2024
              </span>
            </div>
          </div>
        </FadeSection>
      </div>

      <style>{`
        .exp-row {
          display: flex;
          gap: 40px;
        }
        .exp-date {
          width: 140px;
          flex-shrink: 0;
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          color: #999;
          padding-top: 2px;
          font-variant-numeric: tabular-nums;
          line-height: 1.6;
        }
        .achievements-grid {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 48px;
          align-items: start;
        }
        .cv-link:hover {
          color: #c45d3e !important;
        }
        @media (max-width: 700px) {
          .exp-row { flex-direction: column; gap: 8px; }
          .exp-date { width: auto; }
          .achievements-grid { grid-template-columns: 1fr; }
          .achievements-grid > div:nth-child(2) { order: -1; }
        }
      `}</style>
    </section>
  );
}
