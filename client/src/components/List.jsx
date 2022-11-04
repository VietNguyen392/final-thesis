import React, { useEffect, useState } from "react";
import { getAPI } from "service";
import RoomInfo from "./RoomInfo";
import { List, Card, Image, Modal } from "antd";
import { useQuery } from "react-query";

const ListItem = () => {
  const [state, setState] = useState({
    dataList: [],
  });

  const { dataList } = state;
  const { Meta } = Card;
  useEffect(() => {
    getAPI("hotel").then((res) =>
      setState((p) => ({
        ...p,
        dataList: res?.data?.data?.map((x) => {
          return {
            id: x._id,
            rName: x.room_name,
            avatar: x.photo,
            desc: x.desc,
            price: x.room_price,
          };
        }),
      }))
    );
  }, []);

  return (
    <div>
      <List
        grid={{
          gutter: 16,
          column: 4,
        }}
        dataSource={dataList}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              style={{ width: 255 }}
              cover={
                <Image
                  src={item.avatar[0]}
                  style={{ width: 255, height: 200 }}
                />
              }
            >
              <Meta
                title={item.rName}
                style={{ textTransform: "capitalize" }}
              />
              <p>{item.price}$/perNight</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListItem;
