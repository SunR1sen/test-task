import React, { useState } from 'react';
import HeaderNav from '../../components/HeaderNav';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../assets/aads-logo.svg';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src={logo} alt="AADS Logo" className={styles.logoIcon}/>
          <span className={styles.logoText}>ADS</span>
        </div>
        <div className={styles.desktopNav}>
          <HeaderNav />
        </div>
        <Button
          className={styles.burger}
          type="text"
          icon={<MenuOutlined style={{ fontSize: 28 }} />}
          onClick={() => setDrawerOpen(true)}
        />
        <Drawer
          placement="right"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          width={240}
          bodyStyle={{ padding: 0 }}
        >
          <HeaderNav vertical />
        </Drawer>
      </div>
    </header>
  );
};

export default Header; 