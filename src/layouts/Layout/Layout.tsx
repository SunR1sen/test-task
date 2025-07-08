import React from 'react';
import Header from '../../features/Header';
import styles from './Layout.module.scss';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>
      <div className={styles.footerContent}>© 2024 AADS</div>
    </footer>
  </div>
);

export default Layout; 