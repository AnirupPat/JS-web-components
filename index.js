// https://api.github.com/users/AnirupPat
import { topHeadlinesUrl } from "./newApi.js";
import "./news-article.js";

const fetchNews = async () => {
  const result = await fetch(topHeadlinesUrl);
  const json = await result.json();

  console.log(json);

  const main = document.querySelector("main");

  json.articles.forEach((article) => {
    const el = document.createElement("news-article");
    el.article = article;

    main.append(el);
  });
};

const p = document.createElement("p");
p.innerHTML = "Hello there";
document.body.append(p);

window.addEventListener("load", () => {
  fetchNews();
});
