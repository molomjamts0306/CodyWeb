import styled from 'styled-components';
import Navbar from "./section/Navbar";
import React from "react";
import Footer from "./section/Footer";
import TitleAbout from "./section/TitleAbout";
const ContainerComp = styled.div`

`;


function about (){
    return(
        <ContainerComp>
            <Navbar/>
            <TitleAbout/>
            <Footer/>
        </ContainerComp>
    );
}
export default about;