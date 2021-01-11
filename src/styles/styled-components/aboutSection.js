import styled from "styled-components";
import { device } from "./mediaQueries";

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 120px 0 136px 0;

  @media only screen and ${device.mobileL} {
    grid-template-columns: 1fr;
    padding: 72px 0 96px 0;
  }
`;

export const Title = styled.span`
  font-size: 80px;
  line-height: 88px;
  font-weight: 500;
  color: ${(props) => (props.white ? "white" : "black")};

  @media only screen and ${device.mobileL} {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  line-heightL 36px;
  font-weight: normal;
  padding-bottom: 56px;
  border-bottom: 1px solid rgba(0,0,0, .12);

  @media only screen and ${device.mobileL} {
    margin-top: 24px;
    padding-bottom: 40px;
    font-size: 20px;
  line-height: 32px;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  padding-top: 31px;

  @media only screen and ${device.mobileL} {
    grid-template-columns: 1fr;
    grid-gap: 32px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  line-height: 24px;
  opacity: 0.72;
`;
