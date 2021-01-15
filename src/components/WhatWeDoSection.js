import React from "react";
import CustomContainer from "./common/CustomContainer";

import { Title } from "../styles/styled-components/aboutSection";
import {
  WrapperGrid,
  Subheading,
  Text,
  Div,
  OuterWrapper,
  MainWrapper,
} from "../styles/styled-components/whatWeDo";
import { Container } from "../styles/styled-components/mottoSection";

const WhatWeDoSection = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <CustomContainer>
            <OuterWrapper>
              <WrapperGrid>
                <Title white>What we do</Title>
                <Subheading>
                  We offer a wide spectrum of services and extend best-in-market
                  solutions to our clientele with an optimized approach.
                </Subheading>
              </WrapperGrid>
              {/* <WrapperGrid padding>
                {data.map((item) => {
                  return <div>{item.text}</div>;
                })} 
              </WrapperGrid> */}
              <WrapperGrid padding>
                <Div border>
                  <Text count>01</Text>
                  <Text>Architecture</Text>
                </Div>
                <Div>
                  <Text count>02</Text>
                  <Text>Interior design</Text>
                </Div>
              </WrapperGrid>
              <WrapperGrid padding>
                <Div border>
                  <Text count>03</Text>
                  <Text>Visualisation</Text>
                </Div>
                <Div>
                  <Text count>04</Text>
                  <Text>Investment Planning</Text>
                </Div>
              </WrapperGrid>
              <WrapperGrid padding>
                <Div border>
                  <Text count>05</Text>
                  <Text>Real estate dealings</Text>
                </Div>
                <Div>
                  <Text count>06</Text>
                  <Text>Collaborations</Text>
                </Div>
              </WrapperGrid>
            </OuterWrapper>
          </CustomContainer>
        </Container>
      </MainWrapper>
    </>
  );
};

export default WhatWeDoSection;
