import styled from 'styled-components';

export const LoginTitle = styled.div`
  width: 100%;
  margin-bottom: 35px;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  color: #ff357b;
  & strong {
    color: #4371CC;
  }
`

export const SmallMessage = styled.div`
  color: #425067;
  font-size: 14px;
  margin-top: 12px;
  margin-left: 8px;
  & a {
    color: #1890ff;
    margin-left: 8px;
    &: hover {
      font-weight: 600;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: #de506b;
  font-size: 13px;
  padding: 4px 0px 0px 4px;
  &:before {
    display: inline;
    content: '⚠ ';
  }
`;

export const InputAlert = styled.p`
  color: #999;
  font-size: 13px;
  margin: 8px;
  text-align: left;
  &:before {
    display: inline;
    content: '※ ';
  }
`;