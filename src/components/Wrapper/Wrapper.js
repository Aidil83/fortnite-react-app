import { useEffect, useRef, useState } from "react";
import { TweenMax } from "gsap";
import {
  WrapperImage,
  WrapperText,
  WrapperButton,
  WrapperLearnMore,
  NextBtn,
  PrevBtn,
  WrapperTitleTxt,
} from "./Wrapper.elements";

// NOTE: Using GSAP animation library:
const Wrapper = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  let animateSnowdown = useRef(null);
  let animateLearnMore = useRef(null);
  const timeout = useRef(null);

  // useEffect(() => {
  //   timeout.current = setTimeout(nextSlide, 4000);

  //   return () => {
  //     if (timeout.current) clearTimeout(timeout.current);
  //   };
  // }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    TweenMax.fromTo(
      animateSnowdown,
      1.2,
      {
        opacity: 0,
      },
      {
        visibility: "visible",
        opacity: 1,
        autoApha: 1,
        delay: 0.75,
        y: -100,
        ease: "back.out",
      }
    );
    TweenMax.to(animateLearnMore, {
      opacity: 1,
      ease: "out",
    });
  }, [current]);

  return (
    <>
      {slides.map((slide, index) => (
        <div key={index}>
          {index === current && (
            <WrapperImage img={slide.bgImage}>
              {slide.txtImage ? (
                <WrapperText
                  src={slide.txtImage}
                  ref={(e) => {
                    animateSnowdown = e;
                    console.log(animateSnowdown);
                  }}
                  alt={slide.alt}
                />
              ) : (
                <WrapperTitleTxt
                  backgroundImage={slide.backgroundImage}
                  posTitleRightDesktop={slide.posTitleRightDesktop}
                  posTitleBottomDesktop={slide.posTitleBottomDesktop}
                  posTitleBottomLaptop={slide.posTitleBottomLaptop}
                  posTitleBottomIpadPro={slide.posTitleBottomIpadPro}
                  posTitleBottomIpad={slide.posTitleBottomIpad}
                  posTitleBottomMobile={slide.posTitleBottomMobile}
                  ref={(e) => {
                    animateSnowdown = e;
                  }}
                >
                  {slide.title}
                </WrapperTitleTxt>
              )}
              <WrapperButton ref={(e) => (animateLearnMore = e)}>
                <WrapperLearnMore>{slide.btn}</WrapperLearnMore>
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
