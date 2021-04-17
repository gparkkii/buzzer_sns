import React from 'react';
import Head from 'next/head';
import Content from 'components/Login/Content';

const login = () => {
  return (
    <>
      <Head>
        <title>로그인 | Buzzer</title>
      </Head>
      <Content />
    </>
  );
};

export default login;
