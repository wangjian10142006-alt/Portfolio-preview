import Reveal from '../Reveal/Reveal';
import styles from './Sections.module.css';

export default function Skills({ skills, coreValues }) {
  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-h">
      <div className={styles.inner}>
        <Reveal>
          <h2 id="skills-h" className={styles.title}>技能</h2>
          <p className={styles.lede}>拍摄器材、后期制作与工作流程。</p>
        </Reveal>
        <div className={styles.skillGrid}>
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={(i % 3) * 120} className={styles.panel}>
              <h3 className={styles.panelTitle}>{g.group}</h3>
              <ul className={styles.chips}>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {coreValues && coreValues.length > 0 && (
          <div className={styles.coreSection}>
            <Reveal>
              <h3 className={styles.coreTitle}>核心价值</h3>
            </Reveal>
            <div className={styles.coreGrid}>
              {coreValues.map((c, i) => (
                <Reveal key={c.title} delay={i * 120} className={styles.coreCard}>
                  <h4 className={styles.coreCardTitle}>{c.title}</h4>
                  <p className={styles.coreCardDesc}>{c.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
