import React, {useState} from 'react';
import styled from 'styled-components';
import {Button, Container, Form, Input, Modal, ModalBody, ModalFooter} from 'reactstrap';
import { Swiper, SwiperSlide} from 'swiper/react';
import FeatureItem from "../../components/FeaturesItem";
import SwiperCore, {Autoplay} from "swiper";
import Icons from "../../components/Icons";
const FeaturesWrapper = styled.div`
  background-color: #f1f3ff;
  .features-title{
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
      height: 25px;
      background-image: url("/images/3e5dfba4e392a8f12364afcfdc171782.svg");
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
  .swiper-section {
    margin-bottom: 65px;
    @media only screen and (max-width: 750px) {
      margin-bottom: 20px;
    }
    .swiper-container {
      padding: 20px 0;
    }
  }
  .featuresbottom {
    transform: rotate(180deg);
  }
  .button{
    display: flex;
    justify-content: center;
    padding: 50px;
  }
  .button-click{
    padding: 14px 30px;
    border-radius: 8px;
    background: linear-gradient(95.41deg, #8326E2 34.67%, #5206E1 148.46%);
    color: white;
    font-size: 20px;
    font-weight: 500;
  }
`;
const FeatureModalContentsWrapper = styled.div`
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-y: auto;
  max-height: 70vh;
  padding: 20px 25px 20px 20px;
  margin: -20px -25px -20px -20px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 4px #cecfd7;
  }
  &::-webkit-scrollbar-thumb {
    height: 5px;
    border-radius: 100px;
    background-color: #8855f1;
  }
  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 0;
    max-height: 550px;
    margin: 0;
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
  .Solution-title{


    color: rgb(30, 32, 48);
    font-weight: bold;
    text-align: center;
    font-size: 28px;
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
  .btn-close{
    float: right;
    margin-top: -50px;
    margin-right: 20px;
  }
    `;
const params = {
    slidesPerView: 5,
    slidesPerGroup: 2,
    spaceBetween: 10,
    autoplay: { delay: 3000, disableOnInteraction: false },
    loop: false,
    slidesPerColumnFill: 'row',
    slidesPerColumn: 2,
    breakpoints: {
        1060: {slidesPerView: 5, slidesPerGroup: 2, spaceBetween: 40},
        991: { slidesPerView: 4, slidesPerGroup: 2, spaceBetween: 30 },
        640: { slidesPerView: 3, slidesPerGroup: 2, spaceBetween: 20 },
        0: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 10 },
    },
};
const features = [
    { id: 1, title: 'Контент менежмент систем', engTitle: 'CMS', icon: Icons.gallery },
    { id: 2, title: 'Хямдрал & Купон', engTitle: 'Discount & Promotion', icon: Icons.gallery },
    { id: 3, title: 'Бэлгийн карт', engTitle: 'Gift card', icon: Icons.gallery },
    { id: 4, title: 'Маркетинг хэрэгсэлүүд', engTitle: 'Marketing manager', icon: Icons.gallery },
    { id: 5, title: 'Захиалгын удирдлага', engTitle: 'Order manager', icon: Icons.gallery },
    { id: 6, title: 'Бүтээгдэхүүний удирдлага', engTitle: 'Product manager', icon: Icons.gallery },
    { id: 7, title: 'Хэрэглэгчийн удирдлага', engTitle: 'User management', icon: Icons.gallery },
    { id: 8, title: 'Худалдааны удирдлага', engTitle: 'Sales manager', icon: Icons.gallery },
    { id: 9, title: 'Агуулах, Ложистикийн шийдэл', engTitle: 'Fulfillment manager', icon: Icons.gallery },
    { id: 10, title: 'Дижитал хэтэвч', engTitle: 'Digital Wallet', icon: Icons.gallery },
    { id: 11, title: 'Эвент удирдлага', engTitle: 'Events', icon: Icons.gallery },
    { id: 12, title: 'Цахим зээлийн үйлчилгээ', engTitle: 'Online leasing', icon: Icons.gallery },
    { id: 13, title: 'Төлбөрийн шийдлүүд', engTitle: 'Payment gateway', icon: Icons.gallery },
    { id: 14, title: 'Харилцагчийн удирдлага', engTitle: 'CRM', icon: Icons.gallery },
    { id: 15, title: 'Блог, Нийтлэл', engTitle: 'Blog & Article', icon: Icons.gallery },
    { id: 16, title: 'Борлуулалтын сувгууд', engTitle: 'Sales channels', icon: Icons.gallery },
    { id: 17, title: 'Татварын системийн холболт', engTitle: 'Tax integration', icon: Icons.gallery },
    { id: 18, title: 'Тайлан анализ', engTitle: 'Reporting & Analytics', icon: Icons.gallery },
    { id: 19, title: 'Аюулгүй байдал, Нууцлал', engTitle: 'Security & Trust', icon: Icons.gallery },
    { id: 20, title: 'Сургалт нэвтрүүлэлт', engTitle: 'Training', icon: Icons.gallery },
    { id: 21, title: 'Тусламж, засвар үйлчилгээ', engTitle: 'Support & maintenance', icon: Icons.gallery },
    { id: 23, title: 'Интеграци, холболтууд', engTitle: 'ERP & Global Integration', icon: Icons.gallery },
    { id: 22, title: 'SEO & Social integration', engTitle: 'SEO & Social integration', icon: Icons.gallery },
    { id: 24, title: 'API first', engTitle: 'API first', icon: Icons.gallery },
    { id: 25, title: 'Fast & Cloud deployment', engTitle: 'Fast & Cloud deployment', icon: Icons.gallery },
    { id: 26, title: 'Performance & Scale', engTitle: 'Performance & Scale', icon: Icons.gallery },
];
const colors = ['#8855F1', '#FCC204', '#02D4E4', '#FC3F82', '#FCC204'];
let count = 0;
SwiperCore.use([Autoplay])
const Features = (props) =>{
    const {
        buttonLabel,
        className
    }= props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    {
        const [isOpen, setOpen] = React.useState(false);
        React.useEffect(() => {
            count = 0;
        }, [isOpen]);
    }

    return (
        <>
            <FeaturesWrapper >
                <div id="features" className="features-title">
                    <h1>Системийн боломжууд</h1>
                </div>
                <Container className="swiper-section">
                    <Swiper {...params}>
                        {features.map((v, i) => {
                            if (count >= 4)  count = 0;
                            count++;
                            return (
                                <SwiperSlide key={v.id}>
                                    <FeatureItem item={v} color={colors[count - 1]} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Container>
                <div className="button">
                    <Button className="button-click" onClick={toggle}  ><span>{buttonLabel} Дэлгэрэнгүй</span></Button>
                    <Modal size="xl" isOpen={modal} toggle={toggle} className={className}>
                        <FormContainer>
                            <h4 className="Solution-title">Шийдлүүд</h4>
                            <button className="btn-close" ></button>
                                <ModalBody>
                                    <Form className="contact-form">
                                        <FeatureModalContents/>
                                    </Form>
                                </ModalBody>
                            <ModalFooter>
                            </ModalFooter>
                        </FormContainer>
                    </Modal>
                </div>
                <div className="featuresbottom"><img src="/images/hovertop.jpg" className="w-100" alt="featuresbottom"/> </div>
            </FeaturesWrapper>
        </>
    );
};
let count1 = 0;
const FeatureModalContents = () => (
    <FeatureModalContentsWrapper>
        {features.map((c, i) => {
            if (count1 >= 4) count1 = 0;
            count1++;
            return (
                <SwiperSlide key={c.id}>
                    <FeatureItem item={c} color={colors[count1 - 1]} />
                </SwiperSlide>
            );
        })}
    </FeatureModalContentsWrapper>
);
export default Features;