import React from 'react';
import { List, Card, Image } from 'antd';
const ListItem = () => {
  const { Meta } = Card;
  let bannerImage = [
    {
      id: 1,
      text: 'Hà nội',
      url: 'https://vcdn1-dulich.vnecdn.net/2022/05/12/Hanoi2-1652338755-3632-1652338809.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=NxMN93PTvOTnHNryMx3xJw',
      desc: 'Far far away, behind the word mountains, far from the countries',
    },
    {
      id: 2,
      text: 'Hồ chí minh',
      url: 'https://www.tripsavvy.com/thmb/BHG9Xa_H59w8uNR51eldY4jlfP8=/4096x2730/filters:fill(auto,1)/ho-chi-minh-city-at-night-22c7df816ce4493eb0e86cf54fe03309.jpg',
      desc: 'Far far away, behind the word mountains, far from the countries',
    },
    {
      id: 3,
      text: 'Đà nẵng',
      url: 'https://statics.vinpearl.com/du-lich-da-nang_1657939501.JPG',
      desc: 'Far far away, behind the word mountains, far from the countries',
    },
    {
      id: 4,
      text: 'Cần thơ',
      url: 'https://i1-kinhdoanh.vnecdn.net/2020/10/19/121774598-699865344269296-8580-6401-9195-1603091427.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=paH5a01rkIuKMBX-izUc2w',
      desc: 'Far far away, behind the word mountains, far from the countries',
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
              style={{ width: 255 }}
              cover={<Image src={item.url} style={{ width: 255, height: 200 }} />}
            >
              <Meta
                title={item.text}
                style={{ textTransform: 'capitalize' }}
                description={item.desc}
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListItem;
