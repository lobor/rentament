import * as React from 'react';
import { gql, useMutation } from '@apollo/client';
import { Form, Input, Row, Col, Checkbox, Button, Card, Alert, Space } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const registerMutation = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      id
      token
    }
  }
`;

const RegistrationForm = () => {
  const [handleRegister, { loading, error }] = useMutation(registerMutation);
  const router = useRouter();
  const onFinish = async (values) => {
    const { data } = await handleRegister({ variables: { input: values } });
    global.localStorage.setItem('token', data.register.token);
    router.push('/');
  };

  return (
    <Row align="middle" justify="center" style={{ height: '100%' }}>
      <Col span={12}>
        <Card title="Create an account">
          <Space direction="vertical">
            {error && <Alert message={error.message} type="error" />}
            <Form {...formItemLayout} name="register" onFinish={onFinish} scrollToFirstError>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="firstName"
                label="First name"
                rules={[
                  {
                    required: true,
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="lastName"
                label="Last name"
                rules={[
                  {
                    required: true,
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('The two passwords that you entered do not match!');
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Register
                </Button>
              </Form.Item>
              <Row>
                <Col>
                  <Link href="/login">Do you have an account ?</Link>
                </Col>
              </Row>
            </Form>
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default RegistrationForm;
