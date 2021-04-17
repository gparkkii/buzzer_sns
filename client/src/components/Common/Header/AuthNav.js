/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useState } from 'react';
import { media } from 'styles/media_query';
import styled from 'styled-components';
import Link from 'next/link';

const AuthNav = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const onClick = useCallback(() => {
    setisLoggedIn(!isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <NavBox>
        {isLoggedIn ? (
          <>
            <li>
              <Link href="/signup">
                <a>회원가입</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a onClick={onClick}>로그인</a>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/profile">
                <a>프로필</a>
              </Link>
            </li>
            <li>
              <div onClick={onClick}>로그아웃</div>
            </li>
          </>
        )}
      </NavBox>
    </>
  );
};

export default AuthNav;

const NavBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  font-size: 16px;
  font-weight: 500;
  & li {
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
  ${media.tablet`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    & li {
      margin-left: 28px;
    }
  `}
`;
