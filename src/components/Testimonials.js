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

const comments = [
  {
    comment:
      "Gokulum Homes has been helping me with my real estate needs for more than a year now, and I am really satisfied. They always communicate on time, and lookout for the best of my interests through each negotiation!",
    name: "Mayank Verma",
    location: "",
  },
  {
    comment:
      "It was a pleasure working with a knowledgeable and efficient team at Gokulum Homes. We really appreciate the attention paid to our concerns, from catering to interior design needs, planning finances, or building our perfect abode. I would recommend them to anyone who needs expert help.",
    name: "Dr. Akash Tyagi",
    location: "",
  },
  {
    comment:
      "This is a thank you note for the exceptional service we received from Gokulum Homes. Thanks for making the sale of our first home a success! We couldn't have done it so smoothly without their professional and expert help.",
    name: "Soumya Sharma",
    location: "",
  },
];

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
          {comments.map((comment) => {
            return (
              <Card key={comment}>
                <Text>" {comment.comment} "</Text>
                <SubText>{comment.name}</SubText>
                <SubText location>{comment.location}</SubText>
              </Card>
            );
          })}
        </Container>

        {/* Mobile swiper */}
        <Container mobile>
          <Swiper {...params} getSwiper={updateSwiper}>
            {comments.map((comment) => {
              return (
                <div>
                  <Card key={`swiper-${comment}`}>
                    <Text>" {comment.comment} "</Text>
                    <SubText>{comment.name}</SubText>
                    <SubText location>{comment.location}</SubText>
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
