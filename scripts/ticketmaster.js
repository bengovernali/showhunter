"use strict"

let count = 0;

function pullEvents(artistArray) {
    //loop through array of artists
    artistArray.forEach(function(artist) {
        if (count < 10) {
            //create unique url to fetch from ticketmaster
            //fetch data from ticketmaster API for that specific artist
            get(createUrl(artist))
            .then((response) => {
                console.log(response);
                createEvent(response);
        });
        count += 1
        }
    });
};

function createUrl(item) {
    //create url from info pulled from theaudiodb
    //eventually add function to change postalCode/location and radius
    let url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${item}&postalCode=30307&apikey=3FhkqehgsJxNsLTInDmAyq0Oo7Vzj5j5`;
    return url;
}

function createEvent(item) {
    //create div element for event and embed in DOM
    let name = item._embedded.events[0].name;
    //let date = item._embedded.events
};

//Test with single band
pullEvents(['The Chromatics']);