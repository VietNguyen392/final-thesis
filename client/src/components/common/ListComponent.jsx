import React from "react";
import { Image, Typography } from "antd";
import { Link } from "react-router-dom";
import { HomeItemWrapper } from "styles/components";
import { useTranslation } from "react-i18next";
const ListComponent = (props) => {
  const { items } = props;
  const { t } = useTranslation();
  return (
    <>
      {items?.map((item) => (
        <div key={item._id}>
          <HomeItemWrapper>
            <div className="head">
              <Image preview={false} src={item.photo[0]} />
            </div>
            <div className="middle">
              <div className="title">
                <Typography.Title
                  level={3}
                  style={{ textTransform: "capitalize" }}
                >
                  <Link to={`/detail/${item._id}`}>{item.room_name}</Link>
                </Typography.Title>
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
                {/*<span>*/}
                {/*  {t("common.feature")}:*/}
                {/*  <ul>*/}
                {/*    {item.featured?.map((i, index) => (*/}
                {/*      <li key={index}>{i}</li>*/}
                {/*    ))}*/}
                {/*  </ul>*/}
                {/*</span>*/}
              </div>
              <div className="price"></div>
            </div>
          </HomeItemWrapper>
        </div>
      ))}
      {/* <div style={{ display: "none" }}>
                <Image.PreviewGroup
                  preview={{ visible, onVisibleChange: (v) => setVisible(v) }}
                >
                  {item.photo.map((img, index) => (
                    <Image src={img} key={index} />
                  ))}
                </Image.PreviewGroup>
                onClick={() => setVisible(true)}
              </div>*/}
    </>
  );
};

export default ListComponent;
