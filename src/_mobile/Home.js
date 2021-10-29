import React from "react";
import styled from "styled-components";
import Cody from "../_mobile/section/Cody";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import Industries from "./section/industries";
import Solution from "./section/Solution";
import Features from "./section/Features";
const ContainerComp = styled.div`
`;
function Home() {
    return (
        <div className="codyWebContainer">
            <ContainerComp>
                <Navbar/>
                <Hero/>
                <Cody/>
                <Solution/>
                <Features/>
                <Industries/>
            </ContainerComp>
        </div>
    );
}
export default Home;