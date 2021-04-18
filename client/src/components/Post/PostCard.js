import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  MoreOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Button, Avatar, Popover } from 'antd';
import styled from 'styled-components';
import PostImages from './PostImages';
import CommentCard from './CommentCard';

const PostCard = ({ post }) => {
  const UserID = useSelector(state => state.user?.user.id);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [Liked, setLiked] = useState(false);

  const onToggleLike = useCallback(() => {
    setLiked(!Liked);
  }, [Liked]);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(!commentFormOpened);
  }, [commentFormOpened]);

  console.log(post);

  return (
    <>
      <StyledCard>
        <CardHeader>
          <RowBox>
            <Avatar size={40}>U</Avatar>
            <p>{post.User.nickname}</p>
          </RowBox>
          <Popover
            key="popover"
            content={
              <Button.Group>
                {UserID && post.User.id === UserID ? (
                  <>
                    <Button>수정</Button>
                    <Button>삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <MoreOutlined />
          </Popover>
        </CardHeader>
        {post.Images[0] && <PostImages images={post.Images} />}
        <ContentBox>{post.content}</ContentBox>
        <CardFooter>
          <RowBox>
            <RowBox margin="0 10px 0 0">
              {Liked ? (
                <HeartTwoTone
                  twoToneColor="#ff357b"
                  key="heart"
                  onClick={onToggleLike}
                />
              ) : (
                <HeartOutlined key="heart" onClick={onToggleLike} />
              )}
              <p>36</p>
            </RowBox>
            <RowBox>
              <MessageOutlined key="comment" onClick={onToggleComment} />
              <p>{post.Comments.length}</p>
            </RowBox>
          </RowBox>
          <div>
            <ShareAltOutlined key="retweet" />
          </div>
        </CardFooter>
      </StyledCard>
      {commentFormOpened && (
        <>
          <CommentCard post={post} />
        </>
      )}
    </>
  );
};

export default PostCard;

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      nickname: PropTypes.string,
    }),
    content: PropTypes.string,
    Images: PropTypes.arrayOf(PropTypes.object),
    Comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const StyledCard = styled.div`
  position: relative;
  width: 100%;
  min-height: 240px;
  margin-bottom: 20px;
  border-radius: 20px;
  transition: all 0.2s ease;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(180, 180, 180, 0.15);
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 68px;
  padding: 0px 20px;
  border-bottom: 1px solid #eaeaea;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 68px;
  padding: 0px 20px;
  font-size: 18px;
  color: #3f92f7;
  border-top: 1px solid #eaeaea;
`;

const RowBox = styled.div`
  position: relative;
  display: flex;
  flex-directin: row;
  align-items: center;
  margin: ${props => props.margin};
  & p {
    margin: 0px 10px;
    font-size: 16px;
  }
`;
const ContentBox = styled.div`
  padding: 20px;
`;
