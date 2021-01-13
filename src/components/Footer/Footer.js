import { YouTube } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { FaSnapchat, FaTwitch } from "react-icons/fa";
import {
  FooterContainer,
  FooterInnerContainer,
  FooterLeft,
  FooterRight,
} from "./Footer.elements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterInnerContainer>
          <FooterLeft>
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
          </FooterLeft>
          <FooterRight></FooterRight>
        </FooterInnerContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
