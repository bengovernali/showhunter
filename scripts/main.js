"use strict"

const eventContainer = document.getElementById('eventList');
const userInput = document.getElementById('input');
const inputForm = document.getElementById('inputForm');


inputForm.addEventListener("submit", executeSearch);


function executeSearch(e) {
    e.preventDefault();
    let child = eventContainer.lastElementChild;
    while (child) {
        eventContainer.removeChild(child);
    }
    let userArtist = userInput.value;

    getArtistId(userArtist);
};

