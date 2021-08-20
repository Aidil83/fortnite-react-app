import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const forniteApi = axios.create({
  baseURL: "https://fortnite-api.com",
});

export const getForniteApi = async (dispatch) => {
  const _data = await forniteApi
    .get("/v2/cosmetics/br")
    .then((res) => res.data.data);

  const featuredData = _data.filter((item) => item.images.featured !== null);

  //IMPORTANT: shuffling method:
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  //NOTE: shuffle image cards after the first load:
  shuffle(featuredData);

  dispatch({
    type: "GETAPI",
    getApi: featuredData,
  });

  return featuredData;
};
