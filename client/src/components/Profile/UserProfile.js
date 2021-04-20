import React from 'react';
import { Avatar } from 'antd';
import { useSelector } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const UserProfile = () => {
  const { name, nickname, Posts, Followings, Followers } = useSelector(
    state => state.user.user,
  );

  return (
    <ProfileBox>
      <Avatar size={{ xs: 80, sm: 80, md: 100, lg: 128, xl: 168, xxl: 168 }}>
        {nickname && nickname[0]}
      </Avatar>
      <h2>{name}</h2>
      <ProfileNickname>{nickname}</ProfileNickname>
      <IconBox>
        🙆🏻&nbsp;{Followings?.length} <strong>팔로워</strong> &nbsp;･&nbsp;
        🙋🏻&nbsp;{Followers?.length} <strong>팔로잉</strong> &nbsp;･&nbsp;
        📝&nbsp;{Posts && Posts.length}
      </IconBox>
      <Description>
        <EditOutlined />
        &nbsp; 한줄 소개를 입력해주세요.
      </Description>
      <ProfileButton type="button">프로필 수정</ProfileButton>
      <ColumnBox>
        <div>👀 &nbsp;&nbsp; Frontend Developer</div>
        <div>🏠 &nbsp;&nbsp; Seoul</div>
        <div>🏢 &nbsp;&nbsp;Buzzer</div>
        <div>🖥 &nbsp;&nbsp; jyp933@gmail.com</div>
        <div>🔗 &nbsp;&nbsp; https://github.com/gparkkii</div>
      </ColumnBox>
    </ProfileBox>
  );
};

export default UserProfile;

const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 24px;
  border-radius: 20px;
  transition: all 0.2s ease;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(180, 180, 180, 0.25);
  &:hover {
    box-shadow: 0px 4px 8px rgba(180, 180, 180, 0.25);
  }
  & h2 {
    font-size: 24px;
    font-weight: 600;
    margin-top: 15px;
  }
  & p {
    font-size: 14px;
    font-weight: 500;
  }
`;

const IconBox = styled.div`
  padding-top: 8px;
  font-size: 15px;
  & strong {
    color: #757575;
    font-size: 14px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  font-size: 15px;
  font-weight: 500;
  padding: 20px 0px;
  color: #999;
`;

const ProfileNickname = styled.p`
  font-size: 18px !important;
  color: #ff357b;
`;

const ProfileButton = styled.button`
  margin-bottom: 15px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ff357b;
  color: #ff357b;
  font-size: 14px;
`;

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  font-size: 15px;
  line-height: 2;
  margin-left: 15px;
`;
