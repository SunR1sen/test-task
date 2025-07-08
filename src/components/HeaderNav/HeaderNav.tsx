import React from 'react';
import styles from './HeaderNav.module.scss';
import { Divider } from 'antd';

interface HeaderNavProps {
  vertical?: boolean;
  footer?: boolean;
}

const menuItems = [
  'Advertise',
  'Earn',
  'Marketplace',
  'Stats',
];

const HeaderNav: React.FC<HeaderNavProps> = ({ vertical, footer }) => {
  if (footer) {
    return (
      <nav className={styles.footerNav}>
        <ul className={styles.footerMenu}>
          {menuItems.map(item => <li key={item}>{item}</li>)}
        </ul>
      </nav>
    );
  }
  return (
    <nav className={styles.headerNav}>
      {vertical ? (
        <ul className={styles.menuVertical}>
          {menuItems.map((item, idx) => (
            <React.Fragment key={item}>
              <li>{item}</li>
              {idx < menuItems.length - 1 && <Divider style={{ margin: '8px 0', background: '#e5e5e5' }} />}
            </React.Fragment>
          ))}
        </ul>
      ) : (
        <ul className={styles.menu}>
          {menuItems.map(item => <li key={item}>{item}</li>)}
        </ul>
      )}
    </nav>
  );
};

export default HeaderNav; 