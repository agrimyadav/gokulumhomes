import React, { useEffect } from "react";
import {
  MobileWrapper,
  Text,
  Image,
  NavItems,
  MobileButton,
} from "../../styles/styled-components/headerStyles";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { animateScroll as scroll } from "react-scroll";

const MobileMenu = ({ isOpen, onClose, headerLinks }) => {
  const targetElement = React.useRef(null);

  const scrollToSection = (element) => {
    const scrollSection = document.querySelector(`#${element}`);
    onClose(!isOpen);
    scroll.scrollTo(scrollSection && scrollSection.offsetTop - 20, {
      duration: 1000,
      smooth: "easeInOut",
      delay: 500,
    });
  };

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(targetElement.current);
    } else {
      enableBodyScroll(targetElement.current);
    }
  }, [isOpen]);
  return (
    <>
      <div style={{ position: "relative" }} ref={targetElement}>
        <MobileWrapper isOpen={isOpen}>
          <div style={{ height: "100%" }}>
            <div style={{ position: "relative" }}>
              <Image
                src="/images/close3.svg"
                onClick={() => onClose(!isOpen)}
              />
            </div>
            <NavItems>
              <div
                style={{
                  flexGrow: "1",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                {headerLinks.map((link) => {
                  return (
                    <Text
                      key={`mobile-${link.handle}`}
                      onClick={() => scrollToSection(link.handle)}
                    >
                      {link.name}
                    </Text>
                  );
                })}
              </div>
              <div>
                <MobileButton>
                  <a href="mailto:info@gokulumhomes.com">Get in touch</a>
                </MobileButton>
              </div>
            </NavItems>
          </div>
        </MobileWrapper>
      </div>
    </>
  );
};

export default MobileMenu;
