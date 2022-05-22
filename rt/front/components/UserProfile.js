import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="acts">
          활동 수<br />0
        </div>,
        <div key="peers">
          피어
          <br />0
        </div>,
        <div key="peers">
          피어링
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>YL</Avatar>} title="yjglab" />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};
export default UserProfile;
