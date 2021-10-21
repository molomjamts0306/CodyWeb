import React from "react";
import styled from 'styled-components';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay} from "swiper";
import {amway, babyworld, baigal, best, coinhub, cybercom, erdenetMall, gobikhangau} from "../../images/partners";
const ContainerStyle = styled.div`
  .hero-container{
    position: relative;
    width: 100%;
  }
  .mouse-scroll{
    position: relative;
    animation: MoveUpDown 1s linear infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }
  span{
    color: #02D4E4;
  }
  h2{
  font-weight: bold;
  font-size: 30px;
  line-height: 58px;
  letter-spacing: 0.25px;
  }
  .hero-maciphone{
    position: relative;
    right: 0;
  }
  .swiper-logos{
    display: flex;
    width: 100%;
    background: white;
    box-shadow: rgb(236 236 236) 4px 10px 20px;
    padding: 10px 50px;
  }
  p{
  color: #8E98AE;
    font-size: 22px;
  }
  .trusted-container{
    z-index: 100;
    position: relative;
    background-color: white;
    box-shadow: 4px 10px 20px rgba(107, 134, 204, 0.09);
  }
  .trusted-title{
    padding: 100px;
  }
  .brands{
    width: 100%;
  }
  ul{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style-type: none;
  }
  li:hover{
    border: 10px;
  }
  .main-banner{
    margin-top: 100px;
  }
  .logos{
    height: 50px;
  }
  .swiper-wrapper{
    background-color: white;
    box-shadow: rgb(236 236 236) 4px 10px 20px;
  }
  .swiper-slide{
    object-fit: contain;
  }
  .logos{
    height: 50px;
    width: 100px;
    object-fit: contain;
    filter: grayscale(100%);
    :hover{
      filter: grayscale(0%);
      transform: scale(1.2);
      transition-duration: 0.2s;
    }
  }
  .hero-title{
    width: 100%;
  }

`;

function Hero() {
    SwiperCore.use([Autoplay])
    return (
        <ContainerStyle>
                    <div id="customers" className="hero-container" >
                        <div className="hero-title" >
                            <Swiper autoplay={{ delay: 6000 ,disableOnInteraction: false }}>
                                <SwiperSlide><img src="/images/banner1.jpg" /></SwiperSlide>
                                <SwiperSlide><img src="/images/banner2.jpg" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

            <Swiper
                slidesPerView={1}
                autoplay={{ delay: 3000 ,disableOnInteraction: false }}
                loop={true}
                loopPreventsSlide={true}
                spaceBetween={0}
                breakpoints={{
                "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 0
                },
                "768": {
                    "slidesPerView": 4,
                    "spaceBetween": 0
                },
                "1024": {
                        "slidesPerView": 5,
                        "spaceBetween": 0
                    }}}
                    >
                <div className="swiper-wrapper">
                    <SwiperSlide><div className="contain-box"><img className="logos" src={amway} alt="trusted-logo" /></div></SwiperSlide>
                    <SwiperSlide><div className="contain-box"><img className="logos" src={babyworld} alt="trusted-logo" /></div></SwiperSlide>
                    <SwiperSlide><div className="contain-box"><img className="logos" src={baigal} alt="trusted-logo" /></div></SwiperSlide>
                    <SwiperSlide><div className="contain-box"><img className="logos" src={best} alt="trusted-logo" /></div></SwiperSlide>
                    <SwiperSlide><div className="contain-box"><img className="logos" src={coinhub} alt="trusted-logo" /></div></SwiperSlide>
                    <SwiperSlide><div className="contain-box"><img className="logos" src={cybercom} alt="trusted-logo" /></div></SwiperSlide>
                    <SwiperSlide><div className="contain-box"><img className="logos" src={erdenetMall} alt="trusted-logo" /></div></SwiperSlide>
                    <SwiperSlide><div className="contain-box"><img className="logos" src={gobikhangau} alt="trusted-logo" /></div></SwiperSlide>
                </div>
            </Swiper>
    </ContainerStyle>
    );
}
export default Hero;
