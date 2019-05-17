function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQByhAsfK5BKogLQer0Rem5eLKZPixn61fsT8Au-eUFgkf_ciQgkNsVXnEmozw2akp5NiOjmh4-4qEoaPfxcXv8pOAnj3TdRJ92y331Om5jHn6wEjm_dKUptj4uCwM9yzd0zEC5lqZBb5Vzdew'
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