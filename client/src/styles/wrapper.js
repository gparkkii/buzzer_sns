import styled from 'styled-components';
import { media } from 'styles/media_query';

export const MainWrapper = styled.main`
  margin: 0 auto;
  width: 100%;
  padding: 40px;
  transition: all 0.2s ease;
  ${media.desktop`
    width: 1200px;
  `}
`;

export const RowWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all 0.2s ease;
  ${media.tablet`
    padding: 0px 20px;
  `}
  ${media.desktop`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-contents: space-evenly;
  `}
`;

export const SideWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  margin-left: 0px;
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 20px;
  transition: all 0.2s ease;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(180, 180, 180, 0.15);
  &:hover {
    box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
    top: -4px;
  }
  ${media.desktop`
    width: 35%;
    margin-left: 40px;
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: all 0.2s ease;
  ${media.desktop`
    width: 65%;
  `}
`;

export const FlexWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 140px);
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
