function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQDpVH-1ZcSTZyGydA_sGz5kP0ZectzN7E3rGkbFPUN7ANxF3941njpxzpNQNV5cCB765PrWH179Z6GpKp7FG8NYxWmJ0jvfm2D8SQoic3w7JbEQhAciwHjYHADm4Rm7OqjGWaP9v5Rkz-ncEU9VwKX9'
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