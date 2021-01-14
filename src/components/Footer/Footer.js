import ratedT from "../../images/text_image/ratedT.png";
import { Instagram, YouTube } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { FaTwitch } from "react-icons/fa";
import {
  LinkContainer,
  Main,
  MainContainer,
  SocialContainer,
  CopyrightContainer,
} from "./Footer.elements";

const Footer = () => {
  return (
    <Main>
      <MainContainer>
        <SocialContainer>
          <ul>
            <FacebookIcon />
            <TwitterIcon />
            <FaTwitch
              style={{ fontSize: "1.5rem", alignSelf: "center", color: "#ccc" }}
            />
            <Instagram />
            <YouTube />
          </ul>
        </SocialContainer>
        <LinkContainer>
          <ul>
            <a href="">Home</a>
            <a href="">News</a>
            <a href="">FAQ</a>
            <a href="">Help</a>
            <a href="">Safety and Security</a>
            <a href="">Competitive</a>
            <a href="">Battle Pass</a>
            <a href="">Get Fornite</a>
          </ul>
          <img src={ratedT} alt="rated" style={{ height: 60, width: 100 }} />
        </LinkContainer>
        <CopyrightContainer>
          <p>
            © 2021, Epic Games, Inc. Epic, Epic Games, the Epic Games logo,
            Fortnite, the Fortnite logo, Unreal, Unreal Engine 4 and UE4 are
            trademarks or registered trademarks of Epic Games, Inc. in the
            United States of America and elsewhere. All rights reserved.
          </p>
        </CopyrightContainer>
      </MainContainer>
    </Main>
  );
};

export default Footer;
