function getArtistId(artist) {
    const URL = `http://localhost:3000/https://api.spotify.com/v1/search?q=${artist}&type=artist`;
    const requestHeaders = {
        method: 'GET'
    };

    const request = new Request(URL, requestHeaders);

    getSpotify(request)
    .then(response => {
        const artistId = response.artists.items[0].id;
        return artistId;
    })
    .then(pullRelatedArtists)
}

function pullRelatedArtists(id) {
    const URL = `http://localhost:3000/https://api.spotify.com/v1/artists/${id}/related-artists`;
    const requestHeaders = {
        method: 'GET'
    };

    const request = new Request(URL, requestHeaders);

    getSpotify(request)
    .then(response => {
        const relatedArray = response.artists;
        return relatedArray;
    })
    .then(genRelatedArtistsArray)
};

function genRelatedArtistsArray(item) {
    let artistsArray = [];
    item.forEach(function(artist) {
        artistsArray.push(artist.name);
    });
    return artistsArray;
};
