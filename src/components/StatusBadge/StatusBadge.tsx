import React from 'react';
import { Tag } from 'antd';
import type { CampaignStatus } from '../../types/campaign';
import styles from './StatusBadge.module.scss';

interface StatusBadgeProps {
  status: CampaignStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusConfig = (status: CampaignStatus) => {
    switch (status) {
      case 'active':
        return {
          color: 'success',
          text: 'Active'
        };
      case 'paused':
        return {
          color: 'error',
          text: 'Paused'
        };
      case 'warning':
        return {
          color: 'warning',
          text: 'Warning'
        };
      default:
        return {
          color: 'default',
          text: 'Unknown'
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <Tag 
      color={config.color}
      className={styles.statusBadge}
    >
      {config.text}
    </Tag>
  );
};

export default StatusBadge; 