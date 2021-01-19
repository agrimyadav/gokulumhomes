import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import WebsiteContainer from "../components/common/WebsiteContainer";
import Header from "../components/common/Header";
import SEO from "../components/common/SEO";
import HeroSwiper from "../components/HeroSwiper";
import "../styles/scss/style.scss";
import AboutSection from "../components/AboutSection";
import CustomContainer from "../components/common/CustomContainer";
import MottoSection from "../components/MottoSection";
import Projects from "../components/Projects";
import WhatWeDoSection from "../components/WhatWeDoSection";
import Testimonials from "../components/Testimonials";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  p {
    margin: 0
  }
  div {
     margin: 0
  }
`;

const theme = {
  text: {
    header: "13px",
    body: "14px",
  },
};

const Index = () => {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <WebsiteContainer>
          <div>
            <Header />
            <HeroSwiper />
            <CustomContainer>
              <div id="about">
                <AboutSection />
              </div>
            </CustomContainer>
            <MottoSection />
            <CustomContainer>
              <div id="projects">
                <Projects />
              </div>
            </CustomContainer>
            <div id="services">
              <WhatWeDoSection />
            </div>
            <CustomContainer>
              <div id="services">
                <Testimonials />
              </div>
            </CustomContainer>
            <CustomContainer>
              <GetInTouch />
            </CustomContainer>
            <Footer />
          </div>
        </WebsiteContainer>
      </ThemeProvider>
    </>
  );
};

export default Index;
