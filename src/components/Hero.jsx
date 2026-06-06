import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
      }}
    >
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '80px 24px',
          width: '100%',
        }}
      >
        <div className="hero-grid">
          {/* Left: text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}
          >
            {/* Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '1px',
                  backgroundColor: '#999',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#999',
                }}
              >
                Full-Stack Engineer &amp; Tech Lead
              </span>
            </div>

            {/* Name */}
            <h1
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 400,
                color: '#1a1a1a',
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Keshav Porwal
            </h1>

            {/* Bio */}
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '17px',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#6b6b6b',
                maxWidth: '440px',
                margin: 0,
              }}
            >
              I build production systems at the intersection of agriculture and
              AI — currently leading the tech stack at Kheti.ai, serving 500+
              farmers across India.
            </p>

            {/* Links row */}
            <div
              style={{
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              {[
                { label: 'GitHub', href: 'https://github.com/keshavporwal' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/keshavporwal' },
                { label: 'Email', href: 'mailto:porwal.keshav.6324@gmail.com' },
              ].map(({ label, href }, i, arr) => (
                <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="hero-link"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '13px',
                      fontWeight: 400,
                      color: '#6b6b6b',
                      textDecoration: 'none',
                    }}
                  >
                    {label}
                  </a>
                  {i < arr.length - 1 && (
                    <span style={{ color: '#ccc', fontSize: '13px' }}>·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Competitive prog */}
            <p
              style={{
                fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                fontSize: '12px',
                color: '#999',
                margin: 0,
                letterSpacing: '0.02em',
              }}
            >
              LeetCode 1480 · Codeforces 1430
            </p>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
              <img
                src="/images/hero.jpg"
                alt="Keshav Porwal"
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  borderRadius: '4px',
                  display: 'block',
                  filter: 'saturate(0.9) brightness(1.02)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: '-22px',
                  right: 0,
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#999',
                  whiteSpace: 'nowrap',
                }}
              >
                SIH '24 · ICPC '25 · IIT Indore Hackathon Winner
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 55% 45%;
          gap: 64px;
          align-items: center;
        }
        .hero-link:hover {
          color: #c45d3e !important;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        @media (max-width: 700px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-grid > div:nth-child(2) {
            order: -1;
            align-items: stretch;
          }
          .hero-grid > div:nth-child(2) img {
            height: 250px !important;
            max-width: 100% !important;
          }
          .hero-grid > div:nth-child(2) > div {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
