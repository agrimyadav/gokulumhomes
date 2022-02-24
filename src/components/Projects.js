import React, { useState } from "react";
import {
  Wrapper,
  Image,
  Info,
  Heading,
  Location,
  Container,
  ProjectWrapper,
  Count,
  GetInTouch,
  ButtonText,
  ButtonTitle,
} from "../styles/styled-components/projectSection";
import { Title } from "../styles/styled-components/aboutSection";
import ProjectImagesSwiper from "./common/ProjectImagesSwiper";
import ImageLazyLoad from "./common/ImageLazyLoad";

const data = [
  {
    heading: "Luxury Builder Floor",
    mainImage: "/images/perojects/project1/Cover.jpg",
    location: "DLF Phase - IV, Gurgaon",
    count: "01",
    info:
      "Built at a serene and secure location in Gurugram, this super luxurious builder floor stands tall facing a beautiful park. It is a modern masterpiece, furnished with high-end interiors and state-of-the-art architecture. ",
    projectImages: () =>
      [...Array(17)].map(
        (arr, id) => `/images/perojects/project1/images/${id + 1}.jpg`
      ),
  },
  {
    heading: "Luxury Builder Floor",
    mainImage: "/images/perojects/project2/Cover.jpg",
    location: "DLF Phase - I, Gurgaon",
    count: "02",
    projectImages: () =>
      [...Array(21)].map(
        (arr, id) => `/images/perojects/project2/images/${id + 1}.jpg`
      ),
    info:
      "Situated in one of the most sought-after neighborhoods in Gurugram, this elegant builder floor has spacious floor layouts fitted with modern interiors. It features a private elevator and ample parking space, perfectly crafted to suit the luxurious lifestyle.",
  },
  {
    heading: "Luxury Builder Floor",
    mainImage: "/images/perojects/project3/Cover.jpg",
    location: "DLF Phase - I, Gurgaon",
    count: "03",
    projectImages: () =>
      [...Array(2)].map((arr, id) => "/images/perojects/project3/Cover.jpg"),
    info:
      "Furnished with sophisticated interiors, this newly-built builder floor is located in the heart of Gurugram. It spans an enormous indoor space with fully-furnished bedrooms, bath spaces, walk-in closets, a rooftop bar, and a terrace garden. ",
  },
];

const Projects = () => {
  const [showSwiper, setShowSwiper] = useState(false);
  const [projectImages, setProjectImages] = useState({});
  return (
    <>
      {showSwiper && (
        <ProjectImagesSwiper
          data={projectImages}
          showSwiper={showSwiper}
          setShowSwiper={() => setShowSwiper()}
        />
      )}
      <div style={{ position: "relative" }}>
        <Container>
          <Title>Projects</Title>
          <Wrapper>
            {data.map((detail, id) => {
              return (
                <div key={`project-${id}`}>
                  <ProjectWrapper id={id}>
                    <div style={{ overflow: "hidden", position: "relative" }}>
                      <Image>
                        <ImageLazyLoad
                          bgImg={detail.mainImage}
                          onClick={() => {
                            setShowSwiper(true);
                            setProjectImages(detail);
                          }}
                          bgPos="center"
                          bgSize="cover"
                          paddingBottom="112%"
                          mobilePadding="124%"
                        />
                      </Image>
                      <Count>{detail.count}</Count>
                    </div>
                    <Heading>{detail.heading}</Heading>
                    <Location>{detail.location}</Location>
                    <Info>{detail.info}</Info>
                  </ProjectWrapper>
                </div>
              );
            })}
          </Wrapper>
          <GetInTouch>
            <div>
              <ButtonTitle>Upcoming Projects</ButtonTitle>
              <ButtonText>
                <a href="mailto:info@gokulumhomes.com">Get in Touch</a>
              </ButtonText>
            </div>
          </GetInTouch>
        </Container>
      </div>
    </>
  );
};

export default Projects;
