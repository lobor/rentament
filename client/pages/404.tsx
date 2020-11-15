import { Result, Button } from 'antd';
import Link from 'next/link';
import * as React from 'react';

const Extra = () => (
  <Button type="primary">
    <Link href="/">Back Home</Link>
  </Button>
);
const page404 = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Extra />}
    />
  );
};

export default page404;
