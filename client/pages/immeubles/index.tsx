import { gql, useQuery } from '@apollo/client';
import { Table, Space, Button, Alert } from 'antd';
import Link from 'next/link';
import * as React from 'react';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
];

const buildingsQuery = gql`
  query buildings {
    buildings {
      id
    }
  }
`;
const Immeubles = () => {
  const { data, loading, error } = useQuery(buildingsQuery);
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {error && <Alert message={error.message} type="error" />}
      <Table columns={columns} loading={loading} dataSource={data?.buildings} />
    </Space>
  );
};

const ActionNew = () => {
  return (
    <Link href="/immeubles/new">
      <Button type="primary">Nouvel immeuble</Button>
    </Link>
  );
};

Immeubles.title = 'Immeubles';
Immeubles.extra = [<ActionNew key="newImmeuble" />];

export default Immeubles;
