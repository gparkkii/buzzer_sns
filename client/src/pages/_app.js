import React from 'react';
import Head from 'next/head';
import withReduxSaga from 'next-redux-saga';
import { PropTypes } from 'prop-types';
import Wrapper from '../module/store/configureStore';
import 'antd/dist/antd.css';
import 'styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Buzzer</title>
        <link rel="icon" type="image/x-icon" href="/icon/favicon.png" />
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Wrapper.withRedux(withReduxSaga(App));
