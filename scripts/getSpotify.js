function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQARraFhiepLgu0TnhikyRtkIkahM772DUNbMzVBVL-TbWMS6We2D2iMtjw0gLxdJ84-7FSKCYS6I0VIsjYRHVeplM-Kh6w20DK8XEDZ90U4qeca2_-0q35h2-WKneHHq1vSHvokr_3vAxo8UueivNre'
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