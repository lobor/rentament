import { Form, Select, Tabs, Card, Space, Input, Button, DatePicker, Switch, Checkbox } from 'antd';
import * as React from 'react';

const days = Array.from(Array(32).keys());
days.shift();
const NewLease = () => {
  return (
    <Form
      labelCol={{ span: 9 }}
      wrapperCol={{ md: { span: 8 }, sm: { span: 15 }, xs: { span: 24 } }}
      initialValues={{}}
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
              <Card title="Bien loué" bordered={false}>
                <Form.Item name="propertyId" label="Bien" required>
                  <Select>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                  </Select>
                </Form.Item>
              </Card>
              <Card title="Détails de la location" bordered={false}>
                <Form.Item name="type" label="Type" required>
                  <Select>
                    <Select.Option value="empty">Bail dhabitation vide</Select.Option>
                    <Select.Option value="furniture">Bail dhabitation meublé</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="startedAt" label="Début du bail" required>
                  <DatePicker />
                </Form.Item>
                <Form.Item name="endedAt" label="Fin du bail">
                  <DatePicker />
                </Form.Item>
                <Form.Item name="autoRenew" label="Renouvellement">
                  <Switch defaultChecked />
                </Form.Item>
                <Form.Item name="billingPeriod" label="Paiement" required>
                  <Select>
                    <Select.Option value="monthly">Mensuel</Select.Option>
                    <Select.Option value="year">Annuel</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="dayToBePaid" label="Date de paiement">
                  <Select>
                    {days.map((i) => (
                      <Select.Option key={i} value={i}>
                        {i}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Card>
              <Card title="Loyer" bordered={false}>
                <Form.Item name="rentHc" label="Loyer hors charges" required>
                  <Input prefix="€" />
                </Form.Item>
                <Form.Item name="maintenance" label="Charges">
                  <Input prefix="€" />
                </Form.Item>
                <Form.Item name="monthlyAmount" label="Loyer charges comprises" required>
                  <Input prefix="€" disabled />
                </Form.Item>
              </Card>
              <Card title="Première quittance" bordered={false}>
                <Form.Item
                  name="firstBill"
                  label="Cocher la case en cas de premier loyer au prorata"
                >
                  <Checkbox />
                </Form.Item>
                <Form.Item name="firstBillEndDate" label="Date fin de périodes">
                  <DatePicker />
                </Form.Item>
                <Form.Item name="firstBillAmount" label="Loyer HC">
                  <Input prefix="€" />
                </Form.Item>
                <Form.Item name="firstBillCharges" label="Charges">
                  <Input prefix="€" />
                </Form.Item>
              </Card>
              <Card title="Dépôt de garantie" bordered={false}>
                <Form.Item name="securityDeposit" label="Dépôt de garantie" required>
                  <Input prefix="€" />
                </Form.Item>
              </Card>
              <Card title="Allocations logement" bordered={false}>
                <Form.Item name="paymentCafAmount" label="Paiement CAF / APL" required>
                  <Input prefix="€" />
                </Form.Item>
              </Card>
              <Card title="Locataire" bordered={false}>
                <Form.Item name="tenantId" label="Locataire" required>
                  <Select>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                  </Select>
                </Form.Item>
              </Card>
            </Space>
          </Card>
        </Tabs.TabPane>
      </Tabs>
    </Form>
  );
};

NewLease.title = 'New lease';

export default NewLease;
