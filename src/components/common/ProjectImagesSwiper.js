import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Container,
  ImageDiv,
  Close,
  Text,
  SwiperWrapper,
} from "../../styles/styled-components/projectSwiper";
import ImageLazyLoad from "./ImageLazyLoad";

// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const params = {
  pagination: {
    type: "fraction",
  },

  speed: 1300,
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
  console.log(data.projectImages());

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
          <SwiperWrapper length={data.projectImages().length}>
            {data.projectImages().length > 1 ? (
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // spaceBetween={50}
                {...params}
                navigation

                // scrollbar={{ draggable: true }}
              >
                {data.projectImages().map((image) => {
                  return (
                    <SwiperSlide key={image}>
                      <ImageLazyLoad
                        bgImg={image}
                        bgPos="center"
                        bgSize="contain"
                        bgRepeat="no-repeat"
                        paddingBottom="50%"
                        mobilePadding="66%"
                        tabletPadding="100%"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            ) : (
              <ImageLazyLoad
                bgImg={data.projectImages}
                bgPos="center"
                bgSize="contain"
                bgRepeat="no-repeat"
                paddingBottom="50%"
                mobilePadding="66%"
                tabletPadding="100%"
              />
            )}
          </SwiperWrapper>
        </Container>
      </div>
    </>
  );
};

export default ProjectImagesSwiper;
