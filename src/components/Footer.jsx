import { SOCIAL, NAV_LINKS } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoMark}>H</div>
            <div>
              <div className={styles.name}>Harsh Agrawal</div>
              <div className={styles.tagline}>Product Management & Analytics · Bengaluru, India</div>
            </div>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.socials}>
            {SOCIAL.map(s => (
              <a
                key={s.label}
                href={s.href}
                className={styles.socialBtn}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {year} Harsh Agrawal. Built with React + Vite. Hosted on Bitbucket Pages.
          </span>
          <span className={styles.stack}>
            <span className={styles.dot} style={{ background: '#378ADD' }} /> React
            <span className={styles.dot} style={{ background: '#639922' }} /> Vite
            <span className={styles.dot} style={{ background: '#0052CC' }} /> Bitbucket
            <span className={styles.dot} style={{ background: '#EA4335' }} /> EmailJS
          </span>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon }) {
  if (icon === 'linkedin') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  )
  if (icon === 'github') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
  )
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  )
}
