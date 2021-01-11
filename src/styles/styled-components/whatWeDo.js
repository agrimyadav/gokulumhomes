import styled from "styled-components";
import { device } from "./mediaQueries";

export const OuterWrapper = styled.div`
  padding: 120px 0 176px;
  @media only screen and ${device.mobileL} {
    padding: 72px 0 96px;
  }
`;

export const MainWrapper = styled.div`
  margin-top: 250px;

  @media only screen and ${device.mobileL} {
    margin: 0;
  }
`;

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 190px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding: ${(props) => (props.padding ? "32px 0" : "0")};

  @media only screen and ${device.mobileL} {
    grid-template-columns: 1fr;
    grid-gap: 0px;
    padding: 0;
  }
`;

export const Subheading = styled.div`
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  opacity: 0.64;
  margin-bottom: 100px;

  @media only screen and ${device.mobileL} {
    font-size: 20px;
    line-height: 32px;
    margin-top: 40px;
    margin-bottom: 56px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;

  @media only screen and ${device.mobileL} {
    border-bottom: ${(props) =>
      props.border ? "1px solid rgba(255, 255, 255, 0.12)" : "none"};
    padding: 23px 0 28px;
  }
`;

export const Text = styled.span`
  font-weight: normal;
  font-size: ${(props) => (props.count ? "15px" : "40px")};
  line-height: ${(props) => (props.count ? "24px" : "48px")};
  color: #ffffff;
  opacity: 0.56;
  margin-right: ${(props) => (props.count ? "85px" : "0")};

  @media only screen and ${device.mobileL} {
    font-size: ${(props) => (props.count ? "13px" : "24px")};
    line-height: ${(props) => (props.count ? "24px" : "36px")};
    margin-right: ${(props) => (props.count ? "24px" : "0")};
  }
`;
