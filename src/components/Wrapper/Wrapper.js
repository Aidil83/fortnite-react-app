import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components/macro";
import { TweenMax } from "gsap";
import {
  WrapperImage,
  WrapperText,
  WrapperButton,
  WrapperLearnMore,
  NextBtn,
  PrevBtn,
  WrapperTitleTxt,
  WrapperTextContainer,
  WrapperCaption,
  WrapperSection,
} from "./Wrapper.elements";

// NOTE: Using GSAP animation library:
const Wrapper = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  let animateCaption = useRef(null);
  let animateSnowdown = useRef(null);
  let animateSection = useRef(null);
  let animateLearnMore = useRef(null);

  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [current, length]);

  const nextSlide = (e) => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    if (timeout.current) clearTimeout(timeout.current);
  };

  const prevSlide = (e) => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    if (timeout.current) clearTimeout(timeout.current);
  };

  useEffect(() => {
    TweenMax.fromTo(
      animateSnowdown,
      1.2,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        // autoApha: 1,
        delay: 0.75,
        y: -100,
        ease: "back.out",
      }
    );

    TweenMax.fromTo(
      animateCaption,
      1.3,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        // autoApha: 1,
        delay: 0.85,
        y: -100,
        ease: "back.out",
      }
    );

    TweenMax.fromTo(
      animateSection,
      1.3,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        // autoApha: 1,
        delay: 0.75,
        y: -160,
        ease: "back.out",
      }
    );

    TweenMax.to(animateLearnMore, {
      opacity: 1,
      ease: "out",
    });
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      {slides.map((slide, index) => (
        <div key={index}>
          {index === current && (
            <WrapperImage
              className={`mobile${index}`}
              img={slide.bgImage}
              imgMobile={slide.bgImageMobile}
            >
              <WrapperTextContainer slide={slide}>
                <WrapperCaption ref={(e) => (animateCaption = e)} slide={slide}>
                  {slide.caption}
                </WrapperCaption>
                {slide.txtImage ? (
                  <WrapperText
                    className={`mobile${index}`}
                    slide={slide}
                    src={slide.txtImage}
                    ref={(e) => {
                      animateSnowdown = e;
                    }}
                    alt={slide.alt}
                  />
                ) : (
                  <WrapperTitleTxt
                    slide={slide}
                    ref={(e) => {
                      animateSnowdown = e;
                    }}
                  >
                    {slide.title}
                  </WrapperTitleTxt>
                )}
                <WrapperSection ref={(e) => (animateSection = e)} slide={slide}>
                  {slide.section}
                </WrapperSection>
              </WrapperTextContainer>
              <WrapperButton slide={slide} ref={(e) => (animateLearnMore = e)}>
                <WrapperLearnMore slide={slide}>{slide.btn}</WrapperLearnMore>
              </WrapperButton>
              <NextBtn onClick={nextSlide}>→</NextBtn>
              <PrevBtn onClick={prevSlide}>←</PrevBtn>
            </WrapperImage>
          )}
        </div>
      ))}
    </>
  );
};

export default Wrapper;
