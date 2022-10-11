import React from "react";
import styled from "styled-components";
import { Carousel, Image } from "antd";
export var Banner = () => {
  let bannerImage = [
    {
      id: 1,
      text: "Hà nội",
      url: "https://vcdn1-dulich.vnecdn.net/2022/05/12/Hanoi2-1652338755-3632-1652338809.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=NxMN93PTvOTnHNryMx3xJw",
    },
    {
      id: 2,

      url: "https://www.tripsavvy.com/thmb/BHG9Xa_H59w8uNR51eldY4jlfP8=/4096x2730/filters:fill(auto,1)/ho-chi-minh-city-at-night-22c7df816ce4493eb0e86cf54fe03309.jpg",
    },
    {
      id: 3,

      url: "https://statics.vinpearl.com/du-lich-da-nang_1657939501.JPG",
    },
    {
      id: 4,

      url: "https://i1-dulich.vnecdn.net/2022/09/19/-4419-1663579681.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=IfYeHWH44jQBGZjZL85foQ",
    },
    {
      id: 5,

      url: "https://i1-dulich.vnecdn.net/2022/09/14/7-1663171465.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=h8Le5dwLusXpKrmsp_op5A",
    },
  ];
  return (
    <BannerStyle>
      <Carousel autoplay>
        {bannerImage.map((img) => (
          <div key={img.id}>
            <img src={img.url} />
          </div>
        ))}
      </Carousel>
    </BannerStyle>
  );
};
const BannerStyle = styled.div`
  img {
    width: 100%;
    height: 650px;
  }
`;
export var FooterFake = () => {
  return <></>;
};
