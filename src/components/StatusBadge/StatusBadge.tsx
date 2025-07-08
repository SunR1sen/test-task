import React from 'react';
import type { CampaignStatus } from '../../types/campaign';
import styles from './StatusBadge.module.scss';

interface StatusBadgeProps {
  status: CampaignStatus;
}

const statusColorMap = {
  active: styles.active,
  paused: styles.paused,
  warning: styles.warning,
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const colorClass = statusColorMap[status] || styles.unknown;
  const text = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
  return (
    <span className={`${styles.statusBadge} ${colorClass}`}>{text}</span>
  );
};

export default StatusBadge; 