import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import {
  Count,
  ImageDiv,
  Div,
  PaginationWrapper,
  Next,
  Prev,
} from "../styles/styled-components/heroSwiper";
import ImageLazyLoad from "./common/ImageLazyLoad";

const images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/home6.jpeg",
];

const params = {
  effect: "coverflow",
  loop: true,
  speed: 1500,
  slidesPerView: 1,
  allowTouchMove: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction",
  // },
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
  const [swiper, setSwiper] = useState(null);

  const getSwiper = (swiper) => {
    setSwiper({ swiper });

    swiper &&
      swiper.on("slideChange", () => {
        setSwiper({ swiper });
      });
  };

  const goNext = () => {
    if (swiper !== null) {
      swiper.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.swiper.slidePrev();
    }
  };

  return (
    <>
      <div style={{ marginTop: "82px" }}></div>
      <Div className="hero-swiper">
        <Swiper
          {...params}
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectCoverflow,
            Autoplay,
          ]}
          // spaceBetween={50}
          {...params}
          // navigation
          onSwiper={getSwiper}
        >
          {images.map((image) => {
            return (
              <SwiperSlide key={image}>
                <ImageDiv
                  //bgImg={image}
                  url={image}
                  bgPos="center"
                  bgSize="cover"
                  paddingBottom="40.5%"
                  mobilePadding="75.5%"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <PaginationWrapper>
          <Prev onClick={goPrev}></Prev>
          <div style={{ zIndex: 2 }}>
            <Count style={{ marginRight: "8px" }}>
              0{swiper && swiper.swiper && swiper.swiper.realIndex + 1}
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
