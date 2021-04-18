import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addPost } from 'reducers/post';
import { SendOutlined, CameraOutlined } from '@ant-design/icons';
import {
  CardWrapper,
  StyledTextArea,
  TextAreaButtonBox,
  BuzzButton,
} from 'styles/post';
import { ErrorMessage } from 'styles/typography';
import { PostError } from 'library/options/errors';

const PostForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const dispatch = useDispatch();
  const { imagePaths } = useSelector(state => state.post);
  const FileInput = useRef();

  const onFileUpload = useCallback(() => {
    FileInput.current.click();
  }, [FileInput]);

  const onSubmit = useCallback(data => {
    console.log(data);
    dispatch(addPost);
    reset();
  }, []);

  return (
    <CardWrapper>
      <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
        {imagePaths.map(image => {
          return (
            <div key={image}>
              <img src={image} alt={image} />
              <div>
                <button type="button">제거</button>
              </div>
            </div>
          );
        })}
        <StyledTextArea
          id="feedPost"
          name="feedPost"
          placeholder="당신의 이야기를 들려주세요"
          className={errors.feedPost ? 'errorInput' : null}
          {...register('feedPost', {
            required: true,
            maxLength: 200,
          })}
        />
        {errors.feedPost && (
          <ErrorMessage>{PostError[errors.feedPost.type]}</ErrorMessage>
        )}
        <TextAreaButtonBox>
          <div>
            <input type="file" ref={FileInput} multiple hidden />
            <BuzzButton gray type="button" onClick={onFileUpload}>
              <p>upload</p>
              <span>
                <CameraOutlined />
              </span>
            </BuzzButton>
          </div>
          <div>
            <BuzzButton type="submit">
              <p>buzz</p>
              <span>
                <SendOutlined />
              </span>
            </BuzzButton>
          </div>
        </TextAreaButtonBox>
      </form>
    </CardWrapper>
  );
};

export default PostForm;
