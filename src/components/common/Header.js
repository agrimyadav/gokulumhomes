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

const Header = () => {
  const [isOpen, onClose] = useState(false);
  return (
    <>
      {/* <div style={{ position: "relative" }}> */}
      <Wrapper>
        <WebsiteContainer>
          <InnerWrapper>
            <Div flex hideMobile>
              <Text nav>About</Text>
              <Text nav>Projects</Text>
              <Text nav>Services</Text>
              <Text nav>Careers</Text>
            </Div>
            <Div flex center>
              <Logo>Gokulum</Logo>
              <Logo color>Homes</Logo>
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
      <MobileMenu isOpen={isOpen} onClose={onClose} />
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
