import styled from "styled-components";
import { device } from "./mediaQueries";

export const Count = styled.span`
  font-weight: 600;
  font-size: ${(props) => props.theme.text.header};
  line-height: 24px;
  letter-spacing: 0.08em;
`;

export const ImageDiv = styled.div`
  background-image: url(${(props) => props.url});
  padding-bottom: 40.5%;
  background-size: cover;
  background-position: center;

  @media only screen and ${device.mobileL} {
    padding-bottom: 75.5%;
  }
`;

export const Div = styled.div`
  position: relative;

  .swiper-pagination-fraction {
    background: white;
    right: 88px;
    bottom: 24px;
    width: 264px;
    left: auto;
    padding: 38px 0;
  }

  .swiper-pagination-current {
    margin-right: 5px;
  }

  .swiper-pagination-total {
    margin-left: 5px;
  }
`;

export const PaginationWrapper = styled.div`
  position: absolute;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 32px;
  z-index: 4;
  bottom: 24px;
  right: 88px;
  min-width: 200px;

  @media only screen and ${device.mobileL} {
    bottom: 16px;
    right: 16px;
    padding: 16px;
    min-width: 140px;
  }
`;

export const Prev = styled.div`
  z-index: 2;
  height: 20px;
  width: 20px;
  background-image: url("/images/left.svg");
  background-position: center;
  background-size: 20px 12px;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const Next = styled(Prev)`
  background-image: url("/images/right.svg");
`;
