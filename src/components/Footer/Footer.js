import { YouTube } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { FaTwitch } from "react-icons/fa";
import {
  FooterMain,
  FooterContainer,
  FooterInnerContainer1,
  FooterRight,
} from "./Footer.elements";

const Footer = () => {
  return (
    <>
      <FooterMain>
        <FooterContainer>
          <FooterInnerContainer1>
            <div className="innerLeft">
              <ul>
                <FacebookIcon />
                <TwitterIcon />
                <FaTwitch style={{ fontSize: "1.5rem", alignSelf: "center" }} />
                <YouTube />
              </ul>
              <div>
                <a href="">Home</a>
                <a href="">News</a>
                <a href="">FAQ</a>
                <a href="">Help</a>
                <a href="">Safety and Security</a>
                <a href="">Competitive</a>
                <a href="">Battle Pass</a>
                <a href="">Get Fornite</a>
              </div>
            </div>
            <div className="innerRight"></div>
          </FooterInnerContainer1>
        </FooterContainer>
      </FooterMain>
    </>
  );
};

export default Footer;
