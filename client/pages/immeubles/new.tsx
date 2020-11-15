import { Form, Tabs, Card, Space, Input, Button, DatePicker } from 'antd';
import * as React from 'react';

const LabelSuperficie = () => (
  <>
    {/* eslint-disable-next-line */}
    Superficie m<sup>2</sup>
  </>
);
const NewImmeuble = () => {
  return (
    <Form
      labelCol={{ span: 9 }}
      wrapperCol={{ md: { span: 8 }, sm: { span: 15 }, xs: { span: 24 } }}
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
              <Card title="Informations générales" bordered={false}>
                <Form.Item name="identifiant" label="Identifiant" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="address" label="Adresse">
                  <Input />
                </Form.Item>
                <Form.Item name="city" label="Ville">
                  <Input />
                </Form.Item>
                <Form.Item name="zipCode" label="Code postale">
                  <Input />
                </Form.Item>
              </Card>
              <Card title="Description" bordered={false}>
                <Form.Item name="superficie" label={<LabelSuperficie />}>
                  <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item name="note" label="Note">
                  <Input.TextArea />
                </Form.Item>
              </Card>
            </Space>
          </Card>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Informations complémentaires" key="2">
          <Card
            bodyStyle={{ paddingTop: 0, paddingBottom: 0 }}
            actions={[
              <Button type="primary" htmlType="submit">
                Submit
              </Button>,
            ]}
          >
            <Space direction="vertical" style={{ width: '100%' }}>
              <Card title="Informations financières" bordered={false}>
                <Form.Item name="taxFonciere" label="Taxe foncière">
                  <Input prefix="€" type="number" />
                </Form.Item>
                <Form.Item name="boughtAt" label="Date d'acquisition">
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="buyingPrice" label="Prix d'acquisition">
                  <Input prefix="€" type="number" />
                </Form.Item>
                <Form.Item name="acquisitionFee" label="Frais d'acquisition">
                  <Input prefix="€" type="number" />
                </Form.Item>
              </Card>
            </Space>
          </Card>
        </Tabs.TabPane>
      </Tabs>
    </Form>
  );
};

NewImmeuble.title = 'Nouvel immeuble';

export default NewImmeuble;
