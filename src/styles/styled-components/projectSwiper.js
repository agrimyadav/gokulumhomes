import styled from "styled-components";
import { device } from "./mediaQueries";

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 112;
  visibility: ${(props) => (props.showSwiper ? "visible" : "hidden")};
  opacity: ${(props) => (props.showSwiper ? "1" : "0")};
  background: #141414;
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SwiperWrapper = styled.div`
  .swiper-container {
    padding-bottom: 50px;
  }

  .swiper-pagination-fraction {
    left: 15%;
    width: auto;
    color: white;
  }

  .swiper-pagination-current {
    margin-right: 8px;
    &:before {
      content: ${(props) => (props.length > 10 ? "0" : "0")};
    }
  }

  .swiper-pagination-total {
    margin-left: 8px;
    &:before {
      content: ${(props) => (props.length > 10 ? "0" : "0")};
    }
  }

  .swiper-button-prev {
    left: 32px;
    background-image: url("/images/right-arrow.svg");
    background-position: center;
    background-size: 50px;
    background-repeat: no-repeat;

    &:after {
      content: "";
    }
  }

  .swiper-button-next {
    right: 32px;
    background-image: url("/images/right-arrow.svg");
    background-position: center;
    background-size: 50px;
    background-repeat: no-repeat;
    transform: rotate(180deg);

    &:after {
      content: "";
    }
  }

  @media only screen and ${device.mobileL} {
    flex: 1 1 80%;

    .swiper-container {
      height: 100%;
      padding-bottom: 0;

      .swiper-button-next {
        bottom: 58px;
        background-size: 44px;
        top: auto;
        right: 30%;
        height: 20px;
      }
      .swiper-button-prev {
        bottom: 58px;
        background-size: 44px;
        top: auto;
        left: 29%;
        height: 20px;
      }

      .swiper-pagination-fraction {
        color: white;
        left: 0;
        width: 100%;
        bottom: 60px;
      }
    }
  }
`;

export const ImageDiv = styled.div`
  background-image: url(${(props) => props.url});
  padding-bottom: 50%;
  background-size: contain;
  background-position: center;

  @media only screen and ${device.mobileL} {
    padding-bottom: 66%;
  }
`;

export const Close = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 50px;
  cursor: pointer;
  z-index: 99999;
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
  opacity: 0.8;
  padding-left: 15%;
  margin-bottom: 44px;

  @media only screen and ${device.mobileL} {
    margin-bottom: 32px;
    font-size: 24px;
    line-height: 36px;
    padding-left: 0;
    text-align: center;
    flex: 1 1 34%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
//   transform: ${(props) => (props.showSwiper ? "scale(1)" : "scale(0)")};
