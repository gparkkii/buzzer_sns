import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { SendOutlined } from '@ant-design/icons';
import { ErrorMessage } from 'styles/typography';
import { CommentError } from 'library/options/errors';
import styled from 'styled-components';

const CommentForm = ({ post }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const UserID = useSelector(state => state.user?.user.id);

  const onSubmit = useCallback(comment => {
    console.log('post.id :', post.id);
    console.log('Comment :', comment);
    console.log('UserID :', UserID);
    reset();
  }, []);

  return (
    <CommentFormBox onSubmit={handleSubmit(onSubmit)}>
      <CommentTitle>댓글 입력</CommentTitle>
      <CommentTextArea
        id="comment"
        name="comment"
        placeholder="버저에게 댓글을 남겨주세요 :>"
        className={errors.comment ? 'errorInput' : null}
        {...register('comment', {
          required: true,
          maxLength: 50,
        })}
      />
      {errors.comment && (
        <ErrorMessage>{CommentError[errors.comment.type]}</ErrorMessage>
      )}
      <CommentButton type="submit">
        <p>buzz</p>
        <span>
          <SendOutlined />
        </span>
      </CommentButton>
    </CommentFormBox>
  );
};

export default CommentForm;

CommentForm.propTypes = {
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

const CommentTitle = styled.p`
  font-size: 15px;
`;

const CommentFormBox = styled.form`
  width: 100%;
  padding: 15px 20px 10px 20px;
`;

const CommentTextArea = styled.textarea`
  position: relative;
  width: 100%;
  height: 60px;
  padding: 20px;
  margin-top: 8px;
  border-radius: 12px;
  background-color: #fff;
  transition: all 0.2s ease;
  font-size: 14px;
  &:hover {
    top: -2px;
  }
  &:focus {
    transition: all 0.2s ease-out;
    top: -2px;
  }
`;

const CommentButton = styled.button`
  position: relative;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  margin-top: 4px;
  font-size: 15px;
  border-radius: 8px;
  background-color: #ff357b;
  color: #fff;
  z-index: 10;
  & span {
    display: flex;
  }
  & p {
    margin-right: 8px;
    font-weight: 400;
    text-align: center;
  }
`;