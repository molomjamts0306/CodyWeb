import React from "react";
import Features from "../_desktop/section/Features";
import styled from "styled-components";
import Cody from "../_mobile/section/Cody";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import Industries from "./section/industries";
const ContainerComp = styled.div`

`;
function Home() {
    return (
        <div className="codyWebContainer">
            <ContainerComp>
                <Navbar/>
                <Hero/>
                <Cody/>
                <Features/>
                <Industries/>
            </ContainerComp>
        </div>
    );
}
export default Home;