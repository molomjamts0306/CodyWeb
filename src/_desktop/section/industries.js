import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {Container} from 'reactstrap';
import {Swiper, SwiperSlide} from "swiper/react";
import Icons from "../../components/Icons";
import webIcon from "../../components/webIcon";
const ContainerStyle = styled.div`
  .industries-container{
    margin-top: 100px;
    max-width: 100%;
    max-height: 100%;
    background-color: white;
    position: relative;
  }
  .industries-title{
    width: fit-content;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    margin: 0px auto 50px;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: rgb(30, 32, 48);
    ::before{
      content: "";
      display: block;
      width: 200px;
      height: 25px;
      background-image: url("/images/83912c6ad1f546c60160cc940c3e03c4.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right bottom;
      align-self: flex-end;
      margin-bottom: -4px;
      margin-right: -39px;
    }
  }
  h1{
    font-weight: bold;
    font-size: 30px;
    line-height: 1.26;
  }
  .industries-item-detail{
    position: relative;
    //max-width: 100%;
    object-fit: contain;
  }
  .industry-section {
    display: flex;
    justify-content: space-between;
  }
    .industry-button {
      flex: 0 0 250px;
      min-height: 500px;
      margin-right: 40px;
      max-height: 650px;
      overflow: hidden auto;
      transform: rotateY(
              180deg);
      ul{
        transform: rotateY(
                180deg);
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
      ::-webkit-scrollbar{
        width: 4px;
      }
      ::-webkit-scrollbar-thumb{
        height: 5px;
        border-radius: 100px;
        background-color: rgb(136, 85, 241);
      }
      ::-webkit-scrollbar-track{
        border-radius: 10px;
        box-shadow: rgb(206 207 215) 0px 0px 4px inset;
      }
    }
    .industry-swiper {
      flex: 1;
      max-width: 100%;
      overflow: hidden;
      //width: 800px;
    }
  .swiper-slide img {
    object-fit: contain;
    width: 100%;
  }
  .tech-list{
    margin-right: 20px;
  }
  .item-wrapper{
    display: flex;
    align-items: center;
    border: none;
    margin: 0 0 10px;
    background-color: white;
    &:hover, &.active{
      color: rgb(136, 85, 241);
      transition-duration: 0.5s;
    }
    :focus{
      color: #8855F1;
    }
  }
  .indust-icon{
    background-color: transparent;
    width: 48px;
    height: 48px;
    padding: 10px;
    border-radius: 6px;
    margin-right: 20px;
    &:hover ,&.active{
      background-color: #8855F1!important;
    }
    &:focus{
      background-color: #8855F1!important;
    }
  }
`;
const industries = [
    { id: 1, title: '??????????????????', icon: Icons.tech, iconActive: Icons.techActive },
    { id: 2, title: '????????????, ????????????', icon: Icons.cloth, iconActive: Icons.clothActive },
    { id: 3, title: '?????? ????????', icon: Icons.homeshop, iconActive: Icons.homeshopActive },
    { id: 4, title: '??????, ????????????', icon: Icons.song, iconActive: Icons.songActive },
    { id: 5, title: '????????????????', icon: Icons.brend, iconActive: Icons.brendActive },
    { id: 6, title: '?????????? ????????????', icon: Icons.finance, iconActive: Icons.financeActive },
    { id: 7, title: '??????????, ????????????????', icon: Icons.travel, iconActive: Icons.travelActive },
    { id: 8, title: '??????????, ????????????????', icon: Icons.ticket, iconActive: Icons.ticketActive },
    { id: 9, title: '??????????', icon: Icons.media, iconActive: Icons.mediaActive },
    { id: 10, title: '?????????? ??????', icon: Icons.pharm, iconActive: Icons.pharmActive },
    { id: 11, title: '?????????????? ??????????????', icon: Icons.market, iconActive: Icons.marketActive },
    { id: 12, title: '?????????? & ????????????', icon: Icons.vaycher, iconActive: Icons.vaycherActive },
    { id: 13, title: '???????? ??????????', icon: Icons.diamond, iconActive: Icons.diamondActive },
    { id: 14, title: '????????????', icon: Icons.flight, iconActive: Icons.flightActive },
    { id: 15, title: '??????????????', icon: Icons.furniture, iconActive: Icons.furnitureActive },
    { id: 16, title: '????????????', icon: Icons.child, iconActive: Icons.childActive },
    { id: 17, title: '??????, ????????????', icon: Icons.goo, iconActive: Icons.gooActive },
];
const web = [
    { id: 1,  icon: webIcon.tech },
    { id: 2,  icon: webIcon.lux },
    { id: 3,  icon: webIcon.homeshop },
    { id: 4,  icon: webIcon.duu },
    { id: 5,  icon: webIcon.brand },
    { id: 6,  icon: webIcon.wallet },
    { id: 7,  icon: webIcon.travel },
    { id: 8,  icon: webIcon.even },
    { id: 9,  icon: webIcon.ubp },
    { id: 10,  icon: webIcon.pharm },
    { id: 11,  icon: webIcon.grocery },
    { id: 12,  icon: webIcon.coupon },
    { id: 13,  icon: webIcon.jewelry },
    { id: 14,  icon: webIcon.nisleg },
    { id: 15,  icon: webIcon.tavilga },
    { id: 16,  icon: webIcon.kids },
    { id: 17,  icon: webIcon.cose },
];
function Industries() {
    const [index, setIndex] = React.useState(0);
    const [swiper, setSwiper] = React.useState(null);
    return (
            <Container>
                <ContainerStyle>
                    <div  className="industries-container">
                        <div className="industries-title">
                            <h1>?????????? ?????????????? ???? ???? ???????????? ?????????? ?????</h1>
                        </div>
                        <div className="industry-section">
                            <div className="industry-button">
                                <ul className="industry-menus">
                                    {industries.map((item,i) =><button className={`item-wrapper ${index === i ? 'active' : ''}`} onClick={() => swiper ? swiper.slideTo(i) : false}>
                                        <img className="indust-icon" src={index === i ? item.iconActive : item.icon} alt=""/>
                                        <span className="indust-title">{item.title}</span>
                                    </button>)}
                                </ul>
                            </div>
                                <div className="industry-swiper">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={100}
                                        navigation={true}
                                        onSlideChange={(e) => setIndex(e.realIndex)}
                                        onSwiper={setSwiper}
                                        >
                                        {web.map((c, idx)=>(
                                            <SwiperSlide className="industries-item-detail" key={idx}>
                                                    <img src={c.icon} alt="industry-slide"/>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                        </div>
                    </div>
                </ContainerStyle>
            </Container>
    );
}
export default Industries;
