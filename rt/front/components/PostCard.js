import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Card, Popover, Button, Avatar } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import PostImages from "./PostImages";
import { useSelector } from "react-redux";

const PostCard = ({ post }) => {
  const [linked, setLinked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLinked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);
  const id = useSelector((state) => state.user.me?.id);

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="mentioning" />,
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
                    <Button>삭제하기</Button>
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
          description={post.content}
        />
      </Card>
      {commentFormOpened && <div>댓글창</div>}
      {/* <CommentForm />
      <Comments /> */}
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
