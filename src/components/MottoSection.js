import React from "react";
import {
  WrapperGrid,
  Image,
  Heading,
  InfoGrid,
  Text,
  Container,
} from "../styles/styled-components/mottoSection";
import CustomContainer from "./common/CustomContainer";

const MottoSection = () => {
  return (
    <>
      <Container>
        <CustomContainer>
          <WrapperGrid>
            <Image src="/images/motto2.jpeg"></Image>
            <Text>
              Our motto is 'Comfort, Quality, and Luxury'. Keeping that in mind,
              we reinvent spaces with the sophistication of a luxury brand and
              aim to impart the utmost care in this process, helping everyone
              find their perfect abode.
            </Text>
          </WrapperGrid>
        </CustomContainer>
      </Container>
    </>
  );
};

export default MottoSection;
