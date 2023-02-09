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
              8, Bodhi Marg <br />
              DLF PHASE - I, Gurugram
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.39777452907!2d77.09639031549283!3d28.46756509827811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d391492391%3A0x9b3c9a035e6d9ae1!2s8%2C%20Bodhi%20Marg%2C%20DLF%20Phase%201%2C%20Sector%2026A%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1675963472438!5m2!1sen!2sin"
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
