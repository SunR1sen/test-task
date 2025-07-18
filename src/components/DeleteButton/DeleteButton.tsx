import React from 'react';
import { Button, Popconfirm } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import styles from './DeleteButton.module.scss';

interface DeleteButtonProps {
  onDelete: () => void;
  title?: string;
  description?: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ 
  onDelete, 
  title = 'Delete Campaign',
  description = 'Are you sure you want to delete this campaign?'
}) => {
  return (
    <Popconfirm
      title={title}
      description={description}
      onConfirm={onDelete}
      okText="Yes"
      cancelText="No"
      placement="left"
    >
      <Button
        type="text"
        icon={<DeleteTwoTone twoToneColor="#00acfb" />}
        className={styles.deleteButton}
        danger={false}
      />
    </Popconfirm>
  );
};

export default DeleteButton; 