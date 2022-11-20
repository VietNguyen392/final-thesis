import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Row, Col, Drawer, Modal, Button } from "antd";
import { GET } from "service";
import { useSelector } from "react-redux";
import FormLogin from "components/FormLogin";
import FormBooking from "components/FormBooking";
import { useTranslation } from "react-i18next";
const { Title, Text } = Typography;
const DetailRoom = () => {
  const [state, setState] = React.useState({
    room: {},
    open: false,
  });
  const { room, open } = state;
  const { slug } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { t } = useTranslation();
  React.useEffect(() => {
    const controller = new AbortController();
    if (slug) {
      GET(`/hotel/${slug}`).then((res) =>
        setState((p) => ({ ...p, room: res.data.room }))
      );
    }
    return () => controller.abort();
  }, [slug]);

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title level={1} style={{ textTransform: "capitalize" }}>
          {room.room_name}
        </Title>
        <Button onClick={() => setState((p) => ({ ...p, open: true }))}>
          {t("navbar.booking")}
        </Button>
      </div>

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
        <Col>
          <label>Dịch vụ</label>
          {room.featured?.map((i, index) => (
            <p key={index}>{i}</p>
          ))}
          <label>Giá</label>
          <Typography.Text style={{ fontSize: "25px", fontWeight: 700 }}>
            {room.room_price} $
          </Typography.Text>
        </Col>
        {user ? (
          <Drawer
            open={open}
            onClose={() => setState((p) => ({ ...p, open: false }))}
          >
            <FormBooking />
          </Drawer>
        ) : (
          <Modal
            open={open}
            onClose={() => setState((p) => ({ ...p, open: false }))}
            onCancel={() => setState((p) => ({ ...p, open: false }))}
            title={t("common.login")}
            footer={null}
          >
            <FormLogin />
          </Modal>
        )}
      </Row>
    </div>
  );
};

export default DetailRoom;
