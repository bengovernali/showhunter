"use strict"


function getArtist() {
    
    get(createUrl(userArtist))
    .then((response) => {
        console.log(response);
        createArray(response);
    });
};

function generateUrl(item) {

    let url = `theaudiodb.com/api/v1/json/195003/search.php?s=${item}`
    return url;
}

function createArray() {
    
}

function getGenre() {
    
}