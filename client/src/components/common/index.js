import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import styled from 'styled-components';
export var Banner=()=>{
    let bannerImg='https://bookingcare.vn/assets/anh/bookingcare-cover-4.jpg'
    return(
        <BannerStyle>
         {/* <img alt='banner'src={bannerImg}/> */}
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
        </BannerStyle>
    )
}
const BannerStyle=styled.div`
img{
    width:550px:
    height:550px:
}
`
