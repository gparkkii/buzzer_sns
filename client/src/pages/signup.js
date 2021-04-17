import React from 'react';
import Head from 'next/head';
import Content from 'components/SignUp/Content';

const signup = () => {
  return (
    <>
      <Head>
        <title>회원가입 | Buzzer</title>
      </Head>
      <Content />
    </>
  );
};

export default signup;
