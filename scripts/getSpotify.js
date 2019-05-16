function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQAsCNyM5CMgWjgVbJ33HV44eA8jGJgzVJwVGfmQ03zQafGTiZxQgsvf_TBeeuCaGQTL9yMaraew2iyFT93IvwdzhQyVVcuKp6u2nROx6KqC1m2tET0_C--XI0lywfWbcVPMv2sCzUKnQwE'
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