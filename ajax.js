const ads_url =
  "https://my-json-server.typicode.com/IlyaLytvynov/ads-box-server/ads";

async function getData() {
  fetch(ads_url);
  const response = await fetch(ads_url);
  const data = await response.json();
  let count = 100;
  for (i = 0; i < data.length; i++) {
    count -= 100;
    const imageUrl = data[i].img;
    const prodTitle = data[i].title;
    const prodDescription = data[i].description;
    const adsRender = document.getElementById("card");

    adsRender.innerHTML +=
      "<div class=" +
      "ads" +
      " style=" +
      "transform:" +
      "translateX(" +
      `${count}` +
      "%" +
      ")" +
      ">" +
      "<img src=" +
      `${imageUrl}` +
      "  />" +
      "<p class=" +
      "ads_title" +
      ">" +
      `${prodTitle}` +
      "</p>" +
      "<p class=" +
      "ads_description" +
      ">" +
      `${prodDescription}`;
    // `${prodDescription.slice(0, 50)}` +
    // `${!isExpand ? "..." : ""}` +
    // "<span class=" +
    // "toggle" +
    // ">" +
    // `${prodDescription}` +
    // "</span>" +
    "</p>" +
      "<button class=" +
      "toggle_btn" +
      " onclick=" +
      "bindClick(i)" +
      " " +
      ">" +
      "Read more" +
      "</button>" +
      "</div>";
  }

  const firstBtn = document.querySelector("#firstBtn");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  const lastBtn = document.querySelector("#lastBtn");
  // const toggleBtn = document.querySelectorAll("toggle_btn");

  const allAds = [...document.querySelectorAll(".ads")];
  const firstSlide = allAds[0];
  const lastSlide = allAds[allAds.length - 1];
  current = 0;

  function initSlider() {
    allAds.forEach(slide => (slide.style.opacity = "0"));
  }

  initSlider();

  function startSlide() {
    initSlider();
    firstSlide.style.opacity = 1;
  }

  function slideFirst() {
    initSlider();
    firstSlide.style.opacity = 1;
    current === 0;
  }

  function slideLast() {
    initSlider();
    lastSlide.style.opacity = 1;
    current === lastSlide;
  }

  function slidePrev() {
    initSlider();
    allAds[current - 1].style.opacity = 1;
    current--;
  }

  function slideNext() {
    initSlider();
    allAds[current + 1].style.opacity = 1;
    current++;
  }

  firstBtn.addEventListener("click", () => {
    slideFirst();
  });

  lastBtn.addEventListener("click", () => {
    slideLast();
  });

  prevBtn.addEventListener("click", () => {
    if (current === 0) {
      current = allAds.length;
    }
    slidePrev();
  });

  nextBtn.addEventListener("click", () => {
    if (current === allAds.length - 1) {
      current = -1;
    }
    slideNext();
  });

  startSlide();
}

getData();
