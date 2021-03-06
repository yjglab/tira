import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Card, Popover, Button, Avatar, List, Comment } from "antd";
import {
  UpOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import PostImages from "./PostImages";
import { useDispatch, useSelector } from "react-redux";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import { REMOVE_POST_REQUEST } from "../reducers/post";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state) => state.post);
  const [linked, setLinked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLinked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);
  const onRemovePost = useCallback(() => {
    // console.log(post.id);
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);
  const id = useSelector((state) => state.user.me?.id);

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <UpOutlined key="mentioning" />,
          linked ? (
            <HeartTwoTone
              twoToneColor="tomato"
              key="heart"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정하기</Button>
                    <Button
                      type="danger"
                      loading={removePostLoading}
                      onClick={onRemovePost}
                    >
                      삭제하기
                    </Button>
                  </>
                ) : (
                  <Button>신고하기</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    Images: PropTypes.arrayOf(PropTypes.object),
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
export default PostCard;
