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
    mainImage: "/images/perojects/project1/images/1.jpg",
    location: "DLF Phase - I, Gurgaon · 500 Sq. Yard",
    count: "01",
    info:
      "Built at a serene and secure location in Gurugram, this super luxurious builder floor stands tall facing a beautiful park. It is a modern masterpiece, furnished with high-end interiors and state-of-the-art architecture. ",
    projectImages: [
      "/images/perojects/project1/Cover.jpg",
      "/images/perojects/project1/images/1.jpg",
      "/images/perojects/project1/images/2.jpg",
      "/images/perojects/project1/images/3.jpg",
      "/images/perojects/project1/images/4.jpg",
      "/images/perojects/project1/images/5.png",
      "/images/perojects/project1/images/6.png",
      "/images/perojects/project1/images/7.JPG",
      "/images/perojects/project1/images/8.JPG",
      "/images/perojects/project1/images/9.jpg",
      "/images/perojects/project1/images/10.jpg",
      "/images/perojects/project1/images/11.jpg",
      "/images/perojects/project1/images/12.jpg",
    ],
  },
  {
    heading: "Luxury Builder Floor",
    mainImage: "/images/perojects/project2/Cover.jpg",
    location: "DLF Phase - I, Gurgaon · 500 Sq. Yard",
    count: "02",
    projectImages: [
      "/images/perojects/project2/images/1.PNG",
      "/images/perojects/project2/images/2.PNG",
      "/images/perojects/project2/images/3.PNG",
      "/images/perojects/project2/images/4.PNG",
      "/images/perojects/project2/images/5.PNG",
    ],

    info:
      "Situated in one of the most sought-after neighborhoods in Gurugram, this elegant builder floor has spacious floor layouts fitted with modern interiors. It features a private elevator and ample parking space, perfectly crafted to suit the luxurious lifestyle.",
  },
  {
    heading: "Luxury Builder Floor",
    mainImage: "/images/perojects/project3/Cover.jpg",
    location: "DLF Phase - I, Gurgaon · 500 Sq. Yard",
    count: "03",
    projectImages: ["/images/perojects/project3/Cover.jpg"],

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
                          // url={detail.mainImage}
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
