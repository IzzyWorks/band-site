"use strict";

console.log("Appending ShowsList");

const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "api_key=638e8b45-470d-4e3c-9d54-8719b38a2a1e";

axios
  .get(`${apiUrl}/showdates?${apiKey}`)
  .then(function (response) {
    console.log(response.data);
    appendShowsToDOM(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

const showListGrouping = document.getElementById("showsList");

function appendShowsToDOM(showsArr) {
  // console.log(showsArr);
  showListGrouping.innerHTML = "";

  for (let i = 0; i < showsArr.length; i++) {
    // console.log(showsArr[i]);
    const showObj = showsArr[i];

    const showListItem = document.createElement("li");
    showListItem.classList.add("shows__list-item");

    const showDate = document.createElement("h2");
    showDate.classList.add("shows__date");
    showDate.innerText = showObj.date;

    const showVenue = document.createElement("h2");
    showVenue.classList.add("shows__venue");
    showVenue.innerText = showObj.place;

    const showLocation = document.createElement("h2");
    showLocation.classList.add("shows__location");
    showLocation.innerText = showObj.location;

    const lableDates = document.createElement("h4");
    lableDates.classList.add("shows__lable");
    lableDates.innerText = "DATE";

    const lableVenue = document.createElement("h4");
    lableVenue.classList.add("shows__lable");
    lableVenue.innerText = "VENUE";

    const lableLocation = document.createElement("h4");
    lableLocation.classList.add("shows__lable");
    lableLocation.innerText = "LOCATION";

    const buyButton = document.createElement("div");
    buyButton.classList.add("shows__buy-btn");

    const buttonText = document.createElement("div");
    buttonText.classList.add("shows__btn-text");
    buttonText.innerText = "BUY TICKETS";

    showListItem.appendChild(lableDates);
    showListItem.appendChild(showDate);
    showListItem.appendChild(lableVenue);
    showListItem.appendChild(showVenue);
    showListItem.appendChild(lableLocation);
    showListItem.appendChild(showLocation);
    showListItem.appendChild(buyButton);
    buyButton.appendChild(buttonText);
    showListGrouping.appendChild(showListItem);
  }
}
appendShowsToDOM();
