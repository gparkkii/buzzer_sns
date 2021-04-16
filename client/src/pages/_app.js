import React from 'react';
import { PropTypes } from 'prop-types';
import Head from 'next/head';
import AppLayout from 'components/Common/AppLayout';
import 'antd/dist/antd.css';
import 'styles/index.css';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Buzzer</title>
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
