import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from 'module/reducers/user';
import { media } from 'styles/media_query';
import Router from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import LoadingStatus from '../LoadingStatus';

const AuthNav = () => {
  const dispatch = useDispatch();
        
  const { logoutLoading } = useSelector(state => state.user);
  const { loginDone } = useSelector(state => state.user);

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction);
    Router.push('/login');
  }, []);

  return (
    <>
      <NavBox>
        {logoutLoading && <LoadingStatus status="로그아웃 중입니다." />}
        {!loginDone ? (
          <>
            <li>
              <Link href="/signup">
                <a>회원가입</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a>로그인</a>
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
              <button type="button" onClick={onLogout}>
                로그아웃
              </button>
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
