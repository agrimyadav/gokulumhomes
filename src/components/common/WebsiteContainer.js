import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;

const WebsiteContainer = ({ children, ...rest }) => {
  return (
    <>
      <Wrapper {...rest}>{children}</Wrapper>
    </>
  );
};

export default WebsiteContainer;
