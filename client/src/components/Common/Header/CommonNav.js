import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Input } from 'antd';

const CommonNav = () => {
  return (
    <nav>
      <NavBox>
        <li>
          <Link href="/">
            <Logo src="/images/logo.png" alt="logo" />
          </Link>
        </li>
        <li>
          <Input.Search />
        </li>
      </NavBox>
    </nav>
  );
};

export default CommonNav;

const NavBox = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: 24px;
  font-weight: 600;
  & li {
    margin-right: 28px;
  }
`;

const Logo = styled.img`
  height: 48px;
  vertical-align: middle;
`;
