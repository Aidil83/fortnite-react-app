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
        <h1>Merch</h1>
        <MerchListContainer>
          <MerchListCard>
            {images1.map((item, id) => {
              return (
                id >= 1150 &&
                id <= 1190 &&
                item.type.value === "outfit" &&
                item.images.featured && (
                  <MerchCard image={item.images.smallIcon} id={id} />
                )
              );
            })}
          </MerchListCard>
        </MerchListContainer>
      </MerchMain>
    </>
  );
};

export default Merch;
