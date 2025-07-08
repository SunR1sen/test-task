import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './CampaignsHeader.module.scss';

interface CampaignsHeaderProps {
  onCreateNew: () => void;
}

const CampaignsHeader: React.FC<CampaignsHeaderProps> = ({ onCreateNew }) => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>Campaigns</h1>
        <Button
          type="default"
          icon={<PlusOutlined />}
          onClick={onCreateNew}
          size="large"
        >
          Create new campaign
        </Button>
      </div>
    </div>
  );
};

export default CampaignsHeader; 