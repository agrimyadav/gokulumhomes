import React, { useEffect } from "react";
import {
  MobileWrapper,
  Text,
  Image,
  NavItems,
  MobileButton,
} from "../../styles/styled-components/headerStyles";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const MobileMenu = ({ isOpen, onClose }) => {
  const targetElement = React.useRef(null);

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
                <Text>About</Text>
                <Text>Projects</Text>
                <Text>Services</Text>
                <Text>Careers</Text>
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
