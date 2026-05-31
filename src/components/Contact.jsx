import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

// ─────────────────────────────────────────────────────────────
// EMAILJS SETUP (replace these with your actual values):
//   1. Sign up free at https://www.emailjs.com
//   2. Add Email Service → connect your Gmail
//   3. Create an Email Template with these variables:
//        {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//   4. Paste your Service ID, Template ID, and Public Key below
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_e8ynv8b'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_unh2zrk'  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'Jg0Dsm3bx7IwwUF_l'   // e.g. 'abcDEF123...'

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
    label: 'Email',
    value: 'h3108.agrawal@gmail.com',
    href: 'mailto:h3108.agrawal@gmail.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    label: 'Location',
    value: 'Bengaluru, India',
    href: null,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/imharsha',
    href: 'https://www.linkedin.com/in/imharsha/',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
    ),
    label: 'GitHub',
    value: 'github.com/imharshagrawal',
    href: 'https://github.com/imharshagrawal',
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className={styles.section}>

      <div className={styles.orb} aria-hidden="true" />

      <div className="container">
        <div className={styles.grid}>
          {/* Left: info */}
          <div className={styles.left}>
            <span className="section-eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Contact
            </span>
            <h2 className="section-title">
              Let's Work<br />
              <span className="gradient-text">Together</span>
            </h2>
            <p className={styles.sub}>
              Have a project, role, or collaboration in mind? Fill in the form and your message lands directly in my Gmail inbox — no middleman, no delays.
            </p>

            <div className={styles.contactList}>
              {CONTACT_ITEMS.map((item, i) => (
                <div key={i} className={styles.contactItem}>
                  <div className={styles.contactIcon}>{item.icon}</div>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className={styles.contactValue} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.contactValue}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.emailNote}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Messages delivered via EmailJS — zero backend needed
            </div>
          </div>

          {/* Right: form */}
          <div className={styles.right}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Send a message</h3>
                <p className={styles.formSub}>I typically respond within 24 hours.</p>
              </div>

              {status === 'success' && (
                <div className={styles.successBanner}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Message sent! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className={styles.errorBanner}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  Something went wrong. Please try emailing directly.
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate className={styles.form}>
                <div className={styles.formRow}>
                  <div className="form-field">
                    <label className="form-label" htmlFor="name">Full name</label>
                    <input
                      id="name" 
                      name="name" 
                      type="text"
                      className="form-input"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className={styles.fieldError}>{errors.name}</span>}
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input
                      id="email" 
                      name="email" 
                      type="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    id="subject" 
                    name="subject" 
                    type="text"
                    className="form-input"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <span className={styles.fieldError}>{errors.subject}</span>}
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message" 
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me about your project, opportunity, or just say hi..."
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className={styles.fieldError}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className={styles.spinner} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                      Send message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
