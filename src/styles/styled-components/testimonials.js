import styled from "styled-components";
import { device } from "./mediaQueries";

export const Container = styled.div`
  padding-top: 120px;
  padding-bottom: 104px;
  display: ${(props) => (props.mobile ? "none" : "grid")};
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  @media only screen and ${device.mobileL} {
    display: ${(props) => (props.mobile ? "block" : "none")};

    padding-top: 72px;
    padding-bottom: 96px;
  }
`;

export const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  @media only screen and ${device.mobileL} {
    padding: 32px 24px 40px;
  }
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  opacity: 0.72;
  padding-bottom: 52px;
  margin-bottom: 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  flex-grow: 1;

  @media only screen and ${device.mobileL} {
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 48px;
  }
`;

export const SubText = styled.p`
  font-weight: ${(props) => (props.location ? "normal" : "bold")};
  font-size: ${(props) => (props.location ? "13px" : "15px")};
  line-height: 24px;
  color: #000000;
  opacity: ${(props) => (props.location ? ".56" : ".72")};
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  max-width: 144px;
  margin: 32px auto 0;
`;
