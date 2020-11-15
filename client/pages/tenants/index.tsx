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

const tenantsQuery = gql`
  query tenants {
    tenants {
      id
      firstName
      lastName
    }
  }
`;
const Tenants = () => {
  const { data, loading, error } = useQuery(tenantsQuery);
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {error && <Alert message={error.message} type="error" />}
      <Table columns={columns} loading={loading} dataSource={data?.tenants} />
    </Space>
  );
};

const ActionNew = () => {
  return (
    <Link href="/tenants/new">
      <Button type="primary">Nouveau locataire</Button>
    </Link>
  );
};

Tenants.title = 'Tenants';
Tenants.extra = [<ActionNew key="newLocataire" />];

export default Tenants;
