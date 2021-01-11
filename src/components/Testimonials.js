import React, { useState } from "react";

import Swiper from "react-id-swiper";
import {
  Container,
  Card,
  Text,
  SubText,
  PaginationWrapper,
} from "../styles/styled-components/testimonials";
import { Next, Prev, Count } from "../styles/styled-components/heroSwiper";

const params = {
  slidesPerView: 1,
  spaceBetween: 32,
  loop: true,
  allowTouchMove: false,
  centeredSlides: true,
};

const Testimonials = () => {
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
      <div>
        <Container>
          {[1, 2, 3].map((card) => {
            return (
              <Card key={card}>
                <Text>
                  " I am really satisfied with the services offered by Gokulum
                  Homes. The best part was the care and attention with which
                  they understood the details of what I had in mind. They
                  actually listened to my needs and helped me find exactly what
                  I was looking for! “
                </Text>
                <SubText>Tamana Grover</SubText>
                <SubText location>DLF Phase - I, Gurgaon</SubText>
              </Card>
            );
          })}
        </Container>

        {/* Mobile swiper */}
        <Container mobile>
          <Swiper {...params} getSwiper={updateSwiper}>
            {[1, 2, 3].map((card) => {
              return (
                <div>
                  <Card key={`card-${card}`}>
                    <Text>
                      " I am really satisfied with the services offered by
                      Gokulum Homes. The best part was the care and attention
                      with which they understood the details of what I had in
                      mind. They actually listened to my needs and helped me
                      find exactly what I was looking for! “
                    </Text>
                    <SubText>Tamana Grover</SubText>
                    <SubText location>DLF Phase - I, Gurgaon</SubText>
                  </Card>
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
              <Count style={{ marginLeft: "9px" }}>03</Count>
            </div>
            <Next next onClick={goNext}></Next>
          </PaginationWrapper>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;
