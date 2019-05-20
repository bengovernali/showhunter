function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQCIwJAOVAFYD-V9lC6TsVaIK9RKNPk2meQPaJohOHS94yW09LW0ShOB8aAh4vUkGFQ9NemI2pTGWXBcTKnVOnEFtr074MYRkubZj-ReOFT9KGE36E1TwKSrV0yiB-N0fa5TfC9fxAm2K_ohGEW5D5FR'
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