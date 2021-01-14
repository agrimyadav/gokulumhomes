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
      "Situated in DLF-1 on a 12-meter wide road, this super luxurious builder floor is a modern masterpiece spanning 500 sq. yards. Built at a serene and secure location, it faces a beautiful park and is fitted and furnished with high-end interiors.",

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
      "Situated in DLF-1 on a 12-meter wide road, this super luxurious builder floor is a modern masterpiece spanning 500 sq. yards. Built at a serene and secure location, it faces a beautiful park and is fitted and furnished with high-end interiors.",
  },
  {
    heading: "Luxury Builder Floor",
    mainImage: "/images/perojects/project3/Cover.jpg",
    location: "DLF Phase - I, Gurgaon · 500 Sq. Yard",
    count: "03",
    projectImages: ["/images/perojects/project3/Cover.jpg"],

    info:
      "Situated in DLF-1 on a 12-meter wide road, this super luxurious builder floor is a modern masterpiece spanning 500 sq. yards. Built at a serene and secure location, it faces a beautiful park and is fitted and furnished with high-end interiors.",
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
