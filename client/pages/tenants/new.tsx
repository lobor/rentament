import { Form, Select, Tabs, Card, Space, Input, Button, DatePicker, Switch } from 'antd';
import * as React from 'react';

const NewLocataire = () => {
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
              <Card title="Types" bordered={false}>
                <Form.Item name="type" label="Type de locataire">
                  <Select>
                    <Select.Option value="particulier">Particulier</Select.Option>
                    {/* <Select.Option value="lucy">Société / Autre</Select.Option> */}
                  </Select>
                </Form.Item>
              </Card>
              <Card title="Informations personnelles" bordered={false}>
                <Form.Item name="civility" label="Civilité" rules={[{ required: true }]}>
                  <Select>
                    <Select.Option value="mlle">Mlle</Select.Option>
                    <Select.Option value="mme">Mme</Select.Option>
                    <Select.Option value="m">M.</Select.Option>
                    <Select.Option value="m&mme">M. et Mme</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="firstName" label="Prénom" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="lastName" label="Nom" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="dateBirthday" label="Date de naissances">
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="cityBirth" label="Lieu de naissance">
                  <Input />
                </Form.Item>
              </Card>
              <Card title="Pièce d'identité" bordered={false}>
                <Form.Item name="idtype" label="Type">
                  <Select>
                    <Select.Option value="id">Carte didentité</Select.Option>
                    <Select.Option value="passport">Passeport</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="idNumber" label="Numéro">
                  <Input />
                </Form.Item>
                <Form.Item name="idExpired" label="Expiration">
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
              </Card>
              <Card title="Information de contact" bordered={false}>
                <Form.Item name="email" label="Email">
                  <Input />
                </Form.Item>
                <Form.Item name="sendInvite" label="Invitation">
                  <Switch />
                </Form.Item>
                <Form.Item name="phone" label="Téléphone">
                  <Input />
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
              <Card title="Situation professionnelle" bordered={false}>
                <Form.Item name="profession" label="Profession locataire">
                  <Input />
                </Form.Item>
                <Form.Item name="revenus" label="Revenus">
                  <Input />
                </Form.Item>
                <Form.Item name="situationProf" label="Situation professionnelle">
                  <Input />
                </Form.Item>
              </Card>
              <Card title="Situation professionnelle" bordered={false}>
                <Form.Item name="employer" label="Employeur">
                  <Input />
                </Form.Item>
                <Form.Item name="employerAddress" label="Adresse">
                  <Input />
                </Form.Item>
                <Form.Item name="employerPhone" label="Téléphone">
                  <Input />
                </Form.Item>
              </Card>
              <Card title="Informations complémentaires" bordered={false}>
                <Form.Item name="comments" label="Commentaires">
                  <Input.TextArea />
                </Form.Item>
              </Card>
            </Space>
          </Card>
        </Tabs.TabPane>
      </Tabs>
    </Form>
  );
};

NewLocataire.title = 'Nouveau locataire';

export default NewLocataire;
