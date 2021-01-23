import { useEffect, useState } from "react";
import axios from "axios";
import {
  MerchMain,
  MerchHeroContainer,
  MerchListCard,
  MerchTab,
  MerchListContainer,
} from "./Merch.elements";
import MerchCard from "./MerchCard";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

const Merch = () => {
  const [images1, setImages1] = useState([]);
  const [loadStart, setLoadStart] = useState(0);
  const [loadEnd, setLoadEnd] = useState(30);

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
    })();
  }, []);

  const handlePrevtBtn = () => {
    setLoadStart(loadStart - 30);
    setLoadEnd(loadEnd - 30);
  };

  const handleNextBtn = () => {
    setLoadStart(loadStart + 30);
    setLoadEnd(loadEnd + 30);
  };

  return (
    <>
      <MerchMain>
        <MerchTab>
          <div>Item Shop</div>
        </MerchTab>
        <MerchHeroContainer>
          <h3>Hero</h3>
        </MerchHeroContainer>
        <MerchListContainer>
          <MerchListCard>
            {images1.map((item, id) => {
              if (item.images.featured !== null)
                return (
                  // Display 30 images:
                  id >= loadStart &&
                  id <= loadEnd && <MerchCard item={item} id={id} />
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
