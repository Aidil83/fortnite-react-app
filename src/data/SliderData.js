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
    alt: "Snowdown",
  },
  {
    bgImage: bgImageTwo,
    caption: "CHAPTER 2 - SEASON 5",
    title: "ZERO POINT",
    btn: "JOIN THE HUNT",

    alignSelf: "center",
    wrapperCaptionWidth: "auto",
    wrapperTxtHeight: "55%",
    wrapperCaptionHeight: "35%",

    posCaptionTop: "57%",
    posCaptionRight: "25%",
    captionColor: "#000",
    posCaptionRight: "100%",

    widthTitleLaptop: "100%",
    posTitleBottomLaptop: "16%",
    posTitleBottomMobileWeb: "16%",
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

    alignSelf: "flex-start",
    wrapperCaptionWidth: 150,
    wrapperTxtHeight: "45%",
    wrapperCaptionHeight: "35%",

    posTitleBottomLaptop: "28%",
    marginRightTitleLaptop: "41%",
    posTitleRightLaptop: "inherit",
    widthTitleLaptop: "50%",

    marginRightTitleLaptopSm: "31%",
    posTitleBottomLaptopSm: "27%",
    //Ipad

    fontSizeTitleIpad: "clamp(4.1rem, 6vw, 10rem)",
    fontSizeTitleIpadSm: "clamp(6.1rem, 6vw, 10rem)",
    widthTitleIpad: 500,

    alt: "Battle Pass",
  },
  {
    bgImage: bgImageFour,
    widthTitleLaptop: "100%",
    btn: "LEARN MORE",
    alt: "Disney+",
  },
];
