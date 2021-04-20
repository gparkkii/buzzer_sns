import styled from 'styled-components';
import { media } from 'styles/media_query';

export const MainWrapper = styled.main`
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 40px;
  transition: all 0.2s ease;
  ${media.desktop`
    width: 1280px;
    padding: 40px 10px;
  `}
`;

export const RowWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all 0.2s ease;
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
  margin-left: 0px;
  margin-bottom: 40px;
  transition: all 0.2s ease;
  ${media.desktop`
    width: 35%;
    margin: ${props => props.margin};
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
