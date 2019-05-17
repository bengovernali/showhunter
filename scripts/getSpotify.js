function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQCFaOOy9Cqp4xrSiTlVDIiGBGQ8GOStKt-hhVSJuK72fe3eicGNr8SFnrmbalHK49j0--AVsyGZAJTMgAr1SZX3SzdpT5Bvu3qvEEug3Plg--FODW74KQXQC3yBvSZxshnjMKurjFQtupZflK_NB2PZ'
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