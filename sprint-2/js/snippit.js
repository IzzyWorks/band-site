'use strict';

const RolandLane = {
    dates: 'Mon Dec 17 2018',
    venue: 'Roland Lane',
    city: 'San Frnasisco, CA',
}

const PierEast = {
    dates: 'Tue Jan 18 2019', 
    venue: 'Pier 3 East',
    city: 'San Frnasisco, CA',
}

const listOfShowEvents = [
    RolandLane,
    PierEast
]

const selectList = document.getElementById('show__show-list');
const newShowListing = document.createElement('li');
const selectShowListing = document.querySelectorAll("li");
const AddContentToListing = document.querySelectorAll(".show__show-list--row");
selectList.appendChild(newShowListing);
selectShowListing.classList.add("show__show-list--row")





const buttonShape = document.createElement('a');
const buttonStyle = document.classList.add('shows__btn--style');
const buttonText = document.createTextNode('Buy Tickets');

// select.appendChild(buttonShape, buttonStyle, buttonText)

// const showNewList = document.getElementById("show__show-list");


// function to loop through array and append to show__show-list
function appendShowsToDOM(PlaceholderBox) {
    for (let i = 0; i < PlaceholderBox.length; i++) {
        const li = document.createElement("li");
        li.classList.add("show__show-list--row");
  
        li.createElement = PlaceholderBox[i];
        console.log('im running')       //good so far
        // showNewList.appendChild(li);
        select.appendChild(buttonShape, buttonStyle, buttonText);

    }
  };


appendShowsToDOM(listOfShowEvents);

