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
        <div className={styles.stats}>
          <div className={styles.statBlock}>
            <div className={styles.statBlockLeft}>
              <div className={styles.statLabel}>Impressions/day</div>
              <div className={styles.statDesc}>8.3M unique IPs</div>
            </div>
            <div className={styles.statBlockRight}>
              <div className={styles.statValue}>
                <span className={styles.statValueNumber}>229 M</span>
                <span className={styles.statUp}>↑</span>
                <span className={styles.statValuePercentage}>1.78%</span>
              </div>
            </div>
          </div>
          <div className={styles.statBlock}>
            <div className={styles.statBlockLeft}>
              <div className={styles.statLabel}>Active ad units</div>
              <div className={styles.statDesc}>over 6K publishers</div>
            </div>
            <div className={styles.statBlockRight}>
              <div className={styles.statValue}>
                <span className={styles.statValueNumber}>8796 K</span>
                <span className={styles.statDown}>↓</span>
                <span className={styles.statValuePercentage}>1.78%</span>
              </div>
            </div>
          </div>
          <div className={styles.statBlock}>
            <div className={styles.statBlockLeft}>
              <div className={styles.statLabel}>Publishers earn/month</div>
              <div className={styles.statDesc}>from 408 ad campaigns</div>
            </div>
            <div className={styles.statBlockRight}>
              <div className={styles.statValue}>
                <span className={styles.statValueNumber}>$1000</span>
                <span className={styles.statUp}>↑</span>
                <span className={styles.statValuePercentage}>3.17%</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
);

export default HeroSection; 