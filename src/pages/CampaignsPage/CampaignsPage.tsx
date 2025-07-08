import React, { useState } from 'react';
import HeroSection from '../../features/HeroSection';
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
      <div className={styles.container}>
        <HeroSection />
        <CampaignsHeader onCreateNew={handleCreateNew} />
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