import Head from "next/head";
import React, { useCallback, useState } from "react";
import { Form, Input, Checkbox, Button, Alert } from "antd";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import useInput from "../hooks/useInput";
import { SIGN_UP_REQUEST } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";

// styled

const ErrorMessage = styled.div`
  color: tomato;
`;

//
const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state) => state.user);

  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [pw, onChangePw] = useInput("");
  const [pwCheck, setPwCheck] = useState("");
  const [pwError, setPwError] = useState(false);

  const onChangePwCheck = useCallback(
    (e) => {
      setPwCheck(e.target.value);
      setPwError(e.target.value !== pw);
    },
    [pw]
  );
  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  const onSubmit = useCallback(() => {
    if (pw !== pwCheck) {
      return setPwError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(email, nickname, pw);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, pw, nickname },
    });
  }, [email, pw, pwCheck, term]);
  return (
    <>
      <AppLayout>
        <Head>
          <title>회원등록 | TIRA</title>
        </Head>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-email">이메일</label>
            <br />
            <Input
              name="user-email"
              type="email"
              value={email}
              required
              onChange={onChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <br />
            <Input
              name="user-nickname"
              value={nickname}
              required
              onChange={onChangeNickname}
            />
          </div>
          <div>
            <label htmlFor="user-pw">비밀번호</label>
            <br />
            <Input
              name="user-pw"
              type="password"
              value={pw}
              required
              onChange={onChangePw}
            />
          </div>
          <div>
            <label htmlFor="user-pw-check">비밀번호 확인</label>
            <br />
            <Input
              name="user-id"
              type="password"
              value={pwCheck}
              required
              onChange={onChangePwCheck}
            />
            {pwError && <ErrorMessage>비밀번호 불일치</ErrorMessage>}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              티라 회원 등록과 개별 정보 수집에 동의합니다.
            </Checkbox>
            {termError && (
              <Alert
                type="error"
                message="필수항목에 체크하세요"
                showIcon
              ></Alert>
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit" loading={signUpLoading}>
              등록하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
