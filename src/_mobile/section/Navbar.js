import React, {useState} from 'react';
import {Button, Container, Form, Input} from "reactstrap";
import {toast} from "react-toastify";
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import Logo1 from '../../images/mainLogo.svg';
import * as FaIcons from 'react-icons/ai';
const ContainerStyle = styled.div`
  .navbar {
    position: fixed;
    width: 100%;
    background-color: rgb(255, 255, 255);
    padding: 20px 0;
    box-shadow: rgb(0 0 0 / 25%) 0 0 20px;
    z-index: 10;
  }
  .Logo-image {
    width: 100px;
  }
  .top-fit {
    height: 88px;
  }
  .menu-bars {
    background: none;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .nav-menu {
    background-color: #8855F1;
    height: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 450ms;
  }
  .nav-menu-items{
    list-style-type: none;
  }
  .nav-menu.active {
    width: 80%;
    right: 0%;
    
  }

  .nav-text {
    display: flex;
    list-style: none;
  }

  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 14px;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px 0;
    border-radius: 4px;
  }
  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    text-align: right;
    padding: 20px 0;
    list-style-type: none;
  }
  .sidebarClose{
    cursor: pointer;
    color: white;
    width: 25px;
    height: 25px;
  }
  .contact-text{
    border-radius: 16px;
    font-size: 13px;
    width: 100%;
    margin:  20px 0;
    color: #495057;
  }
  .contact-button{
    width: 100%;
    border-radius: 16px;
    border: 1px solid rgba(2, 212, 228);
    background: rgb(2, 212, 228);
  }
  .copyright{
    margin: 20px 0 ;
    color: #ffffff;
    font-size: 11px;
    text-align: center;
  }
`;
const sidebarMenu =[
    {id:'1',title:'Коди Платформ',link:'/#cody'},
    {id:'2',title:'Шийдэл',link:'/#solution'},
    {id:'3',title:'Боломжууд',link:'/#features'},
    {id:'4',title:'Харилцагч',link:'/#hero'},
    {id:'5',title:'Бидний тухай',link:'/#about'},
]
const Navbar=({ buttonLabel, className }) => {
    const [modal, setModal] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const notify = () => {
        toast.success("Амжилттай бүртгэгдлээ !");
        setModal(!modal);
    }

    return (
        <ContainerStyle>
            <div className="navbar">

                    <a className="logo" href="https://cody.mn" >
                        <img className="Logo-image" src={Logo1} alt="Logo" />
                    </a>

                    <FaIcons.AiOutlineMenu onClick={showSidebar} className="menu-bars" />
                        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                            <Container>
                            <ul className='nav-menu-items' >
                                <div className='navbar-toggle' >
                                    <div><FaIcons.AiOutlineClose className="sidebarClose" onClick={showSidebar}/></div>
                                </div>
                                {sidebarMenu.map((item, index) =>{
                                    return(
                                        <li key={index} className="nav-text">
                                            <a href={item.link}>
                                            <span>{item.title}</span>
                                            </a>
                                        </li>
                                    )
                                })}
                                <Form className="contact-form">
                                    <div className="shrink-lane">
                                        <Input placeholder="Овог нэр" type="text" className="contact-text" />
                                        <Input placeholder="И-мэйл" type="text" className="contact-text" />
                                        <Input placeholder="Утас" type="text" className="contact-text" />
                                        <Input placeholder="Байгууллагын нэр" type="text" className="contact-text" />
                                        <Button className="contact-button" onClick={notify}><span>Хамтрах</span></Button>
                                    </div>
                                </Form>
                                <p className="copyright">©2021 Cody Inc. All rights reserved. </p>
                            </ul>
                            </Container>
                        </nav>
            </div>
            <div className="top-fit" />
        </ContainerStyle>
    )
};

export default Navbar;
