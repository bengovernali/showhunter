function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQBiYU-f4TK8sIJN8SV75TiSwpPFIPvRouqt2EZFKnDkc7jGyBLun_1TChZWN1AybuGfb7GyjtH4625APbI7O97S0ioiSF2HbrKJHvTZn2bUBKRh2OGiiHa7Pe9SRH7jY1dhsXvqK3hKZRgsDJf3nep5'
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