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
  const [images1, setImages] = useState([]);
  const [images2, setImages2] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios("https://fortnite-api.com/v2/shop/br/combined");
      const res1 = await axios("https://fortnite-api.com/v2/cosmetics/br");
      // console.log(res.data.data.featured.entries);
      // console.log(res1.data.data[1001].images.featured);
      setImages(res.data.data.featured.entries);
      setImages2(res1.data.data);
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
            {images2.map((item, id) => {
              return (
                id <= 20 &&
                item.images.featured && (
                  <MerchCard image={item.images.featured} id={id} />
                )
              );
            })}
            {/* {images.map((item, id) => {
              return (
                item.items[0].images.featured && (
                  <MerchCard img={item.items[0].images.smallIcon} id={id} />
                )
              );
            })} */}
          </MerchListCard>
        </MerchListContainer>
      </MerchMain>
    </>
  );
};

export default Merch;
