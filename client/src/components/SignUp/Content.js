import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { FlexWrapper } from 'styles/wrapper';
import {
  NameError,
  NickNameError,
  EmailError,
  PasswordError,
  PasswordConfirmError,
} from 'library/options/errors';
import {
  AbsoluteBox,
  AbsoluteIcon,
  FormBox,
  InputBox,
  StyledButton,
  StyledInput,
} from 'styles/form';
import { ErrorMessage, LoginTitle, SmallMessage, InputAlert } from 'styles/typography';
import { EyeInvisibleTwoTone, EyeTwoTone } from '@ant-design/icons';

const Content = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const password = useRef();
  password.current = watch('password');

  const [ShowPassword, setShowPassword] = React.useState(false);
  const handleVisibility = () => {
    setShowPassword(!ShowPassword);
  };

  const onSubmit = useCallback(
    user => {
      console.log(user);
    },
    [],
  );

  return (
    <FlexWrapper>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <LoginTitle>
          Welcome to,
          <strong> buzzer!</strong>
        </LoginTitle>
        <InputBox>
          <label
            className={errors.name ? 'errorTypeLabel' : null}
            htmlFor="name"
          >
            이름
          </label>
          <StyledInput
            id="name"
            name="name"
            type="text"
            placeholder="이름을 입력해주세요"
            className={errors.name ? 'errorInput' : null}
            {...register('name', {
              required: true,
              minLength: 2,
              maxLength: 12,
            })}
          />
          {errors.name && (
            <ErrorMessage>{NameError[errors.name.type]}</ErrorMessage>
          )}
        </InputBox>
        <InputBox>
          <label
            className={errors.nickname ? 'errorTypeLabel' : null}
            htmlFor="nickname"
          >
            닉네임
          </label>
          <StyledInput
            id="nickname"
            name="nickname"
            type="text"
            className={errors.nickname ? 'errorInput' : null}
            placeholder="닉네임을 입력해주세요"
            {...register('nickname', {
              required: true,
              minLength: 2,
              maxLength: 10,
            })}
          />
          {errors.nickname && (
            <ErrorMessage>{NickNameError[errors.nickname.type]}</ErrorMessage>
          )}
        </InputBox>
        <InputBox>
          <label
            className={errors.email ? 'errorTypeLabel' : null}
            htmlFor="email"
          >
            이메일
          </label>
          <StyledInput
            id="email"
            name="email"
            type="text"
            placeholder="이메일을 입력해주세요"
            className={errors.email ? 'errorInput' : null}
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && (
            <ErrorMessage>{EmailError[errors.email.type]}</ErrorMessage>
          )}
        </InputBox>
        <InputBox>
          <label
            className={errors.password ? 'errorTypeLabel' : null}
            htmlFor="password"
          >
            비밀번호
          </label>
          <AbsoluteBox>
            <StyledInput
              id="password"
              name="password"
              type={ShowPassword ? 'text' : 'password'}
              placeholder="비밀번호를 입력해주세요"
              className={errors.password ? 'errorInput' : null}
              {...register('password', {
                required: true,
                minLength: 8,
                maxLength: 20,
                validate: {
                  checkLang: value =>
                    ![/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/].every(pattern =>
                      pattern.test(value),
                    ),
                  checkLower: value =>
                    [/[a-z]/].every(pattern => pattern.test(value)),
                  checkUpper: value =>
                    [/[A-Z]/].every(pattern => pattern.test(value)),
                  checkNumber: value =>
                    [/[0-9]/].every(pattern => pattern.test(value)),
                  checkSpec: value =>
                    [/[^a-zA-Z0-9]/].every(pattern => pattern.test(value)),
                },
              })}
            />
            <AbsoluteIcon onClick={handleVisibility}>
              {ShowPassword ? <EyeTwoTone /> : <EyeInvisibleTwoTone />}
            </AbsoluteIcon>
          </AbsoluteBox>
          {errors.password && (
            <ErrorMessage>{PasswordError[errors.password.type]}</ErrorMessage>
          )}
        </InputBox>
        <InputBox>
          <label
            className={errors.passwordConfirm ? 'errorTypeLabel' : null}
            htmlFor="passwordConfirm"
          >
            비밀번호 확인
          </label>
          <StyledInput
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            placeholder="비밀번호를 확인해주세요"
            className={errors.passwordConfirm ? 'errorInput' : null}
            {...register('passwordConfirm', {
              required: true,
              validate: value => value === password.current,
            })}
          />
          {errors.passwordConfirm && (
            <ErrorMessage>
              {PasswordConfirmError[errors.passwordConfirm.type]}
            </ErrorMessage>
          )}
        </InputBox>
        <InputAlert>
          한글 제외 영문(대/소문자), 숫자, 특수문자를 조합하여 8~20자 이내로
          입력해주세요.
        </InputAlert>
        <StyledButton type="submit" onClick={handleSubmit(onSubmit)}>
          회원가입
        </StyledButton>
      </FormBox>
    </FlexWrapper>
  );
};

export default Content;
