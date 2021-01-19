import { MerchMain, MerchHeroContainer, MerchListCard } from "./Merch.elements";

const Merch = () => {
  return (
    <>
      <MerchMain>
        <MerchHeroContainer>
          <h3>Hero</h3>
        </MerchHeroContainer>
        <h1>Merch</h1>
        <MerchListCard>
          <h3>Item1</h3>
          <h3>Item2</h3>
          <h3>Item3</h3>
          <h3>Item4</h3>
          <h3>Item5</h3>
          <h3>Item6</h3>
          <h3>Item7</h3>
          <h3>Item8</h3>
          <h3>Item9</h3>
        </MerchListCard>
      </MerchMain>
    </>
  );
};

export default Merch;
