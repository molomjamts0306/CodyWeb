import React from "react";
import styled from 'styled-components';
import {Container, Row} from 'reactstrap';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectFade,Navigation,Pagination} from 'swiper';
SwiperCore.use([EffectFade,Navigation,Pagination]);
const ContainerStyle = styled.div`
 .cody-container{
margin-top: 50px;
width: 100%;
background-color: white;
position: relative;
}
 .title{
justify-content: center;
align-items: flex-start;
}
 h3{
color: #1E2030;
font-weight: bold;
font-size:20px;
line-height: 30px;
margin-bottom: 30px;
text-align: center;
}
 p{
color:#8E98AE;
font-size:15px;
line-height: 15px;
text-align: center;
}
 .cody-section{
background: white;
display: flex;
justify-content: space-around;
flex-direction: column;
}
 .d-flex{
padding: 50px;
}
 .picture{
img{
  padding: 50px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
}
 .bullets{
display: flex; 
justify-content: center;
}
 .circle-button{
padding: 6px;
margin: 10px;
border-radius: 100px;
background-color: rgb(238, 238, 238);
&.active,
:active{
  background-color: rgb(135, 83, 240);
}
border: none;
}
`;
const slides = [{
    title: 'КОДИ ПЛАТФОРМ',
    link:'https://cdn5.shoppy.mn/img/82008/0x0xwebp/shoppy10.png?h=2935d0aea8cdff34d20f429fcef48744910ed6a9',
    description: 'Худалдаа, үйлчилгээний бизнест зориулсан, дата, хиймэл оюун ухаанд суурилсан, тасралтгүй хөгжүүлэлттэй Цахим худалдааны цогц платформ юм. ',
},{
    title: 'ЦАХИМ ХУДАЛДААНЫ ЦОГЦ ПЛАТФОРМ',
    link:'https://cdn5.shoppy.mn/img/82007/0x0xwebp/next10.png?h=2935d0aea8cdff34d20f429fcef48744910ed6a9',
    description: 'Бид маш бага зардлаар таны бизнесийг цахим орчинд ажиллах боломжийг бүрдүүлнэ. Та богино хугацаанд, найдвартай, уян хатан цахим худалдаагаа эхлүүлээрэй',
},{
    title: 'ПЛАТФОРМЫН ХҮЧИЙГ МЭДЭР',
    link:'https://cdn5.shoppy.mn/img/82006/0x0xwebp/CONVERSE10.png?h=2935d0aea8cdff34d20f429fcef48744910ed6a9',
    description: 'Дэлхийн тэргүүлэгч технологиудыг хослуулан ашиглаж, технологийн тасралтгүй хөгжүүлэлттээр хэрэглэгч байгууллагыг хангана. Платформын гайхалтай шийдэлүүдийг ашиглан борлуулалтаа өсгөөрэй.',
}];
function Cody() {
    const [index, setIndex] = React.useState(0);
    const [swiper, setSwiper] = React.useState(null);
    return (
        <ContainerStyle>
            <Container>
                <div id="cody" className="cody-container">
                    <Row>
                        <div className="cody-title" />
                        <Row>
                            <Swiper
                                spaceBetween={30} effect={'fade'}
                                autoplay={{ delay: 3000 ,disableOnInteraction: false }}
                                onSlideChange={(c) => setIndex(c.realIndex)}
                                onSwiper={setSwiper}
                                >
                                {slides.map((item,i) =>
                                        (<SwiperSlide>
                                            <div className="cody-section">
                                                <div className="picture">
                                                    <img src={item.link} alt="picture"/>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="title">
                                                        <h3>{item.title}</h3>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                ))}
                            </Swiper>
                                <div className="bullets">
                                {slides.map((item,idx)=>(
                                        <button type="button" className={`circle-button ${index === idx ? 'active' : ''}`} onClick={() => swiper ? swiper.slideTo(idx) : false}>
                                        </button>
                                ))}
                                </div>
                        </Row>
                    </Row>
                </div>
            </Container>
        </ContainerStyle>
    );
}
export default Cody;
