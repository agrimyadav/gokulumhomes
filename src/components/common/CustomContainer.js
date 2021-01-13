import React from "react";
import styled from "styled-components";
import { device } from "../../styles/styled-components/mediaQueries";

const Wrapper = styled.div`
  padding: 0 168px;

  @media only screen and ${device.mobileL} {
    padding: 0 32px;
  }

  @media only screen and ${device.tablet} {
    padding: 0 84px;
  }

  @media only screen and ${device.laptop} {
    padding: 0 168px;
  }
`;

const CustomContainer = ({ children, ...rest }) => {
  return (
    <>
      <Wrapper {...rest}>{children}</Wrapper>
    </>
  );
};

export default CustomContainer;
