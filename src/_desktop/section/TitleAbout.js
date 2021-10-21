import React from "react";
import {Container} from "reactstrap";
import styled from 'styled-components';
import titleImg from '../../images/titlebanner.jpg'

const ContainerComp = styled.div`
.dynamic-row{
  margin-top: 6%;
  margin-bottom: 10%;
}
  .row{
    margin-left: -8px;
    margin-right: -8px;
  }
  .col-2{
    padding-left: 8px;
    padding-right: 8px;
  }
  .col-5{
    padding-left: 8px;
    padding-right: 8px;
  }
  .title-container{
    display: flex;
    margin-top: 150px;
  }
  .aboutImg{
    height: 500px;
  }
  .title{
    strong{
      font-family: "Averta CY";
      font-weight: bolder;
    }
  }
`;
function TitleAbout() {
    return(
        <ContainerComp>
            <Container>
                <div className="dynamic-row">
                    <div className="row">
                        <div className="col-2">

                        </div>
                        <div className="col-5">
                            <div className="title-container">
                                <div className="title">
                                    <p><strong>Бидний тухай</strong></p>
                                    <p>Коди ХХК нь худалдаа, үйлчилгээний бизнест зориулсан, дата, хиймэл оюун
                                        ухаанд суурилсан, тасралтгүй хөгжүүлэлттэй цогц платформыг хөгжүүлж зах зээлд
                                        амжилттай нэвтрүүлэн ажиллаж байна. Өнөөдрийн байдлаар Коди нь дотоодын 100
                                        гаруй томоохон компаниудад платформ түрээсийн үйлчилгээгээ үзүүлж, нийт 1 сая
                                        давсан хэрэглэгчдэд хүрч, дотоодын томоохон 15 орчим банк болон финтек төслүүдэд
                                        системийн дэмжлэг үзүүлж, нийт 1,000 гаруй компанид ямар нэгэн байдлаар шийдлээ
                                        түгээж, 20 гаруй салбарыг цахимжуулан ажиллаж байна.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="dynamic-banner">
                                <div className="aboutImage">
                                    <img className="aboutImg" src={titleImg} alt="aboutImage"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </ContainerComp>
    );
}
export default TitleAbout;