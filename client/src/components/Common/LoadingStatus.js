import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const LoadingStatus = ({ status }) => {
  return (
    <LoadingModal>
      <FlexBox>
        <Spin tip={status} />
      </FlexBox>
    </LoadingModal>
  );
};

export default LoadingStatus;

const LoadingModal = styled.div`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.25);
`;

const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
