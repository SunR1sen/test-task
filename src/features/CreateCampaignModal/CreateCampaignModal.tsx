import React, { useState } from 'react';
import { Modal, Form, Input, Select, Checkbox, Button, message } from 'antd';
import type { CreateCampaignData, CampaignTag } from '../../types/campaign';
import { useCampaignsStore } from '../../store/campaignsStore';
import styles from './CreateCampaignModal.module.scss';

interface CreateCampaignModalProps {
  visible: boolean;
  onClose: () => void;
}

const languageOptions = [
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
  { label: 'German', value: 'de' },
];

const tagOptions: { label: string; value: CampaignTag }[] = [
  { label: 'Gambling', value: 'gambling' },
  { label: 'Investments', value: 'investments' },
  { label: 'Adults (18+)', value: 'adults' },
  { label: 'Risky Project', value: 'risky' },
];

const CreateCampaignModal: React.FC<CreateCampaignModalProps> = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { addCampaign } = useCampaignsStore();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      const campaignData: CreateCampaignData = {
        name: values.name,
        status: 'active',
        language: values.language,
        tags: values.tags || [],
      };
      addCampaign(campaignData);
      message.success('Campaign created successfully!');
      form.resetFields();
      onClose();
    } catch {}
    finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Create New Campaign"
      open={visible}
      onOk={handleSubmit}
      onCancel={handleCancel}
      confirmLoading={loading}
      width={480}
      className={styles.modal}
      footer={null}
      destroyOnHidden={true}
    >
      <Form form={form} layout="vertical" className={styles.form} requiredMark={false}>
        <Form.Item
          name="name"
          label="Campaign name"
          rules={[
            { required: true, message: 'Please enter campaign name' },
            { min: 3, message: 'Campaign name must be at least 3 characters' },
          ]}
        >
          <Input placeholder="Campaign name" maxLength={64} />
        </Form.Item>
        <Form.Item
          name="language"
          label="Language"
          rules={[{ required: true, message: 'Please select language' }]}
        >
          <Select placeholder="Choose language" options={languageOptions} />
        </Form.Item>
        <div className={styles.ratingsLabel}>Ratings</div>
        <div className={styles.checkboxGroup}>
          <Checkbox.Group>
            {tagOptions.map((tag) => (
              <Checkbox key={tag.value} value={tag.value} style={{ marginRight: 24 }}>
                {tag.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </div>
        <div className={styles.formButtons}>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="primary" onClick={handleSubmit} loading={loading} htmlType="submit">
            Create Campaign
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default CreateCampaignModal; 