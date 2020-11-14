import { Button, Card, Col, Row, Statistic } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";

import {
  // faBuilding,
  // faChartLine,
  // faClipboard,
  // faDesktop,
  faHome,
  faKey,
  faEye,
  // faUniversity,
  faUsers,
  // faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Pie = dynamic(
  () => import("@ant-design/charts").then((mod) => mod.Pie) as any,
  { ssr: false }
);

const data = [
  {
    type: "Classification One",
    value: 27,
  },
  {
    type: "Class 2",
    value: 25,
  },
  {
    type: "Classification Three",
    value: 18,
  },
  {
    type: "Classification Four",
    value: 15,
  },
  {
    type: "Classification Five",
    value: 10,
  },
  {
    type: "Other",
    value: 5,
  },
];
const config = {
  appendPadding: 10,
  data,
  angleField: "value",
  colorField: "type",
  radius: 0.8,
  label: {
    type: "spider",
    content: "{name}\n{percentage}",
  },
  interactions: [{ type: "element-selected" }, { type: "element-active" }],
};
const Home = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span="8">
          <Card
            key="Biens"
            title="Biens"
            extra={[
              <Button>
                <Link href="/biens">
                  <FontAwesomeIcon className="anticon" icon={faEye} />
                </Link>
              </Button>,
            ]}
          >
            <Row align="middle">
              <Col flex="1">
                <FontAwesomeIcon className="anticon" icon={faHome} />
              </Col>
              <Col>
                <Statistic
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  // prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span="8">
          <Card
            key="Locataires"
            title="Locataires"
            extra={[
              <Button>
                <Link href="/locataires">
                  <FontAwesomeIcon className="anticon" icon={faEye} />
                </Link>
              </Button>,
            ]}
          >
            <Row align="middle">
              <Col flex="1">
                <FontAwesomeIcon className="anticon" icon={faUsers} />
              </Col>
              <Col>
                <Statistic
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  // prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span="8">
          <Card
            key="Locations"
            title="Locations"
            extra={[
              <Button>
                <Link href="/locations">
                  <FontAwesomeIcon className="anticon" icon={faEye} />
                </Link>
              </Button>,
            ]}
          >
            <Row align="middle">
              <Col flex="1">
                <FontAwesomeIcon className="anticon" icon={faKey} />
              </Col>
              <Col>
                <Statistic
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  // prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col flex="1">
          <Card title="Revenus et dépenses">
            <Row align="middle" justify="center">
              <Col>
                <Pie {...config} style={{ width: 1000, height: 500}} />
              </Col>
            </Row>
          </Card>
        </Col>
        {/* <Col span="12">
          <Card title="Agenda du jour">
            <FontAwesomeIcon className="anticon" icon={faUsers} />
          </Card>
        </Col> */}
      </Row>
    </>
  );
};

Home.title = "Bureau";

export default Home;
