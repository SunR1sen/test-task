import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerNavSection}>
      <ul className={styles.footerMenu}>
        <li>Advertise</li>
        <li>Earn</li>
        <li>Marketplace</li>
        <li>Stats</li>
      </ul>
    </div>
    <div className={styles.footerBottomSection}>
      <div className={styles.footerCopyright}>
        © A-ADS 2011-2025
      </div>
      <div className={styles.footerLinks}>
        <a href="#" className={styles.footerLink}>Terms of Service</a>
        <a href="#" className={styles.footerLink}>Privacy Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer; 