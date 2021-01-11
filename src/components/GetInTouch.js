import React from "react";

import { Title } from "../styles/styled-components/aboutSection";
import {
  WrapperGrid,
  AddressBlock,
  Text,
} from "../styles/styled-components/GetInTouch";

import GoogleMapReact from "google-map-react";

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

        <div style={{ height: "50vh", width: "100%", maxHeight: "408px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBXWUQx3PmsvY82AtTqX4pFT9wSQEjM_R0",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          ></GoogleMapReact>
        </div>
      </WrapperGrid>
    </>
  );
};

export default GetInTouch;
