import { useRouter } from "next/router";
import Link from "next/link";

import "../styles/globals.css";
import "antd/dist/antd.css";
import { PageHeader, Layout, Menu, Spin } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faChartLine,
  faClipboard,
  // faCloud,
  faDesktop,
  faHome,
  faKey,
  faUniversity,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const LayoutApp: React.FC<{ title?: string }> = ({ children, title }) => {
  const router = useRouter()
  let defaultOpenKeys = []
  if (['/biens', '/immeubles'].includes(router.pathname)) {
    defaultOpenKeys.push('sub1')
  } else if (['/prets', '/finances', '/bilan'].includes(router.pathname)) {
    defaultOpenKeys.push('sub2')
  }
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Rentament</Menu.Item>
        </Menu>
      </Header>
      <Layout style={{ marginTop: 64 }}>
        <Sider
          width={200}
          style={{
            background: "#fff",
            overflow: "auto",
            height: "calc(100% - 64px)",
            position: "fixed",
            left: 0,
          }}
        >
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[router.pathname]}
            defaultOpenKeys={defaultOpenKeys}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item
              key="/"
              icon={<FontAwesomeIcon className="anticon" icon={faDesktop} />}
            >
              <Link href="/">Bureaux</Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              icon={<FontAwesomeIcon className="anticon" icon={faHome} />}
              title="Biens"
            >
              <Menu.Item
                key="/biens"
                icon={<FontAwesomeIcon className="anticon" icon={faHome} />}
              >
                <Link href="/biens">Biens</Link>
              </Menu.Item>
              <Menu.Item
                key="/immeubles"
                icon={<FontAwesomeIcon className="anticon" icon={faBuilding} />}
              >
                <Link href="/immeubles">Immeubles</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item
              key="/locataires"
              icon={<FontAwesomeIcon className="anticon" icon={faUsers} />}
            >
              <Link href="/locataires">Locataires</Link>
            </Menu.Item>
            <Menu.Item
              key="Locations"
              icon={<FontAwesomeIcon className="anticon" icon={faKey} />}
            >
              <Link href="/locations">Locations</Link>
            </Menu.Item>
            <Menu.Item
              key="Etat des lieux"
              icon={<FontAwesomeIcon className="anticon" icon={faClipboard} />}
            >
              Etat des lieux
            </Menu.Item>
            <SubMenu
              key="sub2"
              icon={<FontAwesomeIcon className="anticon" icon={faWallet} />}
              title="Finances"
            >
              <Menu.Item
                key="/finances"
                icon={<FontAwesomeIcon className="anticon" icon={faWallet} />}
              >
                Finances
              </Menu.Item>
              <Menu.Item
                key="/bilan"
                icon={
                  <FontAwesomeIcon className="anticon" icon={faChartLine} />
                }
              >
                Bilan
              </Menu.Item>
              <Menu.Item
                key="/prets"
                icon={
                  <FontAwesomeIcon className="anticon" icon={faUniversity} />
                }
              >
                Prêts
              </Menu.Item>
            </SubMenu>
            {/* <Menu.Item
              key="Documents"
              icon={<FontAwesomeIcon className="anticon" icon={faCloud} />}
            >
              Documents
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Content style={{ marginLeft: 200, padding: "0 50px" }}>
          {title && <PageHeader title={title} />}
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const user = true;
  if (!user && router.pathname !== "/login") {
    router.push("/login");
    return null;
  }
  if (user && router.pathname === "/login") {
    router.push("/");
    return null;
  }
  const handleRouteChangeStart = () => {
    !loading && setLoading(true);
  };
  const handleRouteChangeComplete = () => {
    loading && setLoading(false);
  };
  const handleRouteChangeError = (e) => {
    console.log("routeChangeError", e);
  };
  useEffect(() => {
    if (router) {
      router.events.on("routeChangeStart", handleRouteChangeStart);
      router.events.on("routeChangeComplete", handleRouteChangeComplete);
      router.events.on("routeChangeError", handleRouteChangeError);
      return () => {
        router.events.off("routeChangeStart", handleRouteChangeStart);
        router.events.off("routeChangeComplete", handleRouteChangeComplete);
        router.events.off("routeChangeError", handleRouteChangeError);
      };
    }
  }, [router]);

  const LayoutLoader = ({ children }) => (
    <Spin size="large" tip="Loading...">
      {children}
    </Spin>
  );
  const LayoutContent = user
    ? ({ children, title }) => <LayoutApp title={title}>{children}</LayoutApp>
    : (children) => <>{children}</>;
  const Layout = loading
    ? ({ title, children }) => (
        <LayoutContent title={title}>
          <LayoutLoader>{children}</LayoutLoader>
        </LayoutContent>
      )
    : LayoutContent;
  return (
    <Layout title={Component.title}>
      <Component {...pageProps}></Component>
    </Layout>
  );

  // return (
  //   <Layout title={Component.title}>
  //     {loading && <Spin size="large" />}
  //     <Component {...pageProps}></Component>
  //   </Layout>
  // );
  // return <Component {...pageProps} />
}

export default MyApp;
