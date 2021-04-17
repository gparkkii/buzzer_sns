import React from 'react';
import PropTypes from 'prop-types';
import { MainWrapper } from 'styles/wrapper';
import Header from './Header/Header';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
