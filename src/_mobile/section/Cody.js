import React from "react";
import styled from 'styled-components';
import {Container, Row} from 'reactstrap';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectFade,Navigation,Pagination} from 'swiper';
import CodyImage0 from "../../images/thatiscody.svg";
import CodyImage1 from "../../images/codyweb2.png";
import CodyImage2 from "../../images/codyweb3.png";

SwiperCore.use([EffectFade,Navigation,Pagination]);

const ContainerStyle = styled.div`
  .cody-container{
    margin-top: 50px;
    width: 100%;
    background-color: white;
    position: relative;
  }
  .title{
    display: flex;
    flex-direction: column;
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
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const slides = [{
    title: 'КОДИ ПЛАТФОРМ',
    image: CodyImage0,
    description: 'Худалдаа, үйлчилгээний бизнест зориулсан, дата, хиймэл оюун ухаанд суурилсан, тасралтгүй хөгжүүлэлттэй Цахим худалдааны цогц платформ юм. ',
},{
    title: 'ЦАХИМ ХУДАЛДААНЫ ЦОГЦ ПЛАТФОРМ',
    image: CodyImage1,
    description: 'Бид маш бага зардлаар таны бизнесийг цахим орчинд ажиллах боломжийг бүрдүүлнэ. Та богино хугацаанд, найдвартай, уян хатан цахим худалдаагаа эхлүүлээрэй',
},{
    title: 'ПЛАТФОРМЫН ХҮЧИЙГ МЭДЭР',
    image: CodyImage2,
    description: 'Дэлхийн тэргүүлэгч технологиудыг хослуулан ашиглаж, технологийн тасралтгүй хөгжүүлэлттээр хэрэглэгч байгууллагыг хангана. Платформын гайхалтай шийдэлүүдийг ашиглан борлуулалтаа өсгөөрэй.',
}];
function Cody() {
    return (
        <ContainerStyle>
            <Container>
                <div id="cody" className="cody-container">
                    <Row>
                        <div className="cody-title" />
                        <Row>
                            <Swiper spaceBetween={30} effect={'fade'} autoplay={{ delay: 3000 ,disableOnInteraction: false }}>
                                {
                                    slides.map((c) =>
                                        <SwiperSlide>
                                            <div className="cody-section">
                                                <div className="picture">
                                                    <img src={c.image} alt="picture"/>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="title">
                                                        <h3>{c.title}</h3>
                                                        <p>{c.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        </Row>
                    </Row>
                </div>
            </Container>
        </ContainerStyle>
    );
}
export default Cody;
