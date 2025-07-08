import React, { useState } from 'react';
import CampaignsHeader from '../../features/CampaignsHeader';
import CampaignsTable from '../../features/CampaignsTable';
import CreateCampaignModal from '../../features/CreateCampaignModal';
import styles from './CampaignsPage.module.scss';

const CampaignsPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCreateNew = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.page}>
      <CampaignsHeader onCreateNew={handleCreateNew} />
      <div className={styles.container}>
        <CampaignsTable />
      </div>
      <CreateCampaignModal
        visible={isModalVisible}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default CampaignsPage; 