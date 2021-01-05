import bgImageOne from "../images/background_image/bgSnowdown.jpg";
import bgImageTwo from "../images/background_image/bgTeam.jpg";
import bgImageThree from "../images/background_image/bgBattlepass.jpg";
import bgImageThreeMobile from "../images/background_image/bgBattlepassmobile.jpg";
import bgImageFour from "../images/background_image/bgDisneyplus.jpg";
import txtImage from "../images/text_image/operatorSnowdown.png";

export const SliderData = [
  {
    bgImage: bgImageOne,
    txtImage: txtImage,
    btn: "LEARN MORE",
    widthTitleLaptop: "100%",
    posTitleRightDesktop: 0,
    posTitleBottomDesktop: 150,
    posTitleBottomIpad: 380,
    posTitleBottomMobile: 200,
    alt: "Snowdown",
  },
  {
    bgImage: bgImageTwo,
    caption: "CHAPTER 2 - SEASON 5",
    title: "ZERO POINT",
    btn: "JOIN THE HUNT",
    widthTitleLaptop: "100%",
    posTitleRightDesktop: 0,
    posTitleBottomDesktop: 150,
    posTitleBottomLaptop: 200,
    posTitleBottomIpadPro: 390,
    posTitleBottomIpad: 250,
    posTitleBottomMobile: 150,
    fontSizeTitleIpad: "clamp(5.1rem, 6vw, 10rem)",
    alt: "Zero Point",
    backgroundImage: "linear-gradient(#0a2a8a, #178fd7, #0a2a8a)",
  },
  {
    bgImage: bgImageThree,
    bgImageMobile: bgImageThreeMobile,
    caption: "SEASON 5",
    title: "BATTLE PASS",
    section: "ZERO POINT",
    btn: "JOIN THE HUNT",
    backgroundImage: "linear-gradient(#FFF, #FFF, #FFF)",

    //desktop
    posTitleRightDesktop: 300,
    posTitleBottomDesktop: 380,

    posTitleBottomLaptop: 430,
    posTitleRightLaptop: 760,
    widthTitleLaptop: "35%",

    posTitleRightLaptopSm: 500,
    posTitleBottomLaptopSm: 330,
    //Ipad
    posTitleBottomIpadPro: 390,

    posTitleBottomIpad: 250,
    posTitleRightIpad: 240,
    fontSizeTitleIpad: "clamp(6.1rem, 6vw, 10rem)",
    widthTitleIpad: "50%",

    posTitleBottomMobile: 150,
    alt: "Battle Pass",
  },
  {
    bgImage: bgImageFour,
    widthTitleLaptop: "100%",
    btn: "LEARN MORE",
    alt: "Disney+",
  },
];
