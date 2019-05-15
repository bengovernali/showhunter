"use strict"


function getArtist() {
    
    get(createUrl(userArtist))
    .then((response) => {

        console.log(response);
        createArray(response);
    });
};

function generateUrl(item) {

    let url = `https://api.spotify.com/v1/search?q=${item}&type=artist` 
    return url;
}

function createArray(info) {
    
    let artistArray = [];
    info.forEach(artist) {

    }
}
