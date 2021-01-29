export const merchCardLogic = ({rarity}, MerchData, setBgCard) => {
  if (rarity.value === "legendary") {
    setBgCard(MerchData.legendCard.linearOrange);
  }
  else if (rarity.value === "epic") {
    setBgCard(MerchData.epicCard.linearPurple);
  }
  else if (rarity.value === "rare") {
    setBgCard(MerchData.rareCard.linearBlue);
  }
  else if (rarity.value === "uncommon") {
    setBgCard(MerchData.uncommonCard.linearGreen);
  }
  else if (rarity.value === "common") {
    setBgCard(MerchData.commonCard.linearGray);
  }
  else {
    setBgCard(MerchData.specialCard.linearTan);
  }
};