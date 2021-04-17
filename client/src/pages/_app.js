import React from 'react';
import { PropTypes } from 'prop-types';
import Head from 'next/head';
import AppLayout from 'components/Common/AppLayout';
import Wrapper from '../store/configureStore';
import 'antd/dist/antd.css';
import 'styles/index.css';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Buzzer</title>
        <link rel="icon" type="image/x-icon" href="/icon/favicon.png" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Wrapper.withRedux(App);
