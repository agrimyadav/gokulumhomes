import React from "react";
import Swiper from "react-id-swiper";
import {
  Container,
  ImageDiv,
  Close,
  Text,
  SwiperWrapper,
} from "../../styles/styled-components/projectSwiper";

// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const params = {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 1.4,
      spaceBetween: 48,
      centeredSlides: true,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
};

const ProjectImagesSwiper = ({ showSwiper, setShowSwiper, data }) => {
  const targetElement = React.useRef(null);

  //   React.useEffect(() => {
  //     if (showSwiper) {
  //       disableBodyScroll(targetElement.current);
  //     } else {
  //       enableBodyScroll(targetElement.current);
  //     }
  //   }, [showSwiper]);

  return (
    <>
      <div ref={targetElement} style={{ position: "relative" }}>
        <Container showSwiper={showSwiper}>
          <Close
            src="/images/close3.svg"
            onClick={() => {
              setShowSwiper(!showSwiper);
            }}
          />
          <Text>{data.heading}</Text>

          <SwiperWrapper>
            <Swiper {...params}>
              {data.projectImages.map((image) => {
                return (
                  <div key={image}>
                    <ImageDiv url={image}></ImageDiv>
                  </div>
                );
              })}
            </Swiper>
          </SwiperWrapper>
        </Container>
      </div>
    </>
  );
};

export default ProjectImagesSwiper;
