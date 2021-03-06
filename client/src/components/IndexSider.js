import React from 'react';
import { Avatar } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const UserProfile = () => {
  const { nickname } = useSelector(state => state.user.user);

  return (
    <ProfileBox>
      <SiderTitle>π &nbsp;&nbsp;buzzerλ€μ μν μΆμ²</SiderTitle>
      <Lines />
      <Profiles>
        <RowBox>
          <Avatar size={48}>{nickname && nickname[0]}</Avatar>
          <div>
            <h2>λ³΄λΈλ³΄λΈ</h2>
            <p>νμλμ μν μΆμ²</p>
          </div>
        </RowBox>
        <FollowButton>νλ‘μ°</FollowButton>
      </Profiles>
      <Profiles>
        <RowBox>
          <Avatar size={48}>{nickname && nickname[0]}</Avatar>
          <div>
            <h2>λλΌμλͺ½</h2>
            <p>νμλμ μν μΆμ²</p>
          </div>
        </RowBox>
        <FollowButton>νλ‘μ°</FollowButton>
      </Profiles>
      <Profiles>
        <RowBox>
          <Avatar size={48}>{nickname && nickname[0]}</Avatar>
          <div>
            <h2>λλ κ³€λ³Ό</h2>
            <p>νμλμ μν μΆμ²</p>
          </div>
        </RowBox>
        <FollowButton>νλ‘μ°</FollowButton>
      </Profiles>
      <Profiles>
        <RowBox>
          <Avatar size={48}>{nickname && nickname[0]}</Avatar>
          <div>
            <h2>νν°νν°</h2>
            <p>νμλμ μν μΆμ²</p>
          </div>
        </RowBox>
        <FollowButton>νλ‘μ°</FollowButton>
      </Profiles>
    </ProfileBox>
  );
};

export default UserProfile;

const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 4px;
  transition: all 0.2s ease;
  border-bottom: 1px solid #eaeaea;
`;

const SiderTitle = styled.div`
  padding-left: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 600;
  color: #757575;
`;

const Lines = styled.div`
  width: 100%;
  border-top: 1px solid #eaeaea;
  margin-bottom: 15px;
`;

const Profiles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  & div {
    padding-left: 10px;
    & h2 {
      font-size: 14px;
    }
    & p {
      font-size: 12px;
      color: #757575;
    }
  }
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FollowButton = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #3f92f7;
  border-radius: 6px;
  padding-right: 10px;
`;
