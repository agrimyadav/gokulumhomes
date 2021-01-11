import React from "react";
import styled from "styled-components";

import { SubText } from "../styles/styled-components/testimonials";
import { Wrapper } from "../styles/styled-components/headerStyles";
const Footer = () => {
  return (
    <>
      <Wrapper footer>
        <div>
          <SubText location>© 2020, GokulumHomes</SubText>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <Image src="/images/insta.svg"></Image>
            <Image margin src="/images/twitter.svg"></Image>
            <Image src="/images/fb.svg"></Image>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;

const Image = styled.img`
  height: 18px;
  width: 18px;
  margin: ${(props) => (props.margin ? "0 24px" : "0")};
`;
