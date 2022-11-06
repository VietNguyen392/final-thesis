import React from "react";
import { useQuery } from "react-query";
import { Image, Typography, Row } from "antd";
import { getAPI } from "service";
import { HomeItemWrapper } from "styles/components";
import Loading from "./loading";
const HomeList = () => {
  const [visible, setVisible] = React.useState(false);
  async function getHotel() {
    const res = await getAPI("hotel");
    return res.data;
  }
  const { data, isFetching } = useQuery("get-list", getHotel);
  const limmitList = data?.data?.slice(0, 4);
  if (isFetching) return <Loading />;
  return (
    <Row
      wrap
      justify="space-between"
      align="center"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
    >
      {limmitList?.map((item) => (
        <div key={item._id}>
          <HomeItemWrapper>
            <div className="head">
              <Image
                preview={{ visible: false }}
                src={item.photo[0]}
                onClick={() => setVisible(true)}
              />
              <div style={{ display: "none" }}>
                <Image.PreviewGroup
                  preview={{ visible, onVisibleChange: (v) => setVisible(v) }}
                >
                  {item.photo.map((img, index) => (
                    <Image src={img} key={index} />
                  ))}
                </Image.PreviewGroup>
              </div>
            </div>
            <div className="middle">
              <div className="title">
                <Typography.Title
                  level={3}
                  style={{ textTransform: "capitalize" }}
                >
                  {item.room_name}
                </Typography.Title>
              </div>
              <div className="paragarph">
                <Typography.Text italic>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.desc,
                    }}
                  />
                </Typography.Text>
              </div>
            </div>
          </HomeItemWrapper>
        </div>
      ))}
    </Row>
  );
};

export default HomeList;