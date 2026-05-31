import { SKILLS, CERTIFICATIONS } from '../data/portfolio'
import styles from './About.module.css'

const colorMap = {
  accent: 'badge-accent',
  electric: 'badge-electric',
  emerald: 'badge-emerald',
  amber: 'badge-amber',
}

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <span className="section-eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              About me
            </span>
            <h2 className="section-title">Analyst. Builder.<br /><span className="gradient-text">Problem Solver.</span></h2>
            <p className={styles.bio}>
              I'm a Senior Business Analyst and Product Manager with 7 years of experience at the intersection of data, product, and strategy. From regulatory compliance frameworks in Australia to launching AI-powered SaaS platforms in the US, I've navigated complex stakeholder landscapes and translated data into decisions that move businesses forward.
            </p>
            <p className={styles.bio}>
              My sweet spot is owning the full lifecycle — discovery through deployment — working closely with engineering, data science, and executive teams to build things that actually get adopted and drive measurable ROI.
            </p>

            <div className={styles.certifications}>
              <h3 className={styles.certTitle}>Certifications</h3>
              {CERTIFICATIONS.map((c, i) => (
                <div key={i} className={styles.certItem}>
                  <div className={styles.certIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                  </div>
                  <div>
                    <div className={styles.certName}>{c.name}</div>
                    <div className={styles.certMeta}>{c.issuer} · {c.id}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.education}>
              <div className={styles.eduItem}>
                <div className={styles.eduIcon}>🎓</div>
                <div>
                  <div className={styles.eduDegree}>B.Tech — Computer Science & Engineering</div>
                  <div className={styles.eduMeta}>SRM University, Chennai · 2019 · CGPA 9.01 / 10</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <h3 className={styles.skillsTitle}>Technical Skills</h3>
            <div className={styles.skillGroups}>
              {SKILLS.map((group, i) => (
                <div key={i} className={styles.skillGroup}>
                  <div className={styles.groupLabel}>{group.category}</div>
                  <div className={styles.chips}>
                    {group.items.map((item, j) => (
                      <span key={j} className={`badge ${colorMap[group.color]}`}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.accolades}>
              <h3 className={styles.skillsTitle} style={{ marginBottom: '16px' }}>Recognition</h3>
              {[
                { icon: '⚡', title: 'Impact Award', text: 'Recognized for unlocking digital capabilities as a key part of a major Mu Sigma engagement.' },
                { icon: '💡', title: 'Spot Award', text: 'Awarded for out-of-box thinking that solved a critical problem faster than agreed timelines.' },
                { icon: '🏆', title: 'Executive Recognition', text: 'Acknowledged at Impact Analytics for strong product health and contribution to InventorySmart\'s growth.' },
              ].map((a, i) => (
                <div key={i} className={styles.accoladeItem}>
                  <span className={styles.accoladeEmoji}>{a.icon}</span>
                  <div>
                    <div className={styles.accoladeTitle}>{a.title}</div>
                    <div className={styles.accoladeText}>{a.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
