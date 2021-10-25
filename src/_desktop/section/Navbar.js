import React, {useState} from 'react';
import Logo1 from '../../images/logo-dark.svg';
import styled from 'styled-components';
import {Button, Container, Form, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
const ContainerStyle = styled.div`
  .navbar {
    position: fixed;
    width: 100%;
    background-color: rgb(255, 255, 255);
    padding: 20px 0px;
    box-shadow: rgb(0 0 0 / 25%) 0px 0px 20px;
    z-index: 10;
  }

  .Logo-image {
    width: 150px;
  }

  .slogan {
    font-size: 12px;
    font-weight: 500;
    margin: 7px 0px 0px 2px;
    color: rgb(30, 32, 48);
  }

  .menu {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    a {
      display: flex;
      text-decoration: none;
    }
    button {
      border: none;
      background-color: white;
      font-family: "Averta CY", Roboto, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 1.2;
      color: rgb(30, 32, 48);
      margin: 0px 25px;
      transition: all 0.2s ease-in-out 0s;
      :hover {
        color: rgb(131, 38, 226)
      }
    } 
    .btn-contact {
      background: linear-gradient(95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%);
      border-radius: 8px;
      color: rgb(255, 255, 255);
      transition: all 0.1s ease-in-out;
      font-size: 14px;
      padding: 12px 25px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 0;
      :after {
        width: 0;
        height: 20px;
        content: "";
        display: inline-block;
        background-image: url(/images/button-heart.svg);
        background-size: contain;
        background-position: center 2px;
        background-repeat: no-repeat;
        margin-left: 0;
        transform: rotate(45deg);
        transition: all 0.1s ease-in-out 0s;
        animation: animateHeart 1.2s infinite;
      }
      :hover {
        color: white;
        :after{
          width: 20px;
        }
      }
    }
  }
  .top-fit {
    height: 88px;
  }
  .logo {
    text-decoration: none;
  }

  
  @keyframes animateHeart {
    0% {
      transform: rotate(0deg) scale(0.8);
    }
    5% {
      transform: rotate(0deg) scale(0.9);
    }
    10% {
      transform: rotate(0deg) scale(0.8);
    }
    15% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(0deg) scale(0.8);
    }
    100% {
      transform: rotate(0deg) scale(0.8);
    }
  }
`;

const FormContainer = styled.div`
  background-color: rgb(246, 246, 246);
  border-radius: 20px;
.contact-form{
  padding:30px 20px;
 
      .form-control{
          margin-bottom: 15px;
      }
  .btn-close{
    margin-top: -30px;
    margin-right: -30px;
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
  .shrink-lane{
    display: flex;
  }
    `;


const Navbar=(props) => {
    const {
        buttonLabel,
        className
    } = props;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <ContainerStyle>
            <div className="navbar">
                    <Container>
                                    <a className="logo" href="https://cody.mn" ><img className="Logo-image" src={Logo1} alt="Logo" />
                                    <h6 className="slogan"> Таны бизнесийг технологиор хөгжүүлнэ </h6></a>
                            <div className="menu">
                                <a href="/#cody"><button type="button" >Коди Платформ</button></a>
                                <a href="/#solution"><button type="button">Шийдэл</button></a>
                                <a href="/#features"> <button type="button">Боломжууд</button></a>
                                <a href="/#customers"> <button type="button">Харилцагч</button></a>
                                <a href="/about"><Button type="button">Бидний тухай</Button></a>

                                <button type="button" className="btn-contact" onClick={toggle} > {buttonLabel} Холбоо барих </button>
                                <Modal isOpen={modal} toggle={toggle} className={className}>
                                    <FormContainer>
                                    <ModalBody>

                                        <Form className="contact-form">
                                            <div className="shrink-lane">
                                            <Input  placeholder="Овог нэр" type="text"
                                                    className="contact-surname" value=""/><button className="btn-close"></button></div>
                                            <Input  placeholder="И-мэйл" type="text"
                                                    className="contact-surname" value=""/>
                                            <Input  placeholder="Утас" type="text"
                                                    className="contact-surname" value=""/>
                                            <Input  placeholder="Байгууллагын нэр" type="text"
                                                    className="contact-surname" value=""/>
                                        </Form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button className="contact-button"  onClick={toggle}>Илгээх</Button>{' '}
                                    </ModalFooter>
                                    </FormContainer>
                                </Modal>
                            </div>
                    </Container>
            </div>
            <div className="top-fit"></div>
        </ContainerStyle>
    )
};
export default Navbar;
