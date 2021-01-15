import React from "react";

import { Title } from "../styles/styled-components/aboutSection";
import {
  WrapperGrid,
  AddressBlock,
  Text,
} from "../styles/styled-components/GetInTouch";

import styled from "styled-components";
import { device } from "../styles/styled-components/mediaQueries";

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};

const GetInTouch = () => {
  return (
    <>
      <WrapperGrid>
        <div>
          <Title>Get in touch</Title>
          <AddressBlock>
            <Text>Office address</Text>
            <Text address>
              Plot no. 28, Sector 42 Golf course road, Gurugram
            </Text>
          </AddressBlock>
          <div>
            <Text>Write to Us</Text>
            <Text address>info@gokulumhomes.com</Text>
          </div>
        </div>

        <MapWrapper>
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            style={{ border: "0" }}
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJL2Rs4dEYDTkRpJwPtJsSNOU&key=AIzaSyAIwzVLISQ0VaS0E0wzC8x8gErRfuzTN48"
            allowfullscreen
          ></iframe>
        </MapWrapper>
      </WrapperGrid>
    </>
  );
};

export default GetInTouch;

const MapWrapper = styled.div`
  height: 100%;
  width: 100%;

  @media only screen and ${device.mobileL} {
    height: 344px;
  }
`;
