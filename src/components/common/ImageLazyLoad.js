import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { device } from "../../styles/styled-components/mediaQueries";

class ImageLazyLoad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  afterImageLoad = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { loaded } = this.state;
    const { children, bgImg, q, ...rest } = this.props;

    return (
      <Div
        style={
          loaded
            ? {
                backgroundImage: `url(${bgImg}${q ? `?${q}` : ""})`,
                backgroundColor: "transparent",
              }
            : { backgroundColor: "#f6f6f6" }
        }
        {...rest}
      >
        <InnerDiv
          style={{
            background: `url(${bgImg}?q=20&w=200) center center/cover`,
            filter: "blur(34px)",
            opacity: loaded ? "0" : "1",
          }}
        />
        {!loaded && (
          <LazyLoadImage
            height={"100%"}
            afterLoad={this.afterImageLoad}
            src={bgImg}
            width={"100%"}
            style={{ opacity: "0", position: "absolute", zIndex: "-100000" }}
          />
        )}
        {children}
      </Div>
    );
  }
}

export default ImageLazyLoad;

const Div = styled.div`
  position: relative;
  overflow: hidden;
  background-size: ${(props) => props.bgSize};
  background-position: ${(props) => props.bgPos};
  padding-bottom: ${(props) => props.paddingBottom};

  @media only screen and ${device.mobileL} {
    padding-bottom: ${(props) =>
      props.mobilePadding ? props.mobilePadding : props.paddingBottom};
  }

  @media only screen and ${device.tablet} {
    padding-bottom: ${(props) =>
      props.tabletPadding ? props.tabletPadding : props.paddingBottom};
  }

  @media only screen and ${device.laptop} {
    padding-bottom: ${(props) => props.paddingBottom};
  }
`;

const InnerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: opacity 0.4s ease-in-out;
`;
