import React from 'react';
import { Result } from 'antd';

const ErrorPage = () => {
  return (
    <Result status="500" title="500" subTitle="Sorry, Something went wrong." />
  );
};

export default ErrorPage;
