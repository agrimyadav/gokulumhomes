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
      "I am really satisfied with the services offered by Gokulum Homes. The best part was the care and attention with which they understood the details of what I had in mind.They actually listened to my needs and helped me find exactly what I was looking for!",
    name: "Mayank Verma",
    location: "",
  },
  {
    comment:
      "This is a thank you note for the exceptional service we received from Gokulum Homes. We really appreciate the attention they paid to our concerns, whether it was about finances, or finding a specific product for our home, everything went smoothly.",
    name: "Soumya Sharma",
    location: "",
  },
  {
    comment:
      "The best part about collaborating with Gokulum Homes was that everything was so well-planned from the beginning. I am very content with their services, especially the quick responses we got in emergencies. It was a great experience overall.",
    name: "Dr. Akash Tyagi",
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
