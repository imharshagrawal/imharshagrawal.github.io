import { useState } from 'react'
import { EXPERIENCE } from '../data/portfolio'
import styles from './Experience.module.css'

const colorBorderMap = {
  accent: 'var(--accent)',
  electric: 'var(--electric)',
  emerald: 'var(--emerald)',
}

const badgeMap = {
  accent: 'badge-accent',
  electric: 'badge-electric',
  emerald: 'badge-emerald',
}

export default function Experience() {
  const [expanded, setExpanded] = useState(0)

  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
            Experience
          </span>
          <h2 className="section-title">Where I've<br /><span className="gradient-text">Made an Impact</span></h2>
          <p className="section-subtitle">7 years across FinTech, BFSI, and Retail Supply Chain — from regulatory compliance to AI-powered product launches.</p>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCE.map((exp, i) => (
            <div
              key={i}
              className={`${styles.entry} ${expanded === i ? styles.entryOpen : ''}`}
              style={{ '--entry-color': colorBorderMap[exp.color] }}
            >
              <div className={styles.entryLeft}>
                <div className={styles.dot} />
                {i < EXPERIENCE.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.entryRight}>
                <button
                  className={styles.entryHeader}
                  onClick={() => setExpanded(i === expanded ? -1 : i)}
                  aria-expanded={expanded === i}
                >
                  <div className={styles.entryMeta}>
                    <div className={styles.entryRole}>{exp.role}</div>
                    <div className={styles.entryCompany}>
                      <span style={{ color: colorBorderMap[exp.color], fontWeight: 600 }}>{exp.company}</span>
                      <span className={styles.entryDot}>·</span>
                      <span>{exp.location}</span>
                      <span className={styles.entryDot}>·</span>
                      <span>{exp.period}</span>
                    </div>
                    <div className={styles.subRole}>{exp.subRole}</div>
                    <div className={styles.tags}>
                      {exp.tags.map((t, j) => (
                        <span key={j} className={`badge ${badgeMap[exp.color]}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className={`${styles.chevron} ${expanded === i ? styles.chevronOpen : ''}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </button>

                {expanded === i && (
                  <ul className={styles.highlights}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} className={styles.highlight}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
