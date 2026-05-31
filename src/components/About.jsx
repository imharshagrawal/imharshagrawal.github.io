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
              I'm a Product Management professional with 7+ years of experience spanning Product Management, Business Analytics, Data Engineering, and Enterprise SaaS. I specialize in building AI-powered products that solve complex supply chain and inventory planning challenges for global retailers.
            </p>
            <p className={styles.bio}>
              Currently, I lead product initiatives for InventorySmart at Impact Analytics, where I own the Ordering product area from discovery and roadmap planning through launch and adoption. My work focuses on translating customer problems into scalable product solutions that drive measurable business outcomes.
            </p>
            <p className={styles.bio}>
              Prior to Product Management, I built a strong foundation in analytics and data engineering across Retail, FinTech, Banking, and Insurance domains. This unique blend of product thinking, technical depth, and business understanding enables me to bridge the gap between customers, engineering teams, and business stakeholders.
            </p>
            <p className={styles.bio}>
              I am passionate about AI-driven decision intelligence, Enterprise SaaS, Supply Chain Technology, Product Strategy, and building products that customers genuinely adopt and love.
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
                { icon: '⚡', title: 'Impact Excellence Award', text: 'For exceptional contribution to Impact Analytics in Q3 2025.' },
                { icon: '⚡', title: 'Impact Award', text: 'Harsh has played a key role in unlocking digital capabilities for the clients as a part of a major Mu Sigma engagement. His resourcefulness and bias for action were instrumental in ensuring project success' },
                { icon: '💡', title: 'Spot Award', text: 'Harsh has shown diligence and strength in taking complete ownership for his work stream. We admire his excellent technical skills, quality work and adherence to deadlines. His contribution and support to the team in tough times was remarkable. Keep up the good work!' },
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
