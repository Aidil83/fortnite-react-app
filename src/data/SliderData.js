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
    posCaptionRight: "100%",
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

    posCaptionTop: "57%",
    posCaptionRight: "25%",
    captionColor: "#000",
    posCaptionRight: "100%",

    widthTitleLaptop: "100%",
    posTitleRightDesktop: 0,
    posTitleBottomDesktop: 150,
    posTitleBottomLaptop: "16%",
    posTitleBottomIpadPro: 390,
    posTitleBottomIpad: 250,
    posTitleBottomMobileWeb: "16%",
    posTitleBottomMobile: 150,
    fontSizeTitleIpad: "clamp(5.1rem, 6vw, 10rem)",
    alt: "Zero Point",
    backgroundImage: "linear-gradient(#0a2a8a, #178fd7, #0a2a8a)",
  },
  {
    bgImage: bgImageThree,
    bgImageMobile: bgImageThreeMobile,
    marginRightTitleLaptop: 0,
    caption: "SEASON 5",
    title: "BATTLE PASS",
    section: "ZERO POINT",
    btn: "JOIN THE HUNT",
    backgroundImage: "linear-gradient(#FFF, #FFF, #FFF)",

    WrapperContainerLeft: "2.1%",
    WrapperContainerBottom: "20%",
    //desktop
    posCaptionTop: "31.1%",
    posCaptionRight: "42%",
    captionColor: "#fff",

    posTitleRightDesktop: 300,
    posTitleBottomDesktop: 380,

    posTitleBottomLaptop: "28%",
    marginRightTitleLaptop: "41%",
    posTitleRightLaptop: "inherit",
    widthTitleLaptop: "50%",

    marginRightTitleLaptopSm: "31%",
    posTitleBottomLaptopSm: "27%",
    //Ipad
    posTitleBottomIpadPro: 390,

    posTitleBottomIpad: 250,
    fontSizeTitleIpad: "clamp(6.1rem, 6vw, 10rem)",
    posTitleBottomIpadSm: 250,
    fontSizeTitleIpadSm: "clamp(4.1rem, 6vw, 10rem)",
    widthTitleIpad: 500,
    posTitleBottomMobileWeb: "8%",

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
