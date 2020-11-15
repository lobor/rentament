import { useRouter } from 'next/router';
import Link from 'next/link';
import { Grid, PageHeader, Layout, Menu, Spin, Dropdown, Avatar } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faDesktop,
  faHouseUser,
  faHome,
  faKey,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const userQuery = gql`
  query user {
    user {
      id
      firstName
    }
  }
`;

const logoutMutation = gql`
  mutation logout {
    logout {
      status
    }
  }
`;

const LayoutApp: React.FC<{ title?: string; extra?: React.ReactNode[] }> = ({
  children,
  title,
  extra,
}) => {
  const screens = Grid.useBreakpoint();
  const router = useRouter();
  const { data, loading } = useQuery(userQuery);
  const [handleLogout] = useMutation(logoutMutation);
  const user = data?.user;

  const logout = async () => {
    const { data } = await handleLogout();
    if (data.logout.status === 'OK') {
      // eslint-disable-next-line no-undef
      window.localStorage.clear();
      router.push('/login');
      router.reload();
    }
  };
  // console.log({ user, loading });
  useEffect(() => {
    if (!loading && !user && !['/login', '/createAccount'].includes(router.pathname)) {
      router.push('/login');
    } else if (!loading && user && ['/login', '/createAccount'].includes(router.pathname)) {
      router.push('/');
    }
  }, [loading]);

  if (loading || (!user && !['/login', '/createAccount'].includes(router.pathname))) {
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Spin size="large" tip="Authentification..." wrapperClassName="spinPage" />
      </div>
    );
  }

  // eslint-disable-next-line prefer-const
  let defaultOpenKeys = [];
  if (['/biens', '/immeubles'].includes(router.pathname)) {
    defaultOpenKeys.push('sub1');
  } else if (['/prets', '/finances', '/bilan'].includes(router.pathname)) {
    defaultOpenKeys.push('sub2');
  }
  if (!user) {
    return children;
  }
  return (
    <Layout style={{ height: '100%' }}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" triggerSubMenuAction="click">
          <Menu.Item>Rentament</Menu.Item>
          <Menu.SubMenu
            key="toto"
            title={<Avatar>{user.firstName}</Avatar>}
            className="ant-layout-header-menu-right"
          >
            <Menu.Item
              icon={<FontAwesomeIcon className="anticon" icon={faUsers} />}
              onClick={() => router.push('/owners')}
            >
              Multi-propriétaire
            </Menu.Item>
            <Menu.Item icon={<LogoutOutlined />} onClick={logout}>
              Logout
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Header>
      <Layout style={{ marginTop: 64 }}>
        <Sider breakpoint="md" width={200} collapsedWidth="0">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[router.pathname]}
            defaultOpenKeys={defaultOpenKeys}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="/" icon={<FontAwesomeIcon className="anticon" icon={faDesktop} />}>
              <Link href="/">Bureaux</Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              icon={<FontAwesomeIcon className="anticon" icon={faHome} />}
              title="Biens"
            >
              <Menu.Item key="/biens" icon={<FontAwesomeIcon className="anticon" icon={faHome} />}>
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
              key="/tenants"
              icon={<FontAwesomeIcon className="anticon" icon={faHouseUser} />}
            >
              <Link href="/tenants">Tenants</Link>
            </Menu.Item>
            <Menu.Item key="Leases" icon={<FontAwesomeIcon className="anticon" icon={faKey} />}>
              <Link href="/leases">Leases</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: `0 ${screens.xs ? '10' : '50'}px` }}>
          {title && (
            <PageHeader title={title} style={{ paddingRight: 0, paddingLeft: 0 }} extra={extra} />
          )}
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;
