import styled from "styled-components";
import { device } from "./mediaQueries";

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 142px;
  margin-top: 120px;
  margin-bottom: 168px;

  @media only screen and ${device.mobileL} {
    grid-template-columns: 1fr;
    margin-top: 72px;
    grid-gap: 64px;
    margin-bottom: 64px;
  }
`;

export const AddressBlock = styled.div`
  margin-top: 80px;
  margin-bottom: 48px;

  @media only screen and ${device.mobileL} {
    margin-top: 40px;
    margin-bottom: 48px;
  }
`;

export const Text = styled.p`
  font-weight: ${(props) => (props.address ? "normal" : "600")};
  font-size: ${(props) => (props.address ? "24px" : "13px")};
  line-height: ${(props) => (props.address ? "32px" : "24px")};
  letter-spacing: ${(props) => (props.address ? "" : ".08em")};
  text-transform: ${(props) => (props.address ? "" : "uppercase")};
  color: #000000;
  opacity: ${(props) => (props.address ? "1" : ".56")};
  max-width: 288px;
  margin-top: ${(props) => (props.address ? "8px" : "0")};
`;
