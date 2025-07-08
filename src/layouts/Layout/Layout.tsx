import React from 'react';
import Header from '../../features/Header';
import styles from './Layout.module.scss';
import Footer from '../../components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

export default Layout; 