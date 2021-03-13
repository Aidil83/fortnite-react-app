import bgImageOne from "../images/background_image/bgSnowdown.jpg";
import bgImageTwo from "../images/background_image/bgTeam.jpg";
import bgImageThree from "../images/background_image/bgBattlepass.jpg";
import bgImageThreeMobile from "../images/background_image/bgBattlepassmobile.jpg";
import bgImageFour from "../images/background_image/bgDisneyplus.jpg";
import bgImageFourMobile from "../images/background_image/bgDisneyplusmobile.jpg";
import txtImage from "../images/text_image/operatorSnowdown.png";
import txtImageDisney from "../images/text_image/disney.png";

export const SliderData = [
  {
    bgImage: bgImageOne,
    txtImage: txtImage,
    btn: "LEARN MORE",
    widthTitleLaptop: "100%",
    posCaptionRight: "100%",
    alt: "Snowdown",

    bgBtnColor: "#ff0",
    txtBtnColor: "#000",

    imgTxtHeight: "174px",
    imgTxtLeft: "3px",

    WrapperTextContainerHeight: "49%",

    imgmobileBigwidth: "320px",
    imgmobileBigheight: "110px",
  },
  {
    bgImage: bgImageTwo,
    caption: "CHAPTER 2 - SEASON 5",
    title: "ZERO POINT",
    btn: "JOIN THE HUNT",

    bgBtnColor: "#0b0b33",
    txtBtnColor: "#fff",

    alignSelf: "center",
    // ===================
    //   WrapperTitleTxt
    // ===================
    wrapperTitleTxt__marginTop: "70%",
    wrapperTitleTxt__marginRight: "8px",

    wrapperTitleTxt__fontSize: "clamp(3.3rem, 6vw, 10rem)",

    // ==================
    //   WrapperCaption
    // ==================
    wrapperCaption__width: "max-content",
    wrapperCaption__marginTop: "100%",
    // posCaptionTop: "57%",
    // posCaptionRight: "25%",
    captionColor: "#000",
    // posCaptionRight: "100%",
    // posCaptionHeight: " 8%",

    // widthTitleLaptop: "100%",
    // posTitleBottomLaptop: "16%",
    // posTitleBottomMobileWeb: "16%",
    // fontSizeTitleIpad: "clamp(2.8rem, 6vw, 10rem)",
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
    alt: "Battle Pass",

    bgBtnColor: "#0b0b33",
    txtBtnColor: "#fff",

    // ===================
    //   WrapperTitleTxt
    // ===================
    wrapperTitleTxt__marginTop: "100%",
    wrapperTitleTxt__marginRight: "5px",
    wrapperTitleTxt__fontSize: "clamp(3.2rem, 6vw, 10rem)",

    // WrapperContainerLeft: "2.1%",
    // WrapperContainerBottom: "20%",
    // WrapperTextContainerHeight: "42%",
    // posCaptionHeight: " 5%",
    //desktop

    // ==================
    //   WrapperCaption
    // ==================
    wrapperCaption__width: "max-content",
    wrapperCaption__marginTop: "25%",
    // posCaptionTop: "31.1%",
    // posCaptionRight: "42%",
    captionColor: "#fff",

    alignSelf: "flex-start",
    wrapperCaptionWidth: 150,
    // wrapperTxtHeight: "22%",
    // wrapperCaptionHeight: "35%",

    // posTitleBottomLaptop: "28%",
    // marginRightTitleLaptop: "41%",
    // widthTitleLaptop: "50%",

    // marginRightTitleLaptopSm: "31%",
    // posTitleBottomLaptopSm: "27%",
    //Ipad

    // fontSizeTitleIpad: "clamp(3.6rem, 6vw, 10rem)",
    // fontSizeTitleIpadSm: "clamp(6.1rem, 6vw, 10rem)",
    // widthTitleIpad: 500,
  },
  {
    bgImage: bgImageFour,
    bgImageMobile: bgImageFourMobile,
    txtImage: txtImageDisney,
    widthTitleLaptop: "100%",
    btn: "LEARN MORE",
    alt: "Disney+",

    bgBtnColor: "#ff0",
    txtBtnColor: "#000",

    imgTxtLeft: "-200px",
    imgTxtHeight: "780px",
    imgTxtIpad: "22px",

    WrapperTextContainerHeight: "49%",

    imgmobileBigwidth: "96.5%",
    imgmobileBigheight: "820px",
  },
];
