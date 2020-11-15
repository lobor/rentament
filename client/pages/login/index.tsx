import * as React from 'react';
import { Space, Row, Col, Card, Form, Input, Button, Checkbox, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      token
    }
  }
`;
const Login = () => {
  const [handleLogin, { loading, error }] = useMutation(loginMutation);
  const router = useRouter();
  const onFinish = async (values) => {
    const { data } = await handleLogin({ variables: values });
    // eslint-disable-next-line no-undef
    window.localStorage.setItem('token', data.login.token);
    router.push('/');
    router.reload();
  };

  return (
    <Row align="middle" justify="center" style={{ height: '100%' }}>
      <Col md={12}>
        <Card title="Login">
          <Space direction="vertical" style={{ width: '100%' }}>
            {error && <Alert message={error.message} type="error" />}
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input
                  type="email"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              {/* <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Form.Item> */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  loading={loading}
                >
                  Log in
                </Button>
              </Form.Item>
              <Row>
                <Col>
                  <Link href="/createAccount">Create an account</Link>
                </Col>
              </Row>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form>
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
