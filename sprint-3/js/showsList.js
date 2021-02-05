'use strict';

console.log("Appending ShowsList");

// Arrays + Objects

const listOfShowEvents = [
    {
    dates: 'Mon Dec 17 2018',
    venue: 'Roland Lane',
    location: 'San Franasisco, CA'
    },

    {
    dates: 'Tue Jan 18 2019', 
    venue: 'Pier 3 East',
    location: 'San Franasisco, CA'
    },

    {
    dates: 'Fri Jul 22 2019',
    venue: 'View Loungue',
    location: 'San Franasisco, CA'
    },

    {
    dates: 'Sat Aug 12 2019',
    venue: 'Hyatt Agency',
    location: 'San Franasisco, CA'
    },

    {
    dates: 'Fri Sep 05 2019',
    venue: 'Moscow Center',
    location: 'San Franasisco, CA'
    },

    {
    dates: 'Wed Aug 11 2019',
    venue: 'Press Club',
    location: 'San Franasisco, CA'
    },
];



const showListGrouping = document.getElementById('showsList');

// console.log(showsList);

function appendShows() {
    showListGrouping.innerHTML = ""; 

    for (let i = 0; i < listOfShowEvents.length; i++) {
      const showObj = listOfShowEvents[i];

      const showListItem = document.createElement("li");
      showListItem.classList.add("shows__list-item");

      const showDate = document.createElement("h2");
      showDate.classList.add("shows__date");
      showDate.innerText = showObj.dates;

      const showVenue = document.createElement("h2");
      showVenue.classList.add("shows__venue");
      showVenue.innerText = showObj.venue;

      const showLocation = document.createElement("h2");
      showLocation.classList.add("shows__location");
      showLocation.innerText = showObj.location;

      const lableDates = document.createElement("h4");
      lableDates.classList.add("shows__lable");
      lableDates.innerText = 'DATE';

      const lableVenue = document.createElement("h4");
      lableVenue.classList.add("shows__lable");
      lableVenue.innerText = 'VENUE';

      const lableLocation = document.createElement("h4");
      lableLocation.classList.add("shows__lable");
      lableLocation.innerText = 'LOCATION';

      const buyButton = document.createElement("div");
      buyButton.classList.add("shows__buy-btn");

      const buttonText = document.createElement("div");
      buttonText.classList.add("shows__btn-text");
      buttonText.innerText = 'BUY TICKETS';



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
  };
  appendShows();