import React from "react";
import { Button, Image, Typography, Modal } from "antd";
import { Link } from "react-router-dom";
import { HomeItemWrapper } from "styles/components";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
const ListComponent = (props) => {
  const { items } = props;
  const [state, setState] = React.useState({
    desc: "",
    open: false,
  });
  const { desc, open } = state;
  const { t } = useTranslation();
  const location = useLocation();
  function selectID(rId) {
    const specific = items?.filter((it) => it._id === rId);
    console.log(specific);
    setState((p) => ({ ...p, open: true, desc: specific[0].desc }));
  }
  return (
    <>
      {items?.map((item) => (
        <div key={item._id}>
          <HomeItemWrapper>
            <div className="head">
              <Image preview={false} src={item.photo[0]} />
            </div>
            <div className="middle">
              <div
                className="title"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: 5,
                }}
              >
                <Typography.Title
                  level={3}
                  style={{ textTransform: "capitalize" }}
                >
                  {location.pathname === "/hotel" ? (
                    <Link to={`/detail/${item._id}`}>{item.room_name}</Link>
                  ) : (
                    <Typography.Text>{item.room_name}</Typography.Text>
                  )}
                </Typography.Title>
                {location.pathname === "/hotel" ? (
                  ""
                ) : (
                  <Button onClick={() => selectID(item._id)}>
                    Xem Thông Tin
                  </Button>
                )}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  {t("common.price")}:
                  <Typography.Text
                    style={{ fontSize: "25px", fontWeight: 700 }}
                  >
                    {item.room_price}$
                  </Typography.Text>
                </span>
              </div>
              <div className="price"></div>
            </div>
          </HomeItemWrapper>
        </div>
      ))}
      <Modal
        open={open}
        onCancel={() => setState((p) => ({ ...p, open: false }))}
        footer={null}
        width={"auto"}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: desc,
          }}
        />
      </Modal>
    </>
  );
};

export default ListComponent;
