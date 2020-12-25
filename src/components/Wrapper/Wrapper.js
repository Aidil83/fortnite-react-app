import { useEffect, useRef } from "react";
import {
  WrapperImage,
  WrapperText,
  WrapperButton,
  WrapperLearnMore,
} from "./Wrapper.elements";
import snowdown from "../../images/snowdown.jpg";
import operatorSnowdown from "../../images/operatorSnowdown.png";
import { TweenMax, Power3 } from "gsap";

// NOTE: Using GSAP animation library:
const Wrapper = () => {
  let animateSnowdown = useRef(null);
  let animateLearnMore = useRef(null);
  let animateText = useRef(null);

  useEffect(() => {
    TweenMax.to(animateSnowdown, 1.2, {
      visibility: "visible",
      opacity: 1,
      delay: 0.4,
      y: -100,
      ease: "back.out",
    });

    TweenMax.to(animateLearnMore, 0.2, {
      opacity: 1,
      delay: 0.4,
      ease: "back.out",
    });
  }, []);

  return (
    <>
      <WrapperImage img={snowdown}>
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
