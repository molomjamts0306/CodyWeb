import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import CodyImage0 from "../../images/thatiscody.svg";
import CodyImage1 from "../../images/codyweb2.png";
import CodyImage2 from "../../images/codyweb3.png";
import {Container, Row, Col} from 'reactstrap';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectFade,Navigation,Pagination} from 'swiper';
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
    font-size:30px;
    line-height: 30px;
    margin-bottom: 30px;
  }
  p{
    color:#8E98AE;
    font-size:22px;
    line-height: 36px;
  }
  .cody-section{
    background: white;
    display: flex;
    justify-content: space-around;
  }
  .d-flex{
    padding: 50px;
  }
`;
SwiperCore.use([EffectFade,Navigation,Pagination]);
function Cody() {
    return (
        <ContainerStyle>
            <Container>
                <div id="cody" className="cody-container">
                <Row>
                        <div className="cody-title">
                        </div>
                            <Row>
                                    <Swiper spaceBetween={30} effect={'fade'} autoplay={{ delay: 3000 ,disableOnInteraction: false }}>
                                        <SwiperSlide>
                                            <div className="cody-section">
                                                <div className="picture">
                                                    <img src={CodyImage0} alt="picture"/>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="title">
                                                        <h3>КОДИ ПЛАТФОРМ</h3>
                                                            <p>Худалдаа, үйлчилгээний бизнест зориулсан, дата, хиймэл оюун ухаанд суурилсан, тасралтгүй
                                                                хөгжүүлэлттэй Цахим худалдааны цогц платформ юм. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="cody-section">
                                                <div className="picture">
                                                    <img src={CodyImage1} alt="picture"/>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="title">
                                                        <h3>ЦАХИМ ХУДАЛДААНЫ ЦОГЦ ПЛАТФОРМ</h3>
                                                        <p>Бид маш бага зардлаар таны бизнесийг цахим орчинд ажиллах боломжийг
                                                            бүрдүүлнэ. Та богино хугацаанд, найдвартай, уян хатан цахим худалдаагаа эхлүүлээрэй </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="cody-section">
                                                <div className="picture">
                                                    <img src={CodyImage2} alt="picture"/>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="title">
                                                        <h3>ПЛАТФОРМЫН ХҮЧИЙГ МЭДЭР</h3>
                                                        <p>Дэлхийн тэргүүлэгч технологиудыг хослуулан ашиглаж, технологийн тасралтгүй
                                                            хөгжүүлэлттээр хэрэглэгч байгууллагыг хангана. Платформын гайхалтай шийдэлүүдийг
                                                            ашиглан борлуулалтаа өсгөөрэй. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                            </Row>

                            </Row>
                </div>
            </Container>
        </ContainerStyle>
    );
}
export default Cody;
