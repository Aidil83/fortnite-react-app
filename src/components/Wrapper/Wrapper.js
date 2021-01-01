import { useEffect, useRef } from "react";
import bgSnowdown from "../../images/background_image/bgSnowdown.jpg";
import operatorSnowdown from "../../images/text_image/operatorSnowdown.png";

import { TweenMax, Power3 } from "gsap";
import {
  WrapperImage,
  WrapperText,
  WrapperButton,
  WrapperLearnMore,
} from "./Wrapper.elements";

// NOTE: Using GSAP animation library:
const Wrapper = ({ isOpen }) => {
  let animateSnowdown = useRef(null);
  let animateLearnMore = useRef(null);

  useEffect(() => {
    TweenMax.to(animateSnowdown, 1.2, {
      visibility: "visible",
      opacity: 1,
      delay: 0.95,
      y: -100,
      ease: "back.out",
    });

    TweenMax.to(animateLearnMore, {
      opacity: 1,
      ease: "out",
    });
  }, []);

  return (
    <>
      <WrapperImage img={bgSnowdown}>
        <WrapperText
          img={operatorSnowdown}
          ref={(e) => (animateSnowdown = e)}
        />
        <WrapperButton ref={(e) => (animateLearnMore = e)}>
          <WrapperLearnMore>LEARN MORE</WrapperLearnMore>
        </WrapperButton>
      </WrapperImage>
    </>
  );
};

export default Wrapper;
