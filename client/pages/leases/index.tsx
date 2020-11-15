import { Alert, Button, Space, Table } from 'antd';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import * as React from 'react';

const columns = [
  {
    title: 'Tenant',
    dataIndex: 'tenantId',
  },
  {
    title: 'Property',
    dataIndex: 'propertyId',
  },
];

const leasesQuery = gql`
  query leases {
    leases {
      id
      tenantId
      propertyId
    }
  }
`;

const Leases = () => {
  const { data, loading, error } = useQuery(leasesQuery);
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {error && <Alert message={error.message} type="error" />}
      <Table columns={columns} loading={loading} dataSource={data?.leases} />
    </Space>
  );
};

const ActionNew = () => {
  return (
    <Link href="/leases/new">
      <Button type="primary">New lease</Button>
    </Link>
  );
};

Leases.title = 'Leases';
Leases.extra = [<ActionNew key="newLease" />];

export default Leases;
