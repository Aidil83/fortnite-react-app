import {useEffect, useState} from "react";
import axios from "axios";
import {MerchListContainer, MerchSpinner, } from "./Merch.elements";
import {MerchMain, MerchHeroContainer, MerchListCard, MerchHidden} from "./Merch.elements";
import MerchCard from "./MerchCard";
import {NavigateBefore, NavigateNext} from "@material-ui/icons";
import {Modal} from '..';
import {ModalData} from '../../data/ModalData';
import {useContext} from 'react';
import {StateContext} from '../../context/StateProvider';
import backdrop6 from '../../images/backdrop/backdrop6.jpg';

const Merch = () => {
  const [{hoverCard, firstCard, getApi}, dispatch] = useContext(StateContext);

  const [loadStart, setLoadStart] = useState(1);
  const [loadEnd, setLoadEnd] = useState(30);
  const [isModal, setIsModal] = useState(false);
  const [spinner, setSpinner] = useState(true);
  const [hoverImage, setHoverImage] = useState([])

  useEffect(() => {
    (async () => {
      const res = await axios("https://fortnite-api.com/v2/cosmetics/br");
      const _data = res.data.data;
      // console.log(_data[1010]);
      const featuredData = _data.filter(
        (item) => item.images.featured !== null
      );
      //IMPORTANT: shuffling method:
      function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
      }
      //NOTE: shuffle image cards after the first load:
      shuffle(featuredData);
      setHoverImage(featuredData);

      dispatch({
        type: "GETAPI",
        getApi: featuredData,
      })
    })();
  }, []);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2500);
  }, [loadStart, loadEnd])

  const handlePrevtBtn = () => {
    // NOTE: 30 cuz asynchronous render
    if (loadStart <= 30) {
      setLoadStart(getApi.length - 30);
      setLoadEnd(getApi.length);
      return;
    }
    setLoadStart(loadStart - 30);
    setLoadEnd(loadEnd - 30);
  };

  const handleNextBtn = () => {
    // NOTE: 30 cuz asynchronous render
    if (loadEnd >= getApi.length - 30) {
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
      {/* <MerchMain style={{backgroundImage: `url(${hoverCard.images?.featured})`}}> */}
      <MerchMain style={{backgroundImage: `url(${backdrop6})`}}>
        {isModal && <Modal handleModal={handleModal} />}
        <MerchHeroContainer >
          {firstCard === 0 ? (spinner ? <></> : (<div className="innerContainer">
            <img src={getApi[1]?.images?.featured} alt="" />
            <div className="inner-description">
              <h1>{getApi[1]?.name}</h1>
              <h4>{getApi[1]?.description}</h4>
            </div>
          </div>)) :
            (spinner ? <></> : (<div className="innerContainer">
              <img src={hoverCard?.images?.featured} alt="" />
              <div className="inner-description">
                <h1>{hoverCard?.name}</h1>
                <h4>{hoverCard?.description}</h4>
              </div>
            </div>))}
        </MerchHeroContainer>
        <MerchListContainer>
          {spinner ? <MerchListCard><MerchSpinner color={"#999999"} /></MerchListCard> : (<MerchListCard>
            {getApi.map((item, id) => {
              return (
                // Display 30 images:
                id >= loadStart &&
                id <= loadEnd && <>
                  <MerchCard item={item} id={id} handleModal={handleModal} />
                  <MerchHidden>
                    <img src={item.images.featured} alt={id} />
                  </MerchHidden></>
              );
            })}
          </MerchListCard>)}
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
