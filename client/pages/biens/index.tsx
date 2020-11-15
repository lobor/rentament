import Link from 'next/link';
import { Table, Button, Space, Alert } from 'antd';
import * as React from 'react';
import { gql, useQuery } from '@apollo/client';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
];

const propertiesQuery = gql`
  query properties {
    properties {
      id
      identifiant
    }
  }
`;
const Biens = () => {
  const { data, loading, error } = useQuery(propertiesQuery);
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {error && <Alert message={error.message} type="error" />}
      <Table columns={columns} loading={loading} dataSource={data?.properties} />
    </Space>
  );
};

const ActionNew = () => {
  return (
    <Link href="/biens/new">
      <Button type="primary">Nouveau bien</Button>
    </Link>
  );
};

Biens.title = 'Biens';
Biens.extra = [<ActionNew key="newBien" />];

export default Biens;
