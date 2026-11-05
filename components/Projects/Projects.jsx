'use client';

import { useState } from 'react';
import Reveal from '../Reveal/Reveal';
import styles from './Projects.module.css';

function ProjectCard({ p, delay }) {
  const [active, setActive] = useState(0);
  const videos = p.videos || [];
  const current = videos[active];

  return (
    <Reveal delay={delay} className={styles.cell}>
      <article
        className={styles.card}
        style={{ '--a': p.tint[0], '--b': p.tint[1] }}
      >
        <div className={styles.media}>
          {current ? (
            <video
              key={current.src}
              className={styles.video}
              src={current.src}
              poster={current.poster || undefined}
              controls
              playsInline
              preload="metadata"
            />
          ) : (
            <div className={styles.placeholder}>视频待补充</div>
          )}
          {current && current.role && (
            <span className={styles.roleBadge}>职位：{current.role}</span>
          )}
        </div>
        {videos.length > 1 && (
          <div className={styles.tabs}>
            {videos.map((v, i) => (
              <button
                key={v.src}
                type="button"
                className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
              >
                {v.title}
              </button>
            ))}
            <span className={styles.tabHint}>⇄ 点击切换</span>
          </div>
        )}
        <div className={styles.body}>
          <h3 className={styles.name}>{p.name}</h3>
          <p className={styles.kind}>{p.kind}</p>
          <p className={styles.description}>{p.description}</p>
          <ul className={styles.stack}>
            {p.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects({ id, projects }) {
  return (
    <section id={id} className={styles.section} aria-labelledby="work-heading">
      <div className={styles.inner}>
        <Reveal>
          <h2 id="work-heading" className={styles.heading}>代表作品</h2>
          <p className={styles.lede}>
            每个分类下含多个作品，点击标签即可切换观看。
          </p>
        </Reveal>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} delay={i * 130} />
          ))}
        </div>
      </div>
    </section>
  );
}
