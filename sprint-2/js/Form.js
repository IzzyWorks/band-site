'use strict';

console.log("Appending Shows List JS");

// Arrays + Objects

const RolandLane = {
    dates: 'Mon Dec 17 2018',
    venue: 'Roland Lane',
    city: 'San Franasisco, CA',
};

const PierEast = {
    dates: 'Tue Jan 18 2019', 
    venue: 'Pier 3 East',
    city: 'San Franasisco, CA',
};

const ViewLoungue = {
    dates: 'Fri Jul 22 2019',
    venue: 'View Loungue',
    city: 'San Franasisco, CA',
};

const HyattAgency = {
    dates: 'Sat Aug 12 2019',
    venue: 'Hyatt Agency',
    city: 'San Franasisco, CA',
};

const MoscowCenter = {
    dates: 'Fri Sep 05 2019',
    venue: 'Moscow Center',
    city: 'San Franasisco, CA',
};

const PresClub = {
    dates: 'Wed Aug 11 2019',
    venue: 'Press Club',
    city: 'San Franasisco, CA',
};

const listOfShowEvents = [
    RolandLane,
    PierEast,
    HyattAgency,
    MoscowCenter,
    PresClub
];

// Global Variables


const selectList = document.getElementById("showsList");
// console.log(selectList);

function appendShowsToDom(ShowsArr) {
    for (let i = 0; i < ShowsArr.length; i++) {
        const li = document.createElement("li");
        li.classList.add(
        };
    };
appendShowsToDom(listOfShowEvents)