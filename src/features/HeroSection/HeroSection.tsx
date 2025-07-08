import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.heroContent}>
      <div className={styles.heroTextCol}>
        <h1 className={styles.title}>
          The first crypto & bitcoin<br />advertising network in<br />the market
        </h1>
        <p className={styles.subtitle}>
          Skyrocket your publisher earnings with our game-changing<br />traffic monetization solution
        </p>
      </div>
      <div className={styles.statsCol}>
        <div className={styles.statsRow}>
          <div className={styles.statBlock}>
            <div className={styles.statLabel}>Impressions/day</div>
            <div className={styles.statValue}>229 M <span className={styles.statUp}>↑ 1.78%</span></div>
            <div className={styles.statDesc}>8.3M unique IPs</div>
          </div>
          <div className={styles.statBlock}>
            <div className={styles.statLabel}>Active ad units</div>
            <div className={styles.statValue}>8796 K <span className={styles.statDown}>↓ 1.78%</span></div>
            <div className={styles.statDesc}>over 6K publishers</div>
          </div>
          <div className={styles.statBlock}>
            <div className={styles.statLabel}>Publishers earn/month</div>
            <div className={styles.statValue}>$1000 <span className={styles.statUp}>↑ 3.17%</span></div>
            <div className={styles.statDesc}>from 408 ad campaigns</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection; 