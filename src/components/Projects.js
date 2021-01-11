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

const data = [
  {
    heading: "Luxury Builder Floor",
    mainImage: "/images/project1.png",
    location: "DLF Phase - I, Gurgaon · 500 Sq. Yard",
    count: "01",
    info:
      "Situated in DLF-1 on a 12-meter wide road, this super luxurious builder floor is a modern masterpiece spanning 500 sq. yards. Built at a serene and secure location, it faces a beautiful park and is fitted and furnished with high-end interiors.",
    projectImages: [
      "/images/projectImage1.png",
      "/images/projectImage2.png",
      "/images/projectImage3.png",
    ],
  },
  {
    heading: "Luxury Builder Floor",
    mainImage: "/images/project1.png",
    location: "DLF Phase - I, Gurgaon · 500 Sq. Yard",
    count: "02",
    projectImages: [
      "/images/projectImage1.png",
      "/images/projectImage2.png",
      "/images/projectImage3.png",
    ],

    info:
      "Situated in DLF-1 on a 12-meter wide road, this super luxurious builder floor is a modern masterpiece spanning 500 sq. yards. Built at a serene and secure location, it faces a beautiful park and is fitted and furnished with high-end interiors.",
  },
  {
    heading: "Luxury Builder Floor",
    mainImage: "/images/project1.png",
    location: "DLF Phase - I, Gurgaon · 500 Sq. Yard",
    count: "03",
    projectImages: [
      "/images/projectImage1.png",
      "/images/projectImage3.png",
      "/images/projectImage2.png",
    ],

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
                      <Image
                        url={detail.mainImage}
                        onClick={() => {
                          setShowSwiper(true);
                          setProjectImages(detail);
                        }}
                      />
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
              <ButtonText>Get in Touch</ButtonText>
            </div>
          </GetInTouch>
        </Container>
      </div>
    </>
  );
};

export default Projects;
