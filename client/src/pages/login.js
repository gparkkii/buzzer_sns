import React, { useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { PasswordError, EmailError } from 'library/options/errors';
import { EyeInvisibleTwoTone, EyeTwoTone } from '@ant-design/icons';
import { ErrorMessage, LoginTitle, SmallMessage } from 'styles/typography';
import { FlexWrapper } from 'styles/wrapper';
import {
  AbsoluteBox,
  AbsoluteIcon,
  FormBox,
  InputBox,
  StyledButton,
  StyledInput,
} from 'styles/form';

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const [ShowPassword, setShowPassword] = React.useState(false);

  const handleVisibility = () => {
    setShowPassword(!ShowPassword);
  };

  const onSubmit = useCallback(user => {
    console.log(user);
  }, []);

  return (
    <>
      <Head>
        <title>로그인 | Buzzer</title>
      </Head>
      <FlexWrapper>
        <FormBox onSubmit={handleSubmit(onSubmit)}>
          <LoginTitle>
            Hello,
            <strong> buzzer!</strong>
          </LoginTitle>
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
          <StyledButton type="submit" onClick={handleSubmit(onSubmit)}>
            로그인
          </StyledButton>
          <SmallMessage>
            <span>아직 계정이 없으신가요?</span>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </SmallMessage>
        </FormBox>
      </FlexWrapper>
    </>
  );
};

export default LogIn;
