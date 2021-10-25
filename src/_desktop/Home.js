import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Hero from "./section/Hero";
import Cody from "./section/Cody";
import Industries from "./section/industries";
import Features from "./section/Features";
import Navbar from "./section/Navbar";
import Solution from "./section/Solution";
import Footer from "./section/Footer"
import MessengerCustomerChat from 'react-messenger-customer-chat';
const ContainerComp = styled.div`
  .colorfilter{
    background-color: white;
    max-width: 100%;!important;
    width: 100%;
  }
.site {
  max-width: 100%;
  background: #F5F5F5;
}
  .backcode {
    position: absolute;
    left: 0;
    z-index: 1;
    bottom: -200px;
  }
`;
function Home() {
    return (
        <div  className="colorfilter">
            <MessengerCustomerChat
                pageId="111468470600452"
                appId="955395061711308"
            />
                <ContainerComp>

                        <Navbar/>
                        <Hero/>
                        <Cody/>
                        <Solution/>
                        <Features/>
                        <Industries/>
                        <Footer/>
                </ContainerComp>
        </div>
    );
}
export default Home;