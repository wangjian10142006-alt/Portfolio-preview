import Reveal from '../Reveal/Reveal';
import styles from './Projects.module.css';

export default function Projects({ id, projects }) {
  return (
    <section id={id} className={styles.section} aria-labelledby="work-heading">
      <div className={styles.inner}>
        <Reveal>
          <h2 id="work-heading" className={styles.heading}>代表作品</h2>
          <p className={styles.lede}>
            点击视频即可在线观看，无需跳转。
          </p>
        </Reveal>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 130} className={styles.cell}>
              <article
                className={styles.card}
                style={{ '--a': p.tint[0], '--b': p.tint[1] }}
              >
                <div className={styles.media}>
                  {p.video ? (
                    <video
                      className={styles.video}
                      src={p.video}
                      poster={p.poster || undefined}
                      controls
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <div className={styles.placeholder}>视频待补充</div>
                  )}
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
