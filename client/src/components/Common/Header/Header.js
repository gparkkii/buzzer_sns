import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { media } from 'styles/media_query';
import styled from 'styled-components';
import CommonNav from './CommonNav';
import AuthNav from './AuthNav';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <StyledHeader>
      <Headerbox>
        <CommonNav />
        <DesktopMenu>
          <AuthNav />
        </DesktopMenu>
        <TabletMenu>
          <Button shape="circle" icon={<MenuOutlined />} onClick={showDrawer} />
          <Drawer
            title="auth drawer"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <AuthNav />
          </Drawer>
        </TabletMenu>
      </Headerbox>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
`;

const Headerbox = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  margin: 0 auto;
  ${media.desktop`
    width: 1280px;
    padding: 0px;
  `}
`;

const DesktopMenu = styled.nav`
  display: none;
  ${media.tablet`
    display: flex;
  `}
`;

const TabletMenu = styled.nav`
  display: flex;
  ${media.tablet`
    display: none;
  `}
`;
