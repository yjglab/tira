import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import useInput from "../hooks/useInput";
import { loginRequestAction } from "../reducers/user";

import { Button, Form, Input } from "antd";
// styled css
import styled from "styled-components";
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
const FormWrapper = styled(Form)`
  padding: 10px;
`;
//
const LoginForm = ({}) => {
  const dispatch = useDispatch();
  const { isLoggingIn } = useSelector((state) => state.user);
  const [id, onChangeId] = useInput("");
  const [pw, onChangePw] = useInput("");

  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({ id, pw }));
  }, [id, pw]);
  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-pw">비밀번호</label>
        <br />
        <Input
          name="user-pw"
          type="password"
          value={pw}
          onChange={onChangePw}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>가입하기</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};
export default LoginForm;
