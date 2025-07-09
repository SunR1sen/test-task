import React from 'react';
import type { Campaign } from '../../types/campaign';
import StatusBadge from '../../components/StatusBadge';
import DeleteButton from '../../components/DeleteButton';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import styles from './MobileCampaignCard.module.scss';

interface MobileCampaignCardProps {
  campaign: Campaign;
  onDelete: (id: string) => void;
  isActive?: boolean;
}

export const MobileCampaignHeader: React.FC<{ 
  campaign: Campaign; 
  isActive?: boolean;
}> = ({ campaign, isActive = false }) => (
  <div className={styles.mobileHeader}>
    <div className={styles.headerTextBlock}>
      <span className={styles.mobileName}>{campaign.name}</span>
      <StatusBadge status={campaign.status} />
    </div>
    <RightOutlined className={`${styles.expandIcon} ${isActive ? styles.expanded : ''}`} />
  </div>
);

const MobileCampaignCard: React.FC<MobileCampaignCardProps> = ({ campaign, onDelete }) => {
  return (
    <div className={styles.body}>
      <div className={styles.infoRow}>
        <b>Payment model</b>
        <span className={styles.value}>
          CPD: <a href="#" className={styles.paymentLink}>0.00067627 ฿</a>
        </span>
      </div>
      <div className={styles.infoRow}>
        <b>Spendings</b>
        <span className={styles.value}>$43.12</span>
      </div>
      <div className={styles.infoRow}>
        <b>Impressions</b>
        <span className={styles.value}>123 456</span>
      </div>
      <div className={styles.infoRow}>
        <b>Clicks</b>
        <span className={styles.value}>9 456</span>
      </div>
      <div className={styles.infoRow}>
        <b>CTR</b>
        <span className={styles.value}>0.5%</span>
      </div>
      <div className={styles.actionRow}>
        <Button type="default" className={styles.goBtn}>
          Go to Campaign Page
        </Button>
        <DeleteButton onDelete={() => onDelete(campaign.id)} />
      </div>
    </div>
  );
};

export default MobileCampaignCard; 