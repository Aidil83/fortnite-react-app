import ratedT from "../../images/text_image/ratedT.png";
import {
  Android,
  Games,
  Instagram,
  KeyboardArrowUp,
  Phonelink,
  VideogameAsset,
  YouTube,
} from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { FaTwitch } from "react-icons/fa";
import {
  LinkContainer,
  Main,
  MainContainer,
  SocialContainer,
  CopyrightContainer,
  PlatFormContainer,
} from "./Footer.elements";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
  const scrollTop = (e) => {
    gsap.to(window, {
      duration: 0.7,
      scrollTo: {
        y: "top",
        offsetY: 70,
      },
    });
  };
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
            <KeyboardArrowUp className="arrow" onClick={scrollTop} />
          </ul>
        </SocialContainer>
        <LinkContainer>
          <div className="inner-link">
            <ul>
              <a href="">Home</a>
              <a href="">News</a>
              <a href="">FAQ</a>
            </ul>
            <ul>
              <a href="">Help</a>
              <a href="">Safety and Security</a>
              <a href="">Competitive</a>
            </ul>
            <ul>
              <a href="">Battle Pass</a>
              <a href="">Get Fornite</a>
              <a href="">Battle Pass</a>
            </ul>
          </div>
          <img src={ratedT} alt="rated" style={{ height: 60, width: 100 }} />
        </LinkContainer>
        <CopyrightContainer>
          <p>
            © 2021, Epic Games, Inc. Epic, Epic Games, the Epic Games logo,
            Fortnite, the Fortnite logo, Unreal, Unreal Engine 4 and UE4 are
            trademarks or registered trademarks of Epic Games, Inc. in the
            United States of America and elsewhere. Fortnite-React-app is a
            non-official personal site and not endorsed by Epic Games in any
            way. Epic Games, Fortnite, and all associated properties are
            trademarks or registered trademarks of Epic Games, Inc.
          </p>
        </CopyrightContainer>
        <PlatFormContainer>
          <ul>
            <SportsEsportsIcon />
            <VideogameAsset />
            <Games />
            <Phonelink />
            <Android />
          </ul>
        </PlatFormContainer>
      </MainContainer>
    </Main>
  );
};

export default Footer;
