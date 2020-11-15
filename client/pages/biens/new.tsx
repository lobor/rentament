import { Form, Select, Tabs, Card, Space, Input, Button, InputNumber } from 'antd';
import * as React from 'react';

const NewBiens = () => {
  return (
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
          <Form
            labelCol={{ span: 9 }}
            wrapperCol={{ md: { span: 8 }, sm: { span: 15 }, xs: { span: 24 } }}
          >
            <Space direction="vertical" style={{ width: '100%' }}>
              <Card title="Informations générales" bordered={false}>
                <Form.Item name="ownerId" label="Propriétaire" rules={[{ required: true }]}>
                  <Select>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="disabled" disabled>
                      Disabled
                    </Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="type" label="Type du bien" rules={[{ required: true }]}>
                  <Select>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="disabled" disabled>
                      Disabled
                    </Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="identifiant" label="Identifiant" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Card>
              <Card title="Adresse" bordered={false}>
                <Form.Item name="address" label="Adresse" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="address2" label="Adresse 2">
                  <Input />
                </Form.Item>
                <Form.Item name="batiment" label="Bâtiment">
                  <Input />
                </Form.Item>
                <Form.Item name="escalier" label="Escalier">
                  <Input />
                </Form.Item>
                <Form.Item name="floor" label="Etage">
                  <InputNumber />
                </Form.Item>
                <Form.Item name="number" label="Numéro">
                  <Input />
                </Form.Item>
                <Form.Item name="city" label="Ville" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="zipCode" label="Code postale" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Card>
              <Card title="Description" bordered={false}>
                <Form.Item
                  name="superficie"
                  label={
                    // eslint-disable-next-line react/jsx-wrap-multilines
                    <>
                      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                      Superficie m<sup>2</sup>
                    </>
                  }
                >
                  <Input />
                </Form.Item>
                <Form.Item name="nbRoom" label="Nombre de pièces">
                  <Select>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="disabled" disabled>
                      Disabled
                    </Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="nbBedRoom" label="Nombre de chambres">
                  <Select>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="disabled" disabled>
                      Disabled
                    </Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="nbBathroom" label="Nombre de salle de bain">
                  <Select>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="disabled" disabled>
                      Disabled
                    </Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="description" label="Description">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item name="note" label="Note">
                  <Input.TextArea />
                </Form.Item>
              </Card>
            </Space>
          </Form>
        </Card>
      </Tabs.TabPane>
    </Tabs>
  );
};

NewBiens.title = 'Nouveau bien';

export default NewBiens;
