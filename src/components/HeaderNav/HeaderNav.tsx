import React from 'react';
import styles from './HeaderNav.module.scss';

const HeaderNav: React.FC = () => (
  <nav className={styles.headerNav}>
    <ul className={styles.menu}>
      <li>Advertise</li>
      <li>Earn</li>
      <li>Marketplace</li>
      <li>Stats</li>
    </ul>
  </nav>
);

export default HeaderNav; 