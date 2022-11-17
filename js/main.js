const elNewsForm = document.querySelector(".news_form");
const elNewsSearchInput = document.querySelector(".news_search_input");
const elNewsList = document.querySelector(".news_list");
const elNewsTemplate = document.querySelector(".news_template").content;
const elLatestList = document.querySelector(".latest_news");
const elListTitle = document.querySelector(".list_title");
const elNewsFragment = document.createDocumentFragment();

// calling links
const worldLink = document.querySelector(".world_link");
const societyLink = document.querySelector(".society_link");
const businessLink = document.querySelector(".bussiness_link");
const techLink = document.querySelector(".tech_link");
const cultureLink = document.querySelector(".culture_link");
const sportLink = document.querySelector(".sport_link");
const tourismLink = document.querySelector(".tourism_link");

function renderNews(arr, node) {
  node.innerHTML = "";
  arr.forEach((item) => {
    const elCloneTemplate = elNewsTemplate.cloneNode(true);
    elCloneTemplate.querySelector(".news_img").src = item.urlToImage;
    elCloneTemplate.querySelector(".news_title").textContent = item.title;
    elCloneTemplate.querySelector(".news_time").textContent = item.publishedAt;
    elCloneTemplate.querySelector(".news_link").href = item.url;
    elNewsFragment.appendChild(elCloneTemplate);
  });
  node.appendChild(elNewsFragment);
}
// getting url
function fetchUrl(url, title) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      renderNews(data.articles, elNewsList);
    })
    .catch((err) => console.log(err));
  elListTitle.textContent = title;
}
// getting popular fetch
fetch(
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=20cd9c5db6404cce9091571e7da9cdde"
)
  .then((res) => res.json())
  .then((data) => {
    renderNews(data.articles, elLatestList);
  })
  .catch((error) => console.log(error));

// listening links
worldLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  fetchUrl(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=20cd9c5db6404cce9091571e7da9cdde",
    "WORLD"
  );
});
societyLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  fetchUrl(
    "https://newsapi.org/v2/everything?q=society&apiKey=20cd9c5db6404cce9091571e7da9cdde",
    "SOCIETY"
  );
});
businessLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  fetchUrl(
    "https://newsapi.org/v2/top-headlines?q=business&apiKey=20cd9c5db6404cce9091571e7da9cdde",
    "BUSSINESS"
  );
});
techLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  fetchUrl(
    "https://newsapi.org/v2/top-headlines?q=tech&apiKey=20cd9c5db6404cce9091571e7da9cdde",
    "TECH"
  );
});
cultureLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  fetchUrl(
    "https://newsapi.org/v2/top-headlines?q=culture&apiKey=20cd9c5db6404cce9091571e7da9cdde",
    "CULTURE"
  );
});
sportLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  fetchUrl(
    "https://newsapi.org/v2/top-headlines?q=sport&apiKey=20cd9c5db6404cce9091571e7da9cdde",
    "SPORT"
  );
});
tourismLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  fetchUrl(
    "https://newsapi.org/v2/top-headlines?q=tourism&apiKey=20cd9c5db6404cce9091571e7da9cdde",
    "TOURISM"
  );
});

// form submit
elNewsForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const searchInputValue = elNewsSearchInput.value;
  fetchUrl(
    `https://newsapi.org/v2/top-headlines?q=${searchInputValue}&apiKey=20cd9c5db6404cce9091571e7da9cdde`,
    `${searchInputValue.toUpperCase()}`
  );
});
