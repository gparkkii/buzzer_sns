import React from 'react';
import { Avatar } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const UserProfile = () => {
  const { nickname } = useSelector(state => state.user.user);

  return (
    <ProfileBox>
      <SiderTitle>🔎 &nbsp;&nbsp;buzzer들을 위한 추천</SiderTitle>
      <Lines />
      <Profiles>
        <RowBox>
          <Avatar size={48}>{nickname && nickname[0]}</Avatar>
          <div>
            <h2>보노보노</h2>
            <p>회원님을 위한 추천</p>
          </div>
        </RowBox>
        <FollowButton>팔로우</FollowButton>
      </Profiles>
      <Profiles>
        <RowBox>
          <Avatar size={48}>{nickname && nickname[0]}</Avatar>
          <div>
            <h2>도라에몽</h2>
            <p>회원님을 위한 추천</p>
          </div>
        </RowBox>
        <FollowButton>팔로우</FollowButton>
      </Profiles>
      <Profiles>
        <RowBox>
          <Avatar size={48}>{nickname && nickname[0]}</Avatar>
          <div>
            <h2>드레곤볼</h2>
            <p>회원님을 위한 추천</p>
          </div>
        </RowBox>
        <FollowButton>팔로우</FollowButton>
      </Profiles>
      <Profiles>
        <RowBox>
          <Avatar size={48}>{nickname && nickname[0]}</Avatar>
          <div>
            <h2>헌터헌터</h2>
            <p>회원님을 위한 추천</p>
          </div>
        </RowBox>
        <FollowButton>팔로우</FollowButton>
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
