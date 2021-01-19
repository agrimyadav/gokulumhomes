import styled from "styled-components";
import { device } from "./mediaQueries";

export const Container = styled.div`
  background: #141414;
`;

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 160px 0;
  grid-gap: 110px;

  @media only screen and ${device.mobileL} {
    grid-template-columns: 1fr;
    padding: 72px 0 124px 0;
    text-align: center;
    grid-gap: 60px;
  }
`;

// export const Image = styled.div`
//   background-image: url("/images/motto2.jpeg");
//   padding-bottom: 100%;
//   background-position: center;
//   background-size: contain;
//   background-repeat: no-repeat;
//   margin-right: 110px;

//   @media only screen and ${device.mobileL} {
//     max-width: 232px;
//     margin: auto;
//     width: 100%;
//   }
// `;

export const Image = styled.img`
  border-radius: 9999px;
  height: 100%;
  width: 100%;

  @media only screen and ${device.mobileL} {
    max-width: 232px;
    max-height: 232px;
    margin: auto;
    height: auto;
  }

  @media only screen and ${device.tabletL} {
    max-height: 60%;
    margin: auto;
  }

  @media only screen and ${device.laptop} {
    height: 100%;
    width: 100%;
    max-height: none;
  }
`;

export const Text = styled.div`
  font-size: 40px;
  line-height: 48px;
  opacity: 0.72;
  margin: auto;
  font-weight: normal;
  color: #ffffff;

  @media only screen and ${device.mobileL} {
    font-size: 24px;
    line-height: 36px;
  }
`;
