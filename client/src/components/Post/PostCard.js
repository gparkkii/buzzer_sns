import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Button, Avatar, Popover } from 'antd';
import {
  MoreOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import {
  CardWrapper,
  PostContentBox,
  StyledCard,
  CardHeader,
  RowBox,
  CardFooter,
} from 'styles/post';
import ImageCarousel from './ImageCarousel';
import CommentCard from './CommentCard';
import PostContent from './PostContent';

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
    <CardWrapper>
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
        <PostContentBox>
          {post.Images[0] && <ImageCarousel images={post.Images} />}
          {post.content && <PostContent>{post.content}</PostContent>}
        </PostContentBox>
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
    </CardWrapper>
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
