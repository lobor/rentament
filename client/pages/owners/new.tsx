import { Form, Select, Tabs, Card, Space, Input, Button, DatePicker, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import * as React from 'react';

const NewOwner = () => {
  return (
    <Form
      labelCol={{ span: 9 }}
      wrapperCol={{ md: { span: 8 }, sm: { span: 15 }, xs: { span: 24 } }}
      initialValues={{ type: 'particulier' }}
    >
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Informations générales" key="1">
          <Card
            bodyStyle={{ paddingTop: 0, paddingBottom: 0 }}
            actions={[
              <Button type="primary" htmlType="submit">
                Submit
              </Button>,
            ]}
          >
            <Space direction="vertical" style={{ width: '100%' }}>
              <Card title="Type" bordered={false}>
                <Form.Item name="type" label="Type de locataire">
                  <Select>
                    {/* <Select.Option value="particular">Particulier</Select.Option> */}
                    <Select.Option value="company">Société</Select.Option>
                  </Select>
                </Form.Item>
              </Card>
              <Card title="Informations société" bordered={false}>
                <Form.Item name="name" label="Société" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="vat" label="Numéro de TVA" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="siret" label="Numéro de siret">
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
              </Card>
              <Card title="Associés" bordered={false}>
                <Form.List name="users">
                  {(fields, { add, remove }) => (
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        {fields.map((field) => (
                          <Row
                            style={{
                              display: 'flex',
                              border: '1px dashed #d9d9d9',
                              padding: '10px',
                            }}
                          >
                            <Col span="4">
                              <Form.Item
                                {...field}
                                name={[field.name, 'userId']}
                                label="Associé"
                                style={{ marginBottom: 0 }}
                              >
                                <Select>
                                  <Select.Option value="new">Créer un nouveau</Select.Option>
                                  <Select.Option value="company">Lionel Bertrand</Select.Option>
                                </Select>
                              </Form.Item>
                            </Col>
                            <Col span="4">
                              <Form.Item
                                {...field}
                                name={[field.name, 'type']}
                                label="Type"
                                style={{ marginBottom: 0 }}
                              >
                                <Select>
                                  {/* <Select.Option value="particular">Particulier</Select.Option> */}
                                  <Select.Option value="company">Société</Select.Option>
                                </Select>
                              </Form.Item>
                            </Col>
                            <Col span="4">
                              <Form.Item
                                {...field}
                                name={[field.name, 'lastName']}
                                label="Nom"
                                rules={[{ required: true }]}
                                style={{ marginBottom: 0 }}
                              >
                                <Input />
                              </Form.Item>
                            </Col>
                            <Col span="4">
                              <Form.Item
                                {...field}
                                name={[field.name, 'firstName']}
                                label="Prénom"
                                rules={[{ required: true }]}
                                style={{ marginBottom: 0 }}
                              >
                                <Input />
                              </Form.Item>
                            </Col>
                            <Col span="4">
                              <Form.Item
                                {...field}
                                name={[field.name, 'percent']}
                                label="Participation"
                                rules={[{ required: true }]}
                                style={{ marginBottom: 0 }}
                              >
                                <Input />
                              </Form.Item>
                            </Col>
                            {/* <Form.Item
                            {...field}
                            name={[field.name, 'first']}
                            fieldKey={[field.fieldKey, 'first']}
                            rules={[{ required: true, message: 'Missing first name' }]}
                          >
                            <Input placeholder="First Name" />
                          </Form.Item>
                          <Form.Item
                            {...field}
                            name={[field.name, 'last']}
                            fieldKey={[field.fieldKey, 'last']}
                            rules={[{ required: true, message: 'Missing last name' }]}
                          >
                            <Input placeholder="Last Name" />
                          </Form.Item> */}
                            <Col span="4">
                              <MinusCircleOutlined onClick={() => remove(field.name)} />
                            </Col>
                          </Row>
                        ))}
                      </Space>
                      <Form.Item style={{ justifyContent: 'center' }}>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                          Ajouter un associé
                        </Button>
                      </Form.Item>
                    </Space>
                  )}
                </Form.List>
              </Card>
            </Space>
          </Card>
        </Tabs.TabPane>
      </Tabs>
    </Form>
  );
};

NewOwner.title = 'Nouveau Propriaitaire';

export default NewOwner;
