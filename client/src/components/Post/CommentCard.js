import React from 'react';
import styled from 'styled-components';
import { Comment, List } from 'antd';
import { PropTypes } from 'prop-types';
import Avatar from 'antd/lib/avatar/avatar';
import CommentForm from './CommentForm';

const CommentCard = ({ post }) => {
  return (
    <ListBox>
      <CommentForm post={post} />
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
          </StyledList>
        )}
      />
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

const ListBox = styled.div`
  width: 100%;
  margin-bottom: 30px;
  border-radius: 20px;
  transition: all 0.2s ease;
  background-color: #f0f0f0;
`;

const StyledList = styled.li`
  padding: 0px 20px;
  border-top: 1px solid #ddd;
`;
