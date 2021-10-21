import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import facebookIcon from '../../images/facebook.svg'
import {Container} from 'reactstrap';
const ContainerStyle = styled.div`
  .footer-container{
  margin-top: 100px;
  }
  .subscribe{
    transform: translate(-50%, -50%);
    width: 800px;
    position: absolute;
    margin: 0px auto;
    background: rgb(255, 255, 255);
    left: 50%;
    padding: 20px 50px;
    box-shadow: rgb(0 0 0 / 20%) 0px 12px 28px;
    ::before{
      content: "";
      width: 0px;
      height: 0px;
      top: 0px;
      border-style: solid;
      border-width: 0px 0px 64px 64px;
      border-color: transparent transparent rgb(238, 238, 238);
      position: absolute;
      left: -64px;
      background-size: 22px;
      background-position: center center;
    }
    ::after{
      content: "";
      width: 0px;
      height: 0px;
      top: 0px;
      border-style: solid;
      border-width: 64px 0px 0px 64px;
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
  padding: 0px 30px;
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
    margin: 10px 0px;
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
      margin-bottom: 0px;
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
.instagram-icon {
  width: 18px;
  height: 18px;
  margin-right:  5px;
  background-image:  url("/images/instagram.svg");
}
.facebook-icon {
  width: 18px;
  height: 18px;
  margin-right:  5px;
  background-image:  url("/images/acebook.svg");
}
h4 {
  font-weight: 700;
  margin-bottom: 15px;
}
{
`;
function Footer() {
    return (
        <ContainerStyle>
            <Container>
                <div className="footer-container">
                    <div className="subscribe">
                        <h4>Биднийг дагаарай</h4>
                        <form className="">
                            <input name="email" placeholder="Таны имэйл" type="text"
                               className="email-input form-control" value=""/>
                            <button type="submit" className="subscribe-button"/>
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
                                            <li><a href="/">Платформын тухай</a></li>
                                            <li><a href="/">Шийдэл</a></li>
                                            <li><a href="/">Онцлог, боломжууд</a></li>
                                            <li><a href="/">Бизнесийн төрөл</a></li>
                                            <li><a href="/">Харилцагчид</a></li>
                                        </ul>
                                    </div>
                                    <div className="menu-column">
                                        <h3>Бидний тухай</h3>
                                        <ul>
                                            <li><a href="/">Танилцуулга</a></li>
                                            <li><a href="/">Үйлчилгээний төрөл</a></li>
                                            <li><a href="/">Хамтрагч байгууллага</a></li>
                                            <li><a href="/">Холбоо барих</a></li>
                                        </ul>
                                    </div>
                                    <div className="menu-column">
                                        <h3>Холбоо барих</h3>
                                        <ul>
                                            <li><a href="/">Утас: 7777-8985</a></li>
                                            <li><a href="/">Имэйл: info@cody.mn</a></li>
                                            <li><a href="/">Хаяг: Нью Хоризон оффис, 401 тоот, Улаанбаатар хот</a></li>
                                        </ul>
                                    </div>
                                    <div className="icon-column">
                                        <ul>
                                            <li>
                                                <a href="https://www.instagram.com/cody.tech/"
                                                    rel="noopener noreferrer">
                                                    <div className="instagram-icon"></div>
                                                    <span>instagram</span></a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/codymongolia"
                                                   rel="noopener noreferrer">
                                                    <img className="facebook-icon" src={facebookIcon}/>
                                                    <span>facebook</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        <hr/>
                        <div className="container-bottom">
                            <div className="bottom-menu-row">
                                <div className="footer-lists">
                                    <a>Airlink</a>
                                    <p>Нислэгийн билет</p>
                                </div>
                                <div className="footer-lists">
                                    <a>24auto</a>
                                    <p>авто сэлбэг</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Comf</a>
                                    <p>хүүхдийн тавилга</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Haus</a>
                                    <p>барилгын материал</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Amway</a>
                                    <p>гэр ахуй</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Zanadu</a>
                                    <p>дарс</p>
                                </div>
                                <div className="footer-lists">
                                    <a>shoppyLux</a>
                                    <p>the luxury you deserve</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Micheal&Amazonka</a>
                                    <p>Фейшн</p>
                                </div>
                                <div className="footer-lists">
                                    <a>UB passport</a>
                                    <p>Лайфстайл</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Mild cosmetics</a>
                                    <p>гоо сайхан</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Metro express</a>
                                    <p>гэр ахуй</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Аянчин</a>
                                    <p>аяны хэрэгсэл хувцас</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Cose</a>
                                    <p>арьс арчилгаа</p>
                                </div>
                                <div className="footer-lists">
                                    <a>JoinMe</a>
                                    <p>аялал</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Таван нүдэн</a>
                                    <p>үнэт эдлэл</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Carter's</a>
                                    <p>хүүхдийн хувцас</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Smart store</a>
                                    <p>электроникс</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Цэцэгт мэндчилгээ</a>
                                    <p>бэлэг дурсгал</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Wellbee</a>
                                    <p>арчилгаа</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Ger place</a>
                                    <p>тавилга</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Baby world</a>
                                    <p>хүүхдийн</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Gobi khangai</a>
                                    <p>тавилга</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Home shopping</a>
                                    <p>гэр ахуй</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Khur</a>
                                    <p>арьсан эдлэл</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Sarnai</a>
                                    <p>бэлэг дурсгал</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Premium taste</a>
                                    <p>коньяк, виски, дарс</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Nature republic</a>
                                    <p>арьс арчилгаа</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Shoez</a>
                                    <p>гутал</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Tanpopo</a>
                                    <p>хүүхдийн</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Zanadu</a>
                                    <p>дарс</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Inktop</a>
                                    <p>бичиг хэрэг</p>
                                </div>
                                <div className="footer-lists">
                                    <a>itStore</a>
                                    <p>электроникс</p>
                                </div>
                                <div className="footer-lists">
                                    <a>eSansar</a>
                                    <p>хүнс</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Baigal</a>
                                    <p>үнэт эдлэл</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Amar</a>
                                    <p>даатгал</p>
                                </div>
                                <div className="footer-lists">
                                    <a>Нэкст электроникс</a>
                                    <p>цахилгаан бараа</p>
                                </div>
                            </div>
                            <div className="copyright-section">
                                <div className="copy-left">
                                    <p>КОДИ ХХК ©2021 БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН.</p>
                                </div>
                                <img className="cody" src="/images/codylogo.svg" alt="cody" />
                            </div>
                        </div>
                        </Container>
                    </div>
        </ContainerStyle>
    );
}
export default Footer;
