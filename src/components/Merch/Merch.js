import { useEffect } from "react";
import {
  MerchMain,
  MerchHeroContainer,
  MerchListCard,
  MerchTab,
  MerchListContainer,
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
        <MerchListContainer>
          <MerchListCard>
            {Array(32)
              .fill()
              .map((_) => (
                <MerchCard />
              ))}
          </MerchListCard>
        </MerchListContainer>
      </MerchMain>
    </>
  );
};

export default Merch;
