'use strict';

// global variables

const RolandLane = {
    dates: 'Mon Dec 17 2018',
    venue: 'Roland Lane',
    city: 'San Frnasisco, CA',
};

const PierEast = {
    dates: 'Tue Jan 18 2019', 
    venue: 'Pier 3 East',
    city: 'San Frnasisco, CA',
};

const listOfShowEvents = [
    RolandLane,
    PierEast
];

// Add a series of <li> elements into a <ul> container using a for-loop

const addToList = document.getElementById('showsList');


// Populate each <li> with three <h2> elements and one <a> element

const addElementsToShowList = function() {
    const datesDiv = document.createElement('h2');
    const datesContent = document.createTextNode(listOfShowEvents.dates[0]);
    const venueDiv = document.createElement('h2');
    const venueContent = document.createTextNode(listOfShowEvents.venue[0]);
    const cityDiv = document.createElement('h2');
    const cityContent = document.createTextNode(listOfShowEvents.city[0]);
    const buyBtn = document.createElement('a');
    datesDiv.appendChild(datesContent);
    venueDiv.appendChild(venueContent);
    cityDiv.appendChild(cityContent);
    const currentDiv = document.querySelectorAll('.showsList__event');
    document.body.insertBefore(datesDiv, venueDiv, cityDiv, buyBtn, currentDiv);
}

// determin the amount of <li> elements to add by looking up the length of the listOfShowEvents Array

function appendShowsToDom(boxToReciveEventsArray) {
  for (let i = 0; i < boxToReciveEventsArray.length; i++) {
    const li = document.createElement("li");
    // const h = document.createElement('h2');
    li.classList.add('.showsList__event');       // Give each <li> element a universal style

    li.innerText = (boxToReciveEventsArray[i], '<h2>this is not working</h2>');
    // h = boxToReciveEventsArray[i]; 

    addToList.appendChild(li);
    // addToLine.appendChild(h);
    // document.querySelectorAll('showsList__event').createElement('h2');
  }
}

appendShowsToDom(listOfShowEvents);

