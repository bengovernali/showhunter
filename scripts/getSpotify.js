function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQBSdpFNenXAYDwpWbOrvCowgm8i-BCTvSuF9IVGwuXKavzEjmV5P19nR_eHk3PmWhpwZHThJZOjzItRObn17QarU5jhraVzc8_B65Ww2SDfaV92iJuPB68zMR6E5yNZfbb9-j-Ho5n1dn-1buLBceyM'
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