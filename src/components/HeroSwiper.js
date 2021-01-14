import React, { useState } from "react";
import Swiper from "react-id-swiper";
import {
  Count,
  ImageDiv,
  Div,
  PaginationWrapper,
  Next,
  Prev,
} from "../styles/styled-components/heroSwiper";
import ImageLazyLoad from "./common/ImageLazyLoad";

const images = ["/images/home1.png", "/images/home2.png", "/images/home3.png"];

const params = {
  effect: "coverflow",
  loop: true,
  speed: 1500,
  slidesPerView: 1,
  allowTouchMove: false,
  breakpoints: {
    1024: {
      coverflowEffect: {
        rotate: 1,
        stretch: 5,
        depth: -10,
        modifier: 55,
        slideShadows: false,
      },
    },
    320: {
      coverflowEffect: {
        rotate: 1,
        stretch: 1,
        depth: -13,
        modifier: 18,
        slideShadows: false,
      },
    },
  },
};

const HeroSwiper = () => {
  const [swiper, updateSwiper] = useState(null);

  const [imagesCount, setImageCount] = useState(1);
  React.useEffect(() => {
    swiper && swiper.update();
  }, [imagesCount]);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
      setImageCount((prevCount) => prevCount + 1);
      if (imagesCount > 20) setImageCount(0);
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
      setImageCount((prevCount) => prevCount + 1);
      if (imagesCount > 20) setImageCount(0);
    }
  };

  return (
    <>
      <div style={{ marginTop: "82px" }}></div>
      <Div className="hero-swiper">
        <Swiper {...params} getSwiper={updateSwiper}>
          {images.map((image) => {
            return (
              <div key={image}>
                <ImageLazyLoad
                  bgImg={image}
                  bgPos="center"
                  bgSize="cover"
                  paddingBottom="40.5%"
                  mobilePadding="75.5%"
                />
              </div>
            );
          })}
        </Swiper>
        <PaginationWrapper>
          <Prev onClick={goPrev}></Prev>
          <div style={{ zIndex: 2 }}>
            <Count style={{ marginRight: "8px" }}>
              0{swiper && swiper.realIndex + 1}
            </Count>
            <Count>/</Count>
            <Count style={{ marginLeft: "9px" }}>0{images.length}</Count>
          </div>
          <Next next onClick={goNext}></Next>
        </PaginationWrapper>
      </Div>
    </>
  );
};

export default HeroSwiper;
