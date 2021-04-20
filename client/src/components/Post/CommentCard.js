import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeCommentAction } from 'module/reducers/post';
import { Comment, List, Empty } from 'antd';
import { ListBox, StyledList } from 'styles/post';
import Avatar from 'antd/lib/avatar/avatar';
import CommentForm from './CommentForm';

const CommentCard = ({ post, user }) => {
  const dispatch = useDispatch();

  console.log(post.Comments);

  const onRemoveComment = useCallback(commentId => {
    console.log({ commentId, postId: post.id });
    dispatch(removeCommentAction({ commentId, postId: post.id }));
  }, []);

  return (
    <ListBox>
      <CommentForm post={post} />
      {post.Comments ? (
        <List
          header={`댓글 ${post.Comments.length}개`}
          itemLayout="horizontal"
          dataSource={post.Comments}
          renderItem={item => (
            <StyledList>
              <Comment
                author={item.User.nickname}
                avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                content={item.content}
              />
              {user === item.User.id && (
                <button
                  type="button"
                  onClick={e => {
                    e.preventDefault();
                    onRemoveComment(item.id);
                  }}
                >
                  삭제
                </button>
              )}
            </StyledList>
          )}
        />
      ) : (
        <Empty />
      )}
    </ListBox>
  );
};

export default CommentCard;

CommentCard.propTypes = {
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
