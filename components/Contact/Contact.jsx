'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Reveal from '../Reveal/Reveal';
import styles from './Contact.module.css';

gsap.registerPlugin(ScrollToPlugin);

const Icon = {
  Mail: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 8 6 8-6" />
    </svg>
  ),
  Phone: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),
  Video: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="m23 7-7 5 7 5V7Z" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </svg>
  ),
  Pin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
};

export default function Contact({ id, profile, location }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(profile.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(formRef.current),
      });
      if (res.ok) {
        formRef.current.reset();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus('邮箱已复制。');
    } catch {
      setStatus(`复制失败，我的邮箱是 ${profile.email}。`);
    }
  };

  const toTop = () =>
    gsap.to(window, { duration: 1.6, ease: 'power3.inOut', scrollTo: 0 });

  const cards = [
    { icon: Icon.Mail, label: '邮箱', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Icon.Phone, label: '电话', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: Icon.Pin, label: '所在地', value: location },
  ];

  return (
    <section id={id} className={styles.section} aria-labelledby="contact-h">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.grid}>
          <Reveal className={styles.left}>
            <h2 id="contact-h" className={styles.title}>一起创作影像作品</h2>
            <p className={styles.lede}>
              有宣传片、广告、文艺短片等拍摄需求，欢迎联系，我会尽快回复。
            </p>

            <ul className={styles.cards}>
              {cards.map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      className={styles.card}
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <span className={styles.icon}>{c.icon}</span>
                      <span className={styles.cardText}>
                        <small>{c.label}</small>
                        {c.value}
                      </span>
                    </a>
                  ) : (
                    <div className={styles.card}>
                      <span className={styles.icon}>{c.icon}</span>
                      <span className={styles.cardText}>
                        <small>{c.label}</small>
                        {c.value}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140}>
            <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
              <h3 className={styles.formTitle}>发送消息</h3>
              <label>
                你的名字
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                你的邮箱
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                留言
                <textarea name="message" rows="5" required />
              </label>
              <input
                type="text"
                name="_gotcha"
                className={styles.honeypot}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className={styles.actions}>
                <button
                  type="submit"
                  className={styles.send}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? '发送中...' : '发送'}
                </button>
                <button type="button" className={styles.ghost} onClick={copyEmail}>复制邮箱</button>
              </div>
              <p className={styles.status} role="status" aria-live="polite">
                {status === 'success' && '感谢，消息已发送，我会通过邮箱回复。'}
                {status === 'error' && `发送失败，请直接发邮件到 ${profile.email}。`}
                {status === 'idle' || status === 'sending' ? '' : null}
              </p>
            </form>
          </Reveal>
        </div>

        <footer className={styles.footer}>
          <p>&copy; 2026 {profile.firstName} {profile.lastName}. Built with Next.js, Three.js and GSAP.</p>
          <button type="button" className={styles.top} onClick={toTop}>回到顶部</button>
        </footer>
      </div>
    </section>
  );
}
