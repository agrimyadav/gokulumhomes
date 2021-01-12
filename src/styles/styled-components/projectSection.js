import styled from "styled-components";
import { device } from "./mediaQueries";

export const Container = styled.div`
  padding: 120px 0 232px 0;

  @media only screen and ${device.mobileL} {
    padding: 72px 0 112px;
  }

  @media only screen and ${device.tabletL} {
    padding: 120px 0px;
  }

  @media only screen and ${device.laptop} {
    padding: 120px 0 232px 0px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 152px;
  @media only screen and ${device.mobileL} {
    grid-template-columns: 1fr;
    margin-top: 40px;
    grid-gap: 0px;
  }
`;

export const ProjectWrapper = styled.div`
  padding-top: ${(props) => (props.margin ? "224px" : "0")};
  display: ${(props) => (props.hideDesktop ? "none" : "block")};
  transform: ${(props) => (props.id % 2 ? "translateY(50%)" : "translateY(0)")};

  @media only screen and ${device.mobileL} {
    display: ${(props) => (props.hideMobile ? "none" : "block")};
    padding-bottom: 96px;
    padding-top: 0;
    transform: translateY(0);
  }
`;

export const Image = styled.div`
  transition: transform 0.6s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Count = styled.p`
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-size: 32px;
  line-height: 40px;
  font-weight: bold;
  color: #ffffff;
`;

export const Heading = styled.p`
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  margin-bottom: 4px;
  margin-top: 24px;
`;

export const Location = styled.p`
  font-size: 13px;
  line-height: 24px;
  font-weight: normal;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  opacity: 0.56;
  text-transform: uppercase;
`;

export const Info = styled.p`
  font-size: 15px;
  margin-top: 24px;
  line-height: 24px;
  font-weight: normal;
  opacity: 0.72;
`;

export const GetInTouch = styled.div`
  background: #141414;
  border-radius: 1000px;
  padding: 160px 100px 100px;
  max-width: 480px;
  text-align: center;
  position: absolute;
  width: min-content;
  right: 0;
  bottom: 0;

  @media only screen and ${device.mobileL} {
    position: inherit;
    transform: translateY(0);
    border-radius: 100%;
    min-width: 296px;
    min-height: 296px;
    display: flex;
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  @media only screen and ${device.tabletL} {
    padding: 66px 50px;
  }

  @media only screen and ${device.laptop} {
    padding: 140px 90px 90px;
  }

  @media only screen and ${device.laptopL} {
    padding: 160px 100px 100px;
  }
`;

export const ButtonTitle = styled.p`
  font-size: 56px;
  line-height: 64px;
  font-weight: 500;
  opacity: 0.72;
  color: #ffffff;
  text-align: center;
  margin-bottom: 40px;

  @media only screen and ${device.mobileL} {
    font-size: 32px;
    line-height: 40px;
    max-width: 184px;
    margin-bottom: 24px;
  }
`;

export const ButtonText = styled.span`
  
  transition: all 0.3s linear;
  cursor: pointer;

    a {
    font-size: 13px;
  line-height: 24px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  padding-bottom: 7px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  text-decoration: none;
  }

  &:hover {
    border-bottom: border-bottom: 2px solid rgb(255, 255, 255);
  }
`;

export const ProjectCard = styled.div``;
