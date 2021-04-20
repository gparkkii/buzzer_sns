import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removePostAction } from 'module/reducers/post';
import { Button, Avatar, Empty, Popover } from 'antd';
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
  BoldId,
  CardFooter,
} from 'styles/post';
import LoadingStatus from 'components/Common/LoadingStatus';
import ImageCarousel from './ImageCarousel';
import CommentCard from './CommentCard';
import PostContent from './PostContent';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const UserID = useSelector(state => state.user?.user.id);
  const { removePostLoading } = useSelector(state => state.post);

  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [Liked, setLiked] = useState(false);

  const onRemovePost = useCallback(() => {
    dispatch(removePostAction(post.id));
  });

  const onToggleLike = useCallback(() => {
    setLiked(!Liked);
  }, [Liked]);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(!commentFormOpened);
  }, [commentFormOpened]);

  return (
    <CardWrapper>
      <StyledCard>
        {removePostLoading && <LoadingStatus status="게시글 삭제중..." />}
        <CardHeader>
          <RowBox>
            <Avatar size={40}>{post.User.nickname[0]}</Avatar>
            <BoldId>{post.User.nickname}</BoldId>
          </RowBox>
          <Popover
            key="popover"
            content={
              <Button.Group>
                {post.User.id === UserID ? (
                  <>
                    <Button>수정</Button>
                    <Button onClick={onRemovePost}>삭제</Button>
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
          {post.content && (
            <PostContent nickname={post.User.nickname}>
              {post.content}
            </PostContent>
          )}
          {post.Images?.length === 0 && post.content?.length === 0 && <Empty />}
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
          <CommentCard post={post} user={UserID} />
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
