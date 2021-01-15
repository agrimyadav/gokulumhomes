import React from "react";
import {
  WrapperGrid,
  Title,
  Heading,
  InfoGrid,
  Text,
} from "../styles/styled-components/aboutSection";

const AboutSection = () => {
  return (
    <>
      <WrapperGrid>
        <Title>About</Title>
        <div>
          <Heading>
            At Gokulum Homes, we take pride in building super luxurious
            residences in and around NCR, along with a lifetime liaison with our
            clients.
          </Heading>
          <InfoGrid>
            <Text>
              Founded in 1990 by Mr. Amarjeet Yadav, it all began with a vision
              to build lavish and splendid habitation. Growing ever since, the
              venture is now strengthened by his son Agrim Yadav. Along with
              catering well to the needs of our customers, and building
              excellent residential spaces, we partake in all our duties with a
              mission. Our properties are prized for their thoughtful
              architecture, excellent engineering , and impeccable execution
            </Text>
            <Text>
              Today, we provide furnished properties with excellent architecture
              and elegant living spaces in Gurugram's most premium locations.
              Our listings include luxury penthouses, flats, homes, wiht our
              most revered specialization being expansive and luxurious high-end
              builder floors.
            </Text>
          </InfoGrid>
        </div>
      </WrapperGrid>
    </>
  );
};

export default AboutSection;
