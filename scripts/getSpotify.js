function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQDTUknUFv98iolfKfN07oYHDRWFX7xG2G3SuChgQPW4w5AVmYYs8FWsBNXKHopbtVHI1ljSuw8pGqRHkfJ1Lk6sYXHV82UCSUos_ZNG32yYeyhOKbLLLRMRB9KtWEuC3Zq_dHbl7FF2x0k'
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