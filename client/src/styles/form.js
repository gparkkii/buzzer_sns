import styled from 'styled-components';
import { media } from 'styles/media_query';

export const FormBox = styled.div`
  width: 100%;
  margin: 0 auto;
  transition: all 0.2s ease;
  ${media.tablet`
    border: 1px solid #eaeaea;
    border-radius: 20px;
    padding: 60px;
    width: 32em;
  `}
  ${media.desktop`
    width: 38em;
  `}
`;

export const InputBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 8px;
  & label {
    font-size: 13px;
    margin-left: 8px;
  }
  &:focus-within {
    color: #3f92f7;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 0px 20px;
  border-radius: 30px;
  border: 1px solid #ddd;
  color: #212121;
  &:hover {
    border: 1px solid #3f92f7;
  }
  &:focus {
    border: 1px solid #3f92f7;
    box-shadow: inset 0 0 0 1px #3f92f7;
  }
`;

export const AbsoluteBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AbsoluteIcon = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
  & span {
    display: flex;
    align-items: center;
    height: 52px;
    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 30px;
  background-color: #ff357b;
  color: #fff;
  margin-top: 30px;
`;
