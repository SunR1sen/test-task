import React from 'react';
import HeaderNav from '../../components/HeaderNav';
import styles from './Header.module.scss';

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.headerContent}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>🅰️</span>
        <span className={styles.logoText}>ADS</span>
      </div>
      <HeaderNav />
    </div>
  </header>
);

export default Header; 