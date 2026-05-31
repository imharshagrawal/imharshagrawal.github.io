import { STATS, SOCIAL } from '../data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Decorative orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={`${styles.availBadge} animate-fade-up`}>
              <span className={styles.availDot} />
              Open to opportunities
            </div>

            <h1 className={`${styles.name} animate-fade-up delay-1`}>
              Harsh<br />
              <span className="gradient-text">Agrawal</span>
            </h1>

            <p className={`${styles.title} animate-fade-up delay-2`}>
              Senior Business Analyst<br />
              <span className={styles.titleAnd}>|</span> Product Management
            </p>

            <p className={`${styles.desc} animate-fade-up delay-3`}>
              7 years driving data-to-decisions across FinTech, BFSI, and Retail Supply Chain.
              Currently building AI-powered inventory intelligence at Impact Analytics.
            </p>

            <div className={`${styles.ctas} animate-fade-up delay-4`}>
              <a href="#projects" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                View my work
              </a>
              <a href="#contact" className="btn btn-ghost">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Get in touch
              </a>
            </div>

            <div className={`${styles.socials} animate-fade-up delay-5`}>
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} className={styles.socialLink} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className={`${styles.avatarCol} animate-fade-in delay-2`}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatarRing} />
              <div className={styles.avatar}>
                <span className={styles.avatarInitials}><img src="/profile_v2.png" alt="Harsh Agrawal" /></span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className={`${styles.statsStrip} animate-fade-up delay-6`}>
          {STATS.map((s, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialIcon({ icon }) {
  if (icon === 'linkedin') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  )
  if (icon === 'github') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
  )
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  )
}
