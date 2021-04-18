import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addPost } from 'reducers/post';
import { SendOutlined, CameraOutlined } from '@ant-design/icons';
import { ErrorMessage } from 'styles/typography';
import { PostError } from 'library/options/errors';
import styled from 'styled-components';

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
  );
};

export default PostForm;

const StyledTextArea = styled.textarea`
  position: relative;
  width: 100%;
  height: 100px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(180, 180, 180, 0.15);
  transition: all 0.2s ease;
  font-size: 14px;
  &:hover {
    box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
    top: -4px;
  }
  &:focus {
    transition: all 0.2s ease-out;
    box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
    top: -4px;
  }
`;

const TextAreaButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 28px;
`;

const BuzzButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 44px;
  border-radius: 12px;
  font-size: 18px;
  color: ${props => (props.gray ? '#4371cc' : '#fff')};
  background-color: ${props => (props.gray ? 'transparent' : '#ff357b')};
  border: ${props => props.gray && '1px solid #4371cc'};
  box-shadow: 0 2px 4px 0 rgba(180, 180, 180, 0.15);
  & span {
    display: flex;
  }
  & p {
    margin-right: 8px;
    font-weight: 400;
    text-align: center;
  }
  &:hover {
    top: -2px;
    box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
    transition: all 0.2s ease-out;
  }
`;