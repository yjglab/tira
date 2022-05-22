import { List, Button, Card } from "antd";
import { CaretDownFilled, DeleteFilled } from "@ant-design/icons";
import React from "react";
import PropTypes from "prop-types";

const PeerList = ({ header, data }) => (
  <List
    style={{ marginBotton: "20px" }}
    grid={{ gutter: 2, xs: 3, sm: 3, md: 3 }}
    size="small"
    header={<div>{header}</div>}
    loadMore={
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <Button>
          <CaretDownFilled />
        </Button>
      </div>
    }
    bordered
    dataSource={data}
    renderItem={(item) => (
      <List.Item style={{ marginTop: 20 }}>
        <Card actions={[<DeleteFilled key="delPeer" />]}>
          <Card.Meta description={item.nickname} />
        </Card>
      </List.Item>
    )}
  />
);

PeerList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
export default PeerList;
