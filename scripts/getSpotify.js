function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQCxNYYIZYYvUWWIK57wCETNiSFXhVneAwS4lXYWu2t4KoXZPEvba5b8QoCBshYuRsN5i45bKVE6CR7sw1re6Q0JDTsqBWRRkumig2ukRJR8yus-yrMFGyfVMpsREQPeRYNqnxNcOi6Sn1ssWLHYghk5'
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