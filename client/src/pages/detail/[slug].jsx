import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Row, Col, Tag } from "antd";
import { getAPI } from "service";
import { Contained } from "styles/components";
const { Title, Text } = Typography;
const DetailRoom = () => {
  const [room, setRoom] = React.useState({});
  const { slug } = useParams();
  React.useEffect(() => {
    if (slug) {
      getAPI(`/hotel/${slug}`).then((res) => setRoom(res.data.room));
    }
  }, [slug]);

  return (
    <div className="container">
      <Title level={1} style={{ textTransform: "capitalize" }}>
        {room.room_name}
      </Title>
      <Row justify="space-between" align="center">
        <Col span={12}>
          <Text>
            <div
              dangerouslySetInnerHTML={{
                __html: room.desc,
              }}
            />
          </Text>
          {room.photo?.map((i, index) => (
            <img src={i} alt="im" style={{ marginTop: 10 }} key={index} />
          ))}
        </Col>
        {/* <Col span={12}>
          {room.featured?.map((i,index) => (
            <p key={index}>{i}</p>
          ))}
          <Tag>
          {room.room_price}
          </Tag>
        </Col> */}
      </Row>
    </div>
  );
};

export default DetailRoom;
