import styled from "styled-components";
import { device } from "./mediaQueries";

export const Wrapper = styled.div`
  padding: ${(props) => (props.footer ? "24px 0 48px 0" : "16px 88px")};
  margin: ${(props) => (props.footer ? "0 88px" : "0")};
  display: flex;
  justify-content: ${(props) => (props.footer ? "space-between" : "center")};
  align-items: center;
  border-top: ${(props) => (props.footer ? "1px solid rgba(0,0,0,0.12)" : "")};
  position: sticky;
  top: 0;
  z-index: 101;
  background: #ffffff;
  box-shadow: ${(props) =>
    props.footer ? "0" : "0px 4px 4px rgba(0, 0, 0, 0.05)"};

  @media only screen and ${device.mobileL} {
    margin: ${(props) => (props.footer ? "0 32px" : "0")};
    padding: ${(props) => (props.footer ? "16px 0 32px" : "24px")};
  }
`;

export const Div = styled.div`
  flex: 33%;
  display: ${(props) => (props.flex ? "flex" : "none")};
  justify-content: ${(props) => (props.button ? "flex-end" : "center")};

  @media only screen and ${device.mobileL} {
    display: ${(props) => (props.hideMobile ? "none" : "flex")};
    flex: ${(props) => (props.mobile ? "initial" : "33%")};
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.text.header};
  text-transform: uppercase;
  text-align: center;
  margin-right: 36px;
  line-height: 24px;
  opacity: 0.64;
  letter-spacing: 0.08em;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    height: 1px;
    background-color: black;
    margin-top: -4px;
    transform-origin: 0 0;
    transform: scaleX(0);
    transition: transform 0.7s ease;
  }

  &:hover:after {
    transform: scaleX(1);
  }

  @media only screen and ${device.mobileL} {
    color: white;
    margin-bottom: 12px;
    margin-right: 0;
    text-align: left;
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    text-transform: initial;
  }
`;

export const Logo = styled.p`
  font-size: ${(props) => props.theme.text.header};
  text-transform: uppercase;
  text-align: center;
  margin-right: 36px;
  line-height: 24px;
  opacity: 0.64;
  letter-spacing: 0.08em;
  cursor: pointer;
  margin: 0;
  font-size: 20px;
  line-height: 32px;
  color: ${(props) => (props.color ? "#bcbcbc" : "black")};
  opacity: 1;
`;

export const Button = styled.div`
  font-size: ${(props) => props.theme.text.header};
  padding: 12px 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
  background: transparent;
  line-height: 24px;
  opacity: 0.64;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #f4f4f4;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
  }

  &:hover {
    border-radius: 4px;
  }

  &:active {
    background: #e3e3e3;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const MenuWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: none;

  @media only screen and ${device.mobileL} {
    display: ${(props) => (props.mobile ? "flex" : "none")};
  }
`;

export const Image = styled.img`
  right: 18px;
  top: 24px;
  height: 32px;
  width: 32px;
  position: absolute;
  transform: scale(1.3);
`;

export const NavItems = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px 48px;
`;

export const MobileWrapper = styled.div`
  height: 100vh;
  background: #141414;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 111;
  display: none;
  opacity: 0;
  transition: transform 0.8s cubic-bezier(0.7, 0, 0.84, 0),
    opacity 0.5s cubic-bezier(0.5, 0, 0.75, 0);

  @media only screen and ${device.mobileL} {
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(100%)"};
    display: block;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
  }
`;

export const MobileButton = styled.div`
  font-size: 15px;
  padding: 16px 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 48px;
  background: #ffffff;
  line-height: 24px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  }
`;
