import { gql, useQuery } from '@apollo/client';
import { Table, Button, Alert, Space } from 'antd';
import Link from 'next/link';
import * as React from 'react';

const columns = [
  {
    title: 'Last Name',
    dataIndex: 'lastName',
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
  },
];

const ownersQuery = gql`
  query owners {
    owners {
      id
    }
  }
`;
const Owners = () => {
  const { data, loading, error } = useQuery(ownersQuery);
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {error && <Alert message={error.message} type="error" />}
      <Table columns={columns} loading={loading} dataSource={data?.owners} />
    </Space>
  );
};

const ActionNew = () => {
  return (
    <Link href="/owners/new">
      <Button type="primary">Nouveau propriaitaire</Button>
    </Link>
  );
};

Owners.title = 'Owners';
Owners.extra = [<ActionNew key="newOwner" />];

export default Owners;
