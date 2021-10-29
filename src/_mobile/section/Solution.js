import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {Container,  ModalBody, Form, Modal} from 'reactstrap';
const ContainerStyle = styled.div`
  .solution-container{
    margin-top: 100px;
    max-width: 100%;
    background-color: white;
    position: relative;
  }
  .solution-title{
    width: fit-content;
    display: flex;
    align-items: center;
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
      height: 20px;
      background-image: url("/images/928fc5cf560d99cd67d70b32d778f396.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right bottom;
      align-self: flex-end;
      margin-bottom: -4px;
      margin-right: -39px;
    }
  }
  .solutions{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0px 7%;
    margin-top: 6%;
    margin-bottom: 7%;
  }
  h1{
    font-weight: bold;
    font-size: 20px;
    line-height: 1.26;
  }
  h5{
    margin-bottom: 10px;
    font-size: 18px;
    color: rgb(136, 85, 241);
    font-family: "Averta CY", sans-serif;
    line-height: 1.26;
    font-style: normal;
    font-weight: bold;
  }
  p{
    font-family: Bull,serif;
    font-size: 15px;
    color: rgb(137, 137, 137);
    font-weight: 300;
  }
  .row-cols-2>*{
    padding: 100px;
  }
  .button{
    display: flex;
    justify-content: center;
  }
  .btn-contact{
    padding: 10px 30px;
    border-radius: 8px;
    background: linear-gradient(95.41deg, #8326E2 34.67%, #5206E1 148.46%);
    color: white;
    font-size: 14px;
    font-weight: 600;
    border: none;
  }
  .featurestopbackground{
    width: 100%!important;
  }
`;
const SolutionContainer = styled(Modal)`
  .modal-content {
    border-radius: 20px;
    border: none;
  }
  .solution-container {
    background-color: rgb(246, 246, 246);
    border-radius: 20px;
    padding: 30px 20px 20px;
    border: none;
    flex-direction: column;
    .contact-form{
      display: flex;
      padding: 0;
      flex-direction: column;
      gap: 20px 80px;
      overflow-y: auto;
      max-height: 450px;
      margin-right: -23px;
      padding-right: 23px;
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
      .form-control{
        margin-bottom: 15px;
      }
      .btn-close{
        margin-top: -30px;
        margin-right: -30px;
      }
    }
    .shrink-lane{
      display: flex;
    }
    .Solution-title{
      color: rgb(30, 32, 48);
      font-weight: bold;
      text-align: center;
      width: fit-content;
      margin: auto;
      ::after{
        content: "";
        width: 40%;
        border-radius: 10px;
        margin: 14px auto;
        height: 3px;
        background-color: rgb(81, 5, 225);
        display: block;
      }
    }
    .solution-item-detail{
      h5{
        color: rgb(136, 85, 241);
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 600;
        text-align: left;
      }
      p{
        font-size: 12px;
        color: rgb(137, 137, 137);
        font-weight: 400;
        margin-bottom: 0px;
      }
    }
  }
  .modal-footer{
    justify-content: center!important;
    padding:20px;
    .contact-button{
      width: 100%;
      background:linear-gradient(
              95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%);
    }
  }
  .btn-close{
  float: right;
}
`;
function Solution(props) {
    const {
        buttonLabel,
        className,
    } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const solutions=[
        {title:'Headless Ecommerce', description:"Headless цахим худалдааны  шийдлээр бизнесийн онцлогтоо тохирох цахим худалдааг бүтээж ирээдүйтэй бэлтгэ"},
        {title:'Multi Store', description:"Ашиглахад хялбар, салбар бизнесүүдийнхээ сүлжээг бий болгож удирдах"},
        {title:'Market Place', description:"Бизнесийн загвартай тохируулан олон төрлийн борлуулагчдын зах зээлийг бий болгох боломжтой"},
        {title:'Media Platform', description:"Медиа платформын тусламжтайгаар контент дээр суурьласан цахим худалдаагаа эхлүүлээрэй"},
        {title:'In App', description:"In app шийдлийн тусламжтайгаар томоохон Цахим хэтэвт, Супер аппликэйшд худалдаагаа өргөжүүлэх"},
        {title:'Digital Wallet', description:"Цахим хэтэвч дээр суурласан төлбөр тооцооны нэмэлт шийдэлүүдийг болгох"},
        {title:'Mobile applications', description:"Андройд болон IOS whitelabel апплекэйшнтэй нэмэлт програмчлалын шаардлаггүй болох"},
        {title:'Page Builder', description:"Прогчлал, кодлох шаардлаггүйгээр контентоо хялбархан бүтээх"},
        {title:'B2B and B2C business', description:"B2C болон B2B Бизнес загварт зориулан хөгжүүлсэн цахим худалдааны нэмэлт боломжууд"},
        {title:'Custom Development', description:"Захиалагчийн хүсэлтийн дагуу нэмэлт хөгжүүлэлт боломжуудыг хөгжүүлэх"},
        {title:'Multi language', description:"Цахим дэлгүүрээ олон хэл дээр гадаад дотоодын үйлчлүүлэгчтэй хүргэх боломжтой"},
        {title:'Online to Offline', description:"Pos (Point of sale), смарт дэлгүүрийн шийдлийн тусламжтай худалдаагаа өргөжүүлэх"},
        {title:'Social Ecommerce', description:"Томоохон сошиал суваг дээр худалдааны орон зайгаа бий болгох боломжууд"},
    ]
    return  (
        <ContainerStyle>
            <Container>
                <div id="solution"  className="solution-container">
                    <div>
                        <div  className="solution-title">
                             <h1>Бидний шийдэл</h1>
                        </div>
                        <div className="solutions">
                            <div className="solution-item1">
                                <h5>B2B, B2C business</h5>
                                <p> B2C болон B2B Бизнес загварт зориулан хөгжүүлсэн цахим худалдааны нэмэлт боломжууд</p>
                            </div>
                            <div className="solution-item2">
                                <h5>In App</h5>
                                <p> In app шийдлийн тусламжтайгаар томоохон Цахим хэтэвт, Супер аппликэйшд худалдаагаа өргөжүүлэх</p>
                            </div>
                            <div className="solution-item3">
                                <h5>Market Place</h5>
                                <p> Бизнесийн загвартай тохируулан олон төрлийн борлуулагчдын зах зээлийг бий болгох боломжтой</p>
                            </div>
                            <div className="solution-item4">
                                <h5>Media Platform </h5>
                                <p> Медиа платформын тусламжтайгаар контент дээр суурьласан цахим худалдаагаа эхлүүлээрэй</p>
                            </div>
                        </div>
                            <div className="button">
                                <button type="button" className="btn-contact" onClick={toggle} > {buttonLabel} Дэлгэрэнгүй </button>
                                    <SolutionContainer size="xl" isOpen={modal} toggle={toggle} className={className}>
                                        <div className="solution-container">
                                            <button className="btn-close" onClick={toggle} />
                                            <h4 className="Solution-title">Шийдлүүд</h4>
                                                <ModalBody>
                                                    <Form className="contact-form">
                                                        {solutions.map((item, idx)=>(
                                                            <div className="solution-item-detail" key={idx}>
                                                                <h5>{item.title}</h5>
                                                                <p>{item.description}</p>
                                                            </div>
                                                        ))}
                                                    </Form>
                                                </ModalBody>
                                        </div>
                                    </SolutionContainer>
                            </div>
                    </div>
                </div>
            </Container>
                <div className="featurestopbackground"><img src="/images/hovertop.jpg" className="w-100" alt="featuresbackground"/> </div>
        </ContainerStyle>
    );
}
export default Solution;
