import { Button, Form, Input } from "antd";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput("");

  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);
  const onSubmit = useCallback(() => {
    dispatch(addPost(text));
  }, [text]);

  const imageInputRef = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInputRef.current.click();
  }, [imageInputRef.current]);
  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="예쁘고 멋진 리뷰를 남겨주세요❤"
      />
      <div>
        <input type="file" multiple hidden ref={imageInputRef}></input>
        <Button onClick={onClickImageUpload}>사진</Button>
        <Button type="primary" style={{ float: "right" }} htmlType={"submit"}>
          전송
        </Button>
      </div>
      <div>
        {imagePaths.map((path) => (
          <div key={path} style={{ display: "inline-block" }}>
            <img src={path} style={{ width: "200px" }} alt={path} />
            <div>
              <Button>삭제</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};
export default PostForm;
