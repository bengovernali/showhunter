function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQDYMQzq7scGzh6RWBp_d-YDQL5WknUS7Uk8Sx1xf3yUCK_lGmMmAOwEjD1kiPt8RWqY3ZQYZZGHAQehQWYOBGSbd8TAqNz3apPEHI3SO6xdvjPlrUfC2QAODK6w2KHhH-LG4mwGVFpqAs-bkA'
        }})
            .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            return data;
        })
        .catch(function(error) {
            return error;
        })
    };