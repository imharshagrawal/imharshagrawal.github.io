import { PROJECTS } from '../data/portfolio'
import styles from './Projects.module.css'

const colorMap = {
  accent: { badge: 'badge-accent', borderVar: 'var(--accent)' },
  electric: { badge: 'badge-electric', borderVar: 'var(--electric)' },
  emerald: { badge: 'badge-emerald', borderVar: 'var(--emerald)' },
  amber: { badge: 'badge-amber', borderVar: 'var(--amber)' },
}

const stackBadgeMap = { accent: 'badge-accent', electric: 'badge-electric', emerald: 'badge-emerald', amber: 'badge-amber' }

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            Projects
          </span>
          <h2 className="section-title">Key Deliverables &<br /><span className="gradient-text">Business Impact</span></h2>
          <p className="section-subtitle">A selection of high-impact projects across product management, data engineering, and analytics.</p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className={`card ${styles.card}`}
              style={{ '--card-color': colorMap[p.color].borderVar }}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>
                  <span className={styles.icon}>{p.icon}</span>
                </div>
                <div className={styles.actions}>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className={styles.actionBtn} title="Live demo">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noopener noreferrer" className={styles.actionBtn} title="Source code">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.description}</p>

              <div className={styles.highlight}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                {p.highlight}
              </div>

              <div className={styles.stack}>
                {p.stack.map((s, j) => (
                  <span key={j} className={`badge ${stackBadgeMap[p.color]}`}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
