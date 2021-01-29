import {useEffect, useState} from "react";
import axios from "axios";
import {MerchMain, MerchHeroContainer, MerchListCard} from "./Merch.elements";
import {MerchTab, MerchListContainer, } from "./Merch.elements";
import MerchCard from "./MerchCard";
import {NavigateBefore, NavigateNext} from "@material-ui/icons";
import {Modal} from '..';
import {ModalData} from '../../data/ModalData';
import {useContext} from 'react';
import {StateContext} from '../../context/StateProvider';
import backdrop6 from '../../images/backdrop/backdrop6.jpg';
import blackWidow from '../../images/merch_image_icon/smallicon-blackWidow.png'

const Merch = () => {
  const [images1, setImages1] = useState([]);
  const [loadStart, setLoadStart] = useState(1);
  const [loadEnd, setLoadEnd] = useState(30);
  const [isModal, setIsModal] = useState(false)

  const [{hoverCard}, dispatch] = useContext(StateContext);

  useEffect(() => {
    (async () => {
      const res = await axios("https://fortnite-api.com/v2/cosmetics/br");
      const _data = res.data.data;
      // console.log(_data[1010]);
      const featuredData = _data.filter(
        (item) => item.images.featured !== null
      );
      function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
      }
      //NOTE: shuffle image cards after the first load:
      shuffle(featuredData);

      // console.log(featuredData);
      setImages1(featuredData);
      dispatch({
        type: "GETAPI",
        getApi: featuredData,
      })
    })();
  }, []);

  const handlePrevtBtn = () => {
    // NOTE: 30 cuz asynchronous render
    if (loadStart <= 30) {
      setLoadStart(images1.length - 30);
      setLoadEnd(images1.length);
      return;
    }
    setLoadStart(loadStart - 30);
    setLoadEnd(loadEnd - 30);
  };

  const handleNextBtn = () => {
    // NOTE: 30 cuz asynchronous render
    if (loadEnd >= images1.length - 30) {
      setLoadStart(1);
      setLoadEnd(30);
      return;
    }
    setLoadStart(loadStart + 30);
    setLoadEnd(loadEnd + 30);
  };

  // coming from MerchCard
  const handleModal = (modalData) => {
    setIsModal(!isModal);
    dispatch({
      type: "MODALDATA",
      modalData: modalData,
    });
    if (modalData.rarity?.value === "legendary") {
      dispatch({
        type: "MODALPRICE",
        modalPrice: {price: 2000, background: ModalData.legendCard.radialOrange},
      })
    }
    else if (modalData.rarity?.value === "epic") {
      dispatch({
        type: "MODALPRICE",
        modalPrice: {price: 1000, background: ModalData.epicCard.radialPurple},
      })
    }
    else if (modalData.rarity?.value === "rare") {
      dispatch({
        type: "MODALPRICE",
        modalPrice: {price: 500, background: ModalData.rareCard.radialBlue},
      })
    }
    else if (modalData.rarity?.value === "uncommon") {
      dispatch({
        type: "MODALPRICE",
        modalPrice: {price: 300, background: ModalData.uncommonCard.radialGreen},
      })
    }
    else if (modalData.rarity?.value === "common") {
      dispatch({
        type: "MODALPRICE",
        modalPrice: {price: 100, background: ModalData.commonCard.radialGray},
      })
    }
    else {
      dispatch({
        type: "MODALPRICE",
        modalPrice: {price: 700, background: ModalData.specialCard.radialTan},
      })
    }
  };

  return (
    <>
      {/* <MerchMain style={{backgroundImage: `url(${hoverCard})`}}> */}
      <MerchMain style={{backgroundImage: `url(${backdrop6})`}}>
        {isModal && <Modal handleModal={handleModal} />}
        {/* <MerchTab>
          <div>Item Shop</div>
        </MerchTab> */}
        <MerchHeroContainer >
          <div className="innerContainer">
            <img src={hoverCard.images?.featured} alt="" />
            <div className="inner-description">
              <h1>Omega</h1>
              <h4>An outlaw gunslinger who doles out justice on his own terms.</h4>
            </div>
          </div>
        </MerchHeroContainer>
        <MerchListContainer>
          <MerchListCard>
            {images1.map((item, id) => {
              return (
                // Display 30 images:
                id >= loadStart &&
                id <= loadEnd && <MerchCard item={item} id={id} handleModal={handleModal} />
              );
            })}
          </MerchListCard>
          <div className="buttonContainer">
            <button>
              <NavigateBefore onMouseDown={handlePrevtBtn} />
            </button>
            <button>
              <NavigateNext onMouseDown={handleNextBtn} />
            </button>
          </div>
        </MerchListContainer>
      </MerchMain>
    </>
  );
};

export default Merch;
