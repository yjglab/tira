import Head from "next/head";
import React, { useCallback, useState } from "react";
import { Form, Input } from "antd";
import AppLayout from "../components/AppLayout";

const Signup = () => {
  const [id, setId] = useState("");
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const [nickname, setNickname] = useState("");
  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  }, []);
  const [pw, setPw] = useState("");
  const onChangePw = useCallback((e) => {
    setPw(e.target.value);
  });
  const onSubmit = useCallback(() => {}, []);
  return (
    <>
      <AppLayout>
        <Head>
          <title>회원되기 | TIRA</title>
        </Head>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-id">닉네임</label>
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
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
