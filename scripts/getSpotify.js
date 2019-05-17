function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQDEjd3tHurIvuz38mro2ljT5ZB0BJTB2r8jtGDbyj3VOYcXOFBvt0iLgCm8Mxd_eae39VA2UC_pJsfys-xJ_yCvoPh4bpnEevIpQ1jJnGc6Lc_84RDxW8OR8DTzxSs3-ePl6Timy_JUtR0uOCs65L3v'
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