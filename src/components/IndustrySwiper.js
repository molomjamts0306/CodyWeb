/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import prev from '../images/left.svg';
import next from '../images/right.svg';
import menus from "./Menus";


const IndustryWrapper = styled.div`
  position: relative;
  .box-shadow {
    display: block;
    border-radius: 32px;
    box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  .swiper-container {
    border-radius: 32px;
  }
  .swiper-slide {
    img {
      width: 100%;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-size: 10px;
    background-color: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.09);
    background-position: center;
  }
  .swiper-button-prev {
    background-image: url('${prev}');
    background-position-x: 12px;
    left: 16px;
  }
  .swiper-button-next {
    background-image: url('${next}');
    background-position-x: 16px;
    right: 16px;
  }
  @media all and (max-width: 600px) {
    .swiper-slide {
      img {
        display: block;
        margin: 0 auto;
        width: calc(100% - 130px);
        border-radius: 45px;
      }
    }
  }
`;

const params = {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    navigation: true,
    autoplay: { delay: 4000, disableOnInteraction: true },
};

const IndustrySwiper = ({ swiper, setSwiper, setIndex }) => (
    <IndustryWrapper className="industry-swiper">
        <div className="box-shadow">
            <Swiper
                {...params}
                onSwiper={setSwiper}
                onSlideChange={(e) => setIndex(e.realIndex)}
                onMouseEnter={() => swiper && swiper.autoplay.stop()}
                onMouseLeave={() => swiper && swiper.autoplay.start()}
            >
                {menus?.map((cc) => (
                    <SwiperSlide key={cc.title}>
                        {cc.img && <img src={window.innerWidth > 991 ? cc.img : cc.mobileImg || cc.img} alt={cc.title} />}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </IndustryWrapper>
);
export default IndustrySwiper;