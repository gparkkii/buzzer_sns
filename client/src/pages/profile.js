import React from 'react';
import Head from 'next/head';
import UserProfile from 'components/Profile/UserProfile';

const profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | Buzzer</title>
      </Head>
      <UserProfile />
    </>
  );
};

export default profile;
