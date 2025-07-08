import React from 'react';
import { Table, Space, Popover, Collapse } from 'antd';
import type { Campaign } from '../../types/campaign';
import { useCampaignsStore } from '../../store/campaignsStore';
import StatusBadge from '../../components/StatusBadge';
import DeleteButton from '../../components/DeleteButton';
import { MobileCampaignCard, MobileCampaignHeader } from './index';
import { QuestionCircleOutlined, CaretDownOutlined } from '@ant-design/icons';
import styles from './CampaignsTable.module.scss';

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

const popoverText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod.';



const CampaignsTable: React.FC = () => {
  const { getFilteredCampaigns, deleteCampaign } = useCampaignsStore();
  const campaigns = getFilteredCampaigns();
  const isMobile = useIsMobile();
  const [activeKeys, setActiveKeys] = React.useState<string[]>([]);

  if (isMobile) {
    return (
      <div className={styles.mobileCollapseWrapper}>
        <div className={styles.mobileList}>
          <Collapse
            accordion
            bordered={false}
            className={styles.collapse}
            expandIconPosition="end"
            activeKey={activeKeys}
            onChange={(keys) => setActiveKeys(Array.isArray(keys) ? keys : [keys])}
            expandIcon={() => null}
          >
            {campaigns.map((c) => (
              <Collapse.Panel
                key={c.id}
                header={
                  <MobileCampaignHeader 
                    campaign={c} 
                    isActive={activeKeys.includes(c.id)}
                  />
                }
              >
                <MobileCampaignCard campaign={c} onDelete={deleteCampaign} />
              </Collapse.Panel>
            ))}
          </Collapse>
        </div>
      </div>
    );
  }

  const columns = [
    {
      title: <span className={styles.thText}>Campaign <CaretDownOutlined className={styles.triangle} /></span>,
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => (
        <span className={styles.campaignName} tabIndex={0} role="button">
          {text}
        </span>
      ),
    },
    {
      title: <span className={styles.thText}>Status <CaretDownOutlined className={styles.triangle} /></span>,
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => <StatusBadge status={status as any} />,
    },
    {
      title: <span className={styles.thText}>Payment model <CaretDownOutlined className={styles.triangle} /></span>,
      dataIndex: 'paymentModel',
      key: 'paymentModel',
      render: () => (
        <span className={styles.paymentModel}>
          CPD: <a href="#" className={styles.paymentLink}>0.00067627 ฿</a>
        </span>
      ),
    },
    {
      title: (
        <span className={styles.thText}>
          Spendings{' '}
          <Popover content={popoverText} placement="top">
            <QuestionCircleOutlined className={styles.qIcon} />
          </Popover>
          <CaretDownOutlined className={styles.triangle} />
        </span>
      ),
      dataIndex: 'spendings',
      key: 'spendings',
      render: () => <span className={styles.spendings}>$43.12</span>,
    },
    {
      title: (
        <span className={styles.thText}>
          Impressions{' '}
          <Popover content={popoverText} placement="top">
            <QuestionCircleOutlined className={styles.qIcon} />
          </Popover>
          <CaretDownOutlined className={styles.triangle} />
        </span>
      ),
      dataIndex: 'impressions',
      key: 'impressions',
      render: () => <span>123 456</span>,
    },
    {
      title: (
        <span className={styles.thText}>
          Clicks{' '}
          <Popover content={popoverText} placement="top">
            <QuestionCircleOutlined className={styles.qIcon} />
          </Popover>
          <CaretDownOutlined className={styles.triangle} />
        </span>
      ),
      dataIndex: 'clicks',
      key: 'clicks',
      render: () => <span>9 456</span>,
    },
    {
      title: (
        <span className={styles.thText}>
          CTR{' '}
          <Popover content={popoverText} placement="top">
            <QuestionCircleOutlined className={styles.qIcon} />
          </Popover>
          <CaretDownOutlined className={styles.triangle} />
        </span>
      ),
      dataIndex: 'ctr',
      key: 'ctr',
      render: () => <span>0.5%</span>,
    },
    {
      title: '',
      key: 'actions',
      render: (_: any, record: Campaign) => (
        <Space size="small">
          <DeleteButton onDelete={() => deleteCampaign(record.id)} />
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.campaignsTable}>
      <Table
        columns={columns}
        dataSource={campaigns}
        rowKey="id"
        pagination={false}
        className={styles.table}
      />
    </div>
  );
};

export default CampaignsTable; 