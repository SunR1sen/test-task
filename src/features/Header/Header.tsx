import React, { useState } from 'react';
import HeaderNav from '../../components/HeaderNav';
import styles from './Header.module.scss';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🅰️</span>
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