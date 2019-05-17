function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQDy-kSiIqG_JmAaTDNFKjddWJ1dZtA06C1RlunuWE8zLhRlXyoxAF0-InqD0_nHUY4_ftiZEUf20U72kBlWZP0b9Hmm4uw8mMccO1R6I7SRZqg3HKaU4c0ij6DjO_xh3j7xjrzCIaKcQHRXO64wnW6K'
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