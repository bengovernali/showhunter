function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQCnH8yZ85vT0HISqtAwHQhfC_yfNc3UWBIbazLrh0OyII2QprxiaCgxuJH_6C7qq8FkL2xkf_NrO32gWXlBoJPQyXjRMOmdW_lt_RngBqpT_G_8I35PrDwuOURyQhSNXpQbVJGfqL1eue4wNSmf4jR-'
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