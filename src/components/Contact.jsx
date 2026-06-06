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

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        style={{ padding: '140px 0 100px' }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
          <FadeSection>
            {/* Heading */}
            <div style={{ marginBottom: '40px' }}>
              <h2
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: '32px',
                  fontWeight: 400,
                  color: '#1a1a1a',
                  margin: '0 0 12px 0',
                }}
              >
                Let's connect
              </h2>
              <div style={{ width: '60px', height: '1px', backgroundColor: '#e5e5e5' }} />
            </div>

            {/* Body */}
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '17px',
                color: '#6b6b6b',
                lineHeight: 1.7,
                maxWidth: '480px',
                margin: '0 0 32px 0',
              }}
            >
              I'm always open to interesting conversations, collaborations, or
              opportunities. Drop me a line.
            </p>

            {/* Email CTA */}
            <div style={{ marginBottom: '16px' }}>
              <a
                href="mailto:porwal.keshav.6324@gmail.com"
                className="email-link"
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  color: '#1a1a1a',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'color 150ms ease',
                }}
              >
                porwal.keshav.6324@gmail.com
              </a>
            </div>

            {/* Phone */}
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '14px',
                color: '#999',
                margin: '0 0 24px 0',
              }}
            >
              +91-7000862419
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              {[
                { label: 'GitHub', href: 'https://github.com/keshavporwal' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/keshavporwal' },
              ].map(({ label, href }, i, arr) => (
                <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '14px',
                      color: '#6b6b6b',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                    }}
                  >
                    {label}
                  </a>
                  {i < arr.length - 1 && (
                    <span style={{ color: '#ccc', fontSize: '14px' }}>·</span>
                  )}
                </span>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid #eeeeee',
          padding: '32px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
          className="footer-inner"
        >
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '12px',
              color: '#999',
            }}
          >
            © 2026 Keshav Porwal
          </span>
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '12px',
              color: '#999',
            }}
          >
            Built with React
          </span>
        </div>
      </footer>

      <style>{`
        .email-link:hover { color: #c45d3e !important; }
        .social-link:hover { color: #c45d3e !important; }
        @media (max-width: 600px) {
          .footer-inner { justify-content: center; text-align: center; }
        }
      `}</style>
    </>
  );
}
