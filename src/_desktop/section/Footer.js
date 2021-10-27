import React from "react";
import {toast, ToastContainer} from "react-toastify";
import styled from 'styled-components';
import {Container} from 'reactstrap';
import Icons from  "../../components/Icons";

const ContainerStyle = styled.div`
  .footer-container{
  margin-top: 100px;
  }
  .subscribe{
    transform: translate(-50%, -50%);
    width: 800px;
    position: absolute;
    margin: 0 auto;
    background: rgb(255, 255, 255);
    left: 50%;
    padding: 20px 50px;
    box-shadow: rgb(0 0 0 / 20%) 0 12px 28px;
    ::before{
      content: "";
      width: 0;
      height: 0;
      top: 0;
      border-style: solid;
      border-width: 0 0 64px 64px;
      border-color: transparent transparent rgb(238, 238, 238);
      position: absolute;
      left: -64px;
      background-size: 22px;
      background-position: center center;
    }
    ::after{
      content: "";
      width: 0;
      height: 0;
      top: 0;
      border-style: solid;
      border-width: 64px 0 0 64px;
      border-color: transparent transparent transparent rgb(238, 238, 238);
      position: absolute;
      right: -64px;
      background-size: 22px;
      background-position: center center;
    }
  }
  .email-input {
    height: 50px;
    font-size: 16px;
    padding-left: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    .form-control{
      display: block;
      width: 100%;
      height: calc(1.5em + .75rem + 2px);
      padding: .375rem .75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: .25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
  }
  .subscribe-button{
  border: none;
  position: absolute;
  right: 55px;
  top: 69px;
  height: 40px;
  border-radius: 3px;
  background: rgb(136, 85, 241);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0 30px;
  } 
  .footer-menu{
    display: flex;
    border-top: unset;
    background: url(/images/rightbottom.svg) right bottom no-repeat,
                url(/images/leftbottom.png) left bottom no-repeat,
    linear-gradient(93.32deg, rgb(142, 45, 226) 0%, rgb(142, 45, 226) 12.62%, rgb(77, 2, 224) 88.36%, rgb(76, 2, 224) 100.96%,
            rgba(75, 1, 224, 0.043) 100.97%, rgba(74, 0, 224, 0) 100.98%, rgb(74, 0, 224) 100.98%, rgb(77, 2, 224) 100.98%);
    padding: 120px 40px 30px;
  } 
  hr{
    background-color: rgba(255, 255, 255, 0.5)
  }
  .menu-row{
  display: flex;
  justify-content: space-between;
  flex-shrink: 1;
  }
  .icon-column{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 1;
  }
  ul{
    list-style-type: none;
    text-align: left;
    padding: 0;
  }
  li{
    margin: 10px 0;
    font-weight: 400;
    font-size: 13px;
  }
  a{
    display: flex;
    text-decoration: none;
    color: rgb(231, 231, 231);
  }
  h3{ 
    text-align: left;
    margin-bottom: 20px;
    font-size: 15px;
    font-weight: 700;
    color: rgb(255, 255, 255);
  }
  .bottom-menu-row{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    margin-top: 40px;
  }
  .icon-column {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    ul{
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin-top: 20px;
      padding-right: 142px!important;
    }
  }
  .icon {
    width: 18px;
    height: 18px;
    margin-right:  5px;
  }
  h4 {
    font-weight: 700;
    margin-bottom: 15px;
  }
  .copyright-section{
    display: flex;
    margin-top: 60px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(255, 255, 255);
  }
  .footer-lists{
    a{
      color: rgb(255, 255, 255);
      font-size: 14px;
      margin-bottom: 0;
      :hover{
        color: white;
      }
    }
    p{
      font-size: 12px;
      margin-bottom: 20px;
      color: rgb(255, 255, 255);
      opacity: 0.7;
    }
  }
  .cody{
    width: 100px;
  }
  .subscribe-button{
    background-image: url("/images/mail.svg");
    background-repeat: no-repeat;
    background-size: 22px;
    background-position: center center;
    ::before{
      content: "";
      background-repeat: no-repeat;
      width: 23px;
      height: 20px;
      background-size: 22px;
      background-position: center center;
      }
    }
`;

const links = [
    { id: 1, title: 'Airlink', link:'http://airlink.mn',description:'Нислэгийн билет' },
    { id: 2, title: '24auto', link:'http://24auto.mn',description:'авто сэлбэг' },
    { id: 3, title: 'Comf', link:'http://comf.mn',description:'хүүхдийн тавилга' },
    { id: 4, title: 'Haus', link:'http://haus.mn',description:'барилгын материал' },
    { id: 5, title: 'Amway', link:'http://amway.mn',description:'гэр ахуй' },
    { id: 6, title: 'Zanadu', link:'http://zanadu.mn',description:'дарс' },
    { id: 7, title: 'shoppyLux', link:'http://shoppylux.mn',description:'the luxury you deserve' },
    { id: 8, title: 'Micheal&Amazonka', link:'http://michealamazonka.mn',description:'Фейшн' },
    { id: 9, title: 'UB passport', link:'http://ubpass.mn',description:'Лайфстайл' },
    { id: 10, title: 'Mild cosmetics', link:'http://mildcosmetics.mn',description:'гоо сайхан' },
    { id: 11, title: 'Metro express', link:'http://metroexpress.mn',description:'гэр ахуй' },
    { id: 12, title: 'Аянчин', link:'http://aynchin.mn',description:'аяны хэрэгсэл хувцас' },
    { id: 13, title: 'Cose', link:'http://cose.mn',description:'арьс арчилгаа' },
    { id: 14, title: 'JoinMe', link:'http://joinme.mn',description:'Аялал' },
    { id: 15, title: 'Таван нүдэн', link:'http://tavannuden.mn',description:'үнэт эдлэл' },
    { id: 16, title: 'Carters', link:'http://carters.mn',description:'хүүхдийн хувцас' },
    { id: 17, title: 'Smart store', link:'http://smartstore.mn',description:'электроникс' },
    { id: 18, title: 'Цэцэгт мэндчилгээ', link:'http://flower.mn',description:'бэлэг дурсгал' },
    { id: 19, title: 'Wellbee', link:'http://wellbee.mn',description:'арчилгаа' },
    { id: 20, title: 'Ger place', link:'http://gerplace.mn',description:'тавилга' },
    { id: 21, title: 'Baby world', link:'http://babyworld.mn',description:'хүүхдийн' },
    { id: 22, title: 'Gobi khangai', link:'http://govikhangai.mn',description:'тавилга' },
    { id: 23, title: 'Home shopping', link:'http://homeshopping.mn',description:'гэр ахуй' },
    { id: 24, title: 'Khur', link:'http://khur.mn',description:'арьсан эдлэл' },
    { id: 25, title: 'Sarnai', link:'http://sarnai.mn',description:'бэлэг дурсгал' },
    { id: 26, title: 'Premium taste', link:'http://premiumtaste.mn',description:'коньяк, виски, дарс' },
    { id: 27, title: 'Nature republic', link:'http://naturerepublic.mn',description:'арьс арчилгаа' },
    { id: 28, title: 'Shoez', link:'http://shoez.mn',description:'гутал' },
    { id: 29, title: 'Tanpopo', link:'http://tanpopo.mn',description:'хүүхдийн' },
    { id: 30, title: 'Zanadu', link:'http://zanadu.mn',description:'дарс' },
    { id: 31, title: 'Inktop', link:'http://inktop.mn',description:'бичиг хэрэг' },
    { id: 32, title: 'itStore', link:'http://itstore.mn',description:'электроникс' },
    { id: 33, title: 'eSansar', link:'http://esansar.mn',description:'хүнс' },
    { id: 34, title: 'Baigal', link:'http://baigal.mn',description:'үнэт эдлэл' },
    { id: 35, title: 'Amar', link:'http://amar.mn',description:'даатгал' },
    { id: 36, title: 'Некст электроникс', link:'http://next.mn',description:'цахилгаан бараа' },
];
const platform = [
    { id: 1, title: 'Платформын тухай' },
    { id: 2, title: 'Шийдэл' },
    { id: 3, title: 'Онцлог, боломжууд' },
    { id: 4, title: 'Бизнесийн төрөл' },
    { id: 5, title: 'Харилцагчид' },
];
const about = [
    { id: 1, title: 'Танилцуулга' },
    { id: 2, title: 'Үйлчилгээний төрөл' },
    { id: 3, title: 'Хамтрагч байгууллага' },
    { id: 4, title: 'Холбоо барих' },
];
const contact = [
    { id: 1, title: 'Утас: 7777-8985' },
    { id: 2, title: 'Имэйл: info@cody.mn' },
    { id: 3, title: 'Хаяг: Нью Хоризон оффис, 401 тоот, Улаанбаатар хот' },
];
const social = [
    { id: 1, title: 'instagram', link:'https://www.instagram.com/cody.tech/',icon:Icons.instagram },
    { id: 2, title: 'facebook', link:'https://www.facebook.com/codymongolia',icon:Icons.facebook },
];

function Footer() {
    const notify = () => toast.success("Амжилттай илгээгдлээ !");
    return (
        <ContainerStyle>
            <Container>
                <ToastContainer />
                <div className="footer-container">
                    <div className="subscribe">
                        <h4>Биднийг дагаарай</h4>
                        <form className="">
                            <input name="" placeholder="Таны имэйл" type="text"
                                   className="email-input form-control" />
                            <button type="button" onClick={notify} className="subscribe-button"/>

                        </form>
                    </div>
                </div>
            </Container>
            <div className="footer-menu">
                <Container>
                    <div className="menu-row">
                        <div className="menu-column">
                            <h3>Коди платформ</h3>
                            <ul>
                                {platform.map((item, id) => {
                                    return (
                                    <li><a href="/">{item.title}</a></li>
                                        )
                                    }
                                )}
                            </ul>
                        </div>
                        <div className="menu-column">
                            <h3>Бидний тухай</h3>
                            <ul>
                                {about.map((item, id) => {
                                        return (
                                            <li><a href="/">{item.title}</a></li>
                                        )
                                    }
                                )}
                            </ul>
                        </div>
                        <div className="menu-column">
                            <h3>Холбоо барих</h3>
                            <ul>
                                {contact.map((item, id) => {
                                        return (
                                            <li><a href="/">{item.title}</a></li>
                                        )
                                    }
                                )}
                            </ul>
                        </div>
                        <div className="icon-column">
                            <ul>
                                {social.map((item, id) => {
                                        return (
                                            <li>
                                                <a href={item.link}
                                                   rel="noopener noreferrer">
                                                    <img className="icon" src={item.icon}/>
                                                    <span>{item.title}</span></a>
                                            </li>
                                        )
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className="container-bottom">
                        <div className="bottom-menu-row">
                            {links.map((item, i) => {
                                return (
                                    <div className="footer-lists">
                                        <a rel="noopener noreferrer" href={item.link} target="_blank">{item.title}</a>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="copyright-section">
                            <div className="copy-left">
                                <p>КОДИ ХХК ©2021 БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН.</p>
                            </div>
                            <img className="cody" src="/images/codylogo.svg" alt="cody"/>
                        </div>
                    </div>
                </Container>
            </div>
        </ContainerStyle>
    );
}
export default Footer;
