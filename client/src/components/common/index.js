import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import styled from 'styled-components';
export var Banner = () => {
  let bannerImg = 'https://bookingcare.vn/assets/anh/bookingcare-cover-4.jpg';
  return (
    <BannerStyle>
      <img alt="banner" src={bannerImg} />
      <section className="banner-text">
        <TypeWriterEffect
          startDelay={2000}
          cursorColor="#fff"
          multiText={[
            'Medical Booking',
            'Nền tảng Y Tế chăm sóc sức khỏe ',
            'Đặt Lịch Khám',
            'Tận Tình Chu Đáo',
            'Chuyên  Sâu và Tổng Quát',
          ]}
          multiTextDelay={1000}
          typeSpeed={30}
        />
      </section>
    </BannerStyle>
  );
};
const BannerStyle = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 750px;
    filter: brightness(45%);
  }
  .banner-text {
    position: absolute;
    top: 50%;
    left: 40%;
  }
  .react-typewriter-text {
    color: #fff !important;
    font-size: 35px !important;
  }
`;
export var CarouselList=(props)=>{
return(
  <>
  
  </>
)
}