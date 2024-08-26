import React, { Suspense, useState } from 'react';
import {
  CheckCircleOutlined,
  EditOutlined,
  BookOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ConfigProvider, Layout, Menu, theme } from 'antd';
// import styled from 'styled-components';
import { Header } from 'antd/es/layout/layout';
import PoemScreen from './PoemScreen';
import AchievementScreen from './AchievementScreen';
import InspirationScreen from './InspirationScreen';

const { Content, Footer, Sider } = Layout;

// const Logo = styled.img`
//   width: 40px;
//   height: 40px;
//   margin: 0 80px;
// `;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('시', 'poem', <EditOutlined />),
  getItem('업적', 'achievement', <CheckCircleOutlined />),
  getItem('글감', '글감', <BookOutlined />),
];

const RootScreen: React.FC = () => {
  const [selected, setSelected] = useState('poem');
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  // const customTheme: ThemeConfig = {
  //   token: {
  //     colorPrimary: "#6D675F", // primary color
  //     colorBgLayout: "#EFEDEB", // sidebar background color
  //     colorPrimaryTextActive: 'red',
  //   },
  // };

  return (
    <ConfigProvider>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ display: "flex", alignItems: "center" }}>
          {/* <Logo src={LogoIcon} /> */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Layout>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={230}
          >
            <Menu
              onSelect={(info) => {
                setSelected(info.key);
              }}
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
            />
          </Sider>
          <Layout>
            <Content style={{ margin: "0 16px" }}>
              <div
                style={{
                  marginTop: 30,
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <Suspense fallback={<h1></h1>}>
                  {selected === "poem" ? (
                    <PoemScreen />
                  ) : selected === "achievement" ? (
                    <AchievementScreen />
                  ) : (
                    <InspirationScreen />
                  )}
                </Suspense>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              룰루~ ©{new Date().getFullYear()} Created by 나
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default RootScreen;