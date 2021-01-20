import { useEffect } from "react";
import {
  MerchMain,
  MerchHeroContainer,
  MerchListCard,
  MerchTab,
} from "./Merch.elements";
import MerchCard from "./MerchCard";

const Merch = () => {
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
        <MerchListCard>
          {Array(25)
            .fill()
            .map((_) => (
              <MerchCard />
            ))}
        </MerchListCard>
      </MerchMain>
    </>
  );
};

export default Merch;
