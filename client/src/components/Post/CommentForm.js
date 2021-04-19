import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { SendOutlined } from '@ant-design/icons';
import { ErrorMessage } from 'styles/typography';
import { CommentError } from 'library/options/errors';
import {
  CommentFormBox,
  CommentTitle,
  CommentTextArea,
  CommentButton,
} from 'styles/post';

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
          minLength: 2,
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
