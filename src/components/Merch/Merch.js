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

  useEffect(() => {
    (async () => {
      const res = await axios("https://fortnite-api.com/v2/cosmetics/br");
      // console.log(res1.data.data[1001]);
      setImages1(res.data.data);
    })();
  }, []);

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
                id >= 1050 &&
                id <= 1090 &&
                item.type.value === "outfit" &&
                item.images.featured && <MerchCard item={item} id={id} />
              );
            })}
          </MerchListCard>
          <div className="buttonContainer">
            <button>
              <NavigateBefore />
            </button>
            <button>
              <NavigateNext />
            </button>
          </div>
        </MerchListContainer>
      </MerchMain>
    </>
  );
};

export default Merch;
