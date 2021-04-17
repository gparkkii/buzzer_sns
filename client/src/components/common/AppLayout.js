import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from 'styles/media_query';
import Header from './Header/Header';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

const Wrapper = styled.main`
  margin: 0 auto;
  width: 100%;
  padding: 40px;
  transition: all 0.2s ease;
  ${media.desktop`
    width: 1200px;
  `}
`;
