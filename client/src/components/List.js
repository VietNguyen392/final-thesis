import React from 'react';
import { List, Card, Image } from 'antd';
const ListItem = () => {
  const { Meta } = Card;
  let bannerImage = [
    {
      id: 1,
      text: 'Hà nội',
      url: 'https://vcdn1-dulich.vnecdn.net/2022/05/12/Hanoi2-1652338755-3632-1652338809.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=NxMN93PTvOTnHNryMx3xJw',
    },
    {
      id: 2,
      text: 'Hồ chí minh',
      url: 'https://www.tripsavvy.com/thmb/BHG9Xa_H59w8uNR51eldY4jlfP8=/4096x2730/filters:fill(auto,1)/ho-chi-minh-city-at-night-22c7df816ce4493eb0e86cf54fe03309.jpg',
    },
    {
      id: 3,
      text: 'Đà nẵng',
      url: 'https://statics.vinpearl.com/du-lich-da-nang_1657939501.JPG',
    },
    {
      id: 4,
      text: 'Thôn quê',
      url: 'https://i1-dulich.vnecdn.net/2022/09/14/7-1663171465.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=h8Le5dwLusXpKrmsp_op5A',
    },
  ];
  return (
    <div>
      <List
        grid={{
          gutter: 16,
          column: 4,
        }}
        dataSource={bannerImage}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={
                <Image src={item.url} style={{ width: 250, height: 200 }} />
              }
            >
              <Meta title={item.text} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListItem;
