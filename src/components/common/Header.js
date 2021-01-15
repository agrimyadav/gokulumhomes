import React, { useState } from "react";
import styled from "styled-components";
import {
  Wrapper,
  Text,
  Logo,
  Button,
  Div,
  MenuWrapper,
  InnerWrapper,
} from "../../styles/styled-components/headerStyles";
import MobileMenu from "./MobileMenu";
import WebsiteContainer from "./WebsiteContainer";
import { animateScroll as scroll } from "react-scroll";

const headerLinks = [
  {
    name: "About",
    handle: "about",
  },
  {
    name: "Projects",
    handle: "projects",
  },
  {
    name: "Services",
    handle: "services",
  },
  {
    name: "Careers",
    handle: "careers",
    link: "mailto:info@gokulumhomes.com",
  },
  {
    name: "Testimonials",
    handle: "testimonials",
  },
];

const Header = () => {
  const scrollToSection = (element) => {
    const scrollSection = document.querySelector(`#${element}`);
    scroll.scrollTo(scrollSection && scrollSection.offsetTop - 20, {
      duration: 1000,
      smooth: "easeInOut",
    });
  };

  const [isOpen, onClose] = useState(false);
  return (
    <>
      {/* <div style={{ position: "relative" }}> */}
      <Wrapper>
        <WebsiteContainer>
          <InnerWrapper>
            <Div flex start>
              <Logo>Gokulum</Logo>
              <Logo color>Homes</Logo>
            </Div>
            <Div flex hideMobile>
              {headerLinks.map((link) => {
                return (
                  // <div>
                  <a href={link.link && link.link}>
                    <Text
                      key={link.handle}
                      nav
                      onClick={() => scrollToSection(link.handle)}
                    >
                      {link.name}
                    </Text>
                  </a>
                  // </div>
                );
              })}
            </Div>
            <Div flex button hideMobile>
              <Button>
                <a href="mailto:info@gokulumhomes.com">Get in touch</a>
              </Button>
            </Div>
            <MenuWrapper mobile>
              <Menu
                top
                src="/images/menu1.svg"
                onClick={() => onClose(!isOpen)}
              />
              <Menu src="/images/menu1.svg" onClick={() => onClose(!isOpen)} />
            </MenuWrapper>
          </InnerWrapper>
        </WebsiteContainer>
      </Wrapper>
      <MobileMenu headerLinks={headerLinks} isOpen={isOpen} onClose={onClose} />
      {/* </div> */}
    </>
  );
};

export default Header;

const Menu = styled.img`
  height: auto;
  width: 20px;
  margin-bottom: ${(props) => (props.top ? "6px" : "0")};
`;
