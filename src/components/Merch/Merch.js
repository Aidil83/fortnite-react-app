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
  const [loadStart, setLoadStart] = useState(1201);
  const [loadEnd, setLoadEnd] = useState(1231);

  useEffect(() => {
    (async () => {
      const res = await axios("https://fortnite-api.com/v2/cosmetics/br");
      // console.log(res1.data.data[1001]);
      setImages1(res.data.data);
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
              return (
                id >= loadStart &&
                id <= loadEnd &&
                item.type.value === "outfit" &&
                item.images.featured && <MerchCard item={item} id={id} />
              );
            })}
          </MerchListCard>
          <div className="buttonContainer">
            <button>
              <NavigateBefore onClick={handlePrevtBtn} />
            </button>
            <button>
              <NavigateNext onClick={handleNextBtn} />
            </button>
          </div>
        </MerchListContainer>
      </MerchMain>
    </>
  );
};

export default Merch;
