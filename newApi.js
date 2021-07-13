import API_KEY from "./utils/constants.js";

const apiKey = API_KEY;
const topHeadlinesUrl =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;

export { apiKey, topHeadlinesUrl };
