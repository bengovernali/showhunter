function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Bearer BQDaz-peAKLnHhxDdOPT7t-ciiUXPptVd1pf3Awj_I_gBXtIbaG8s_U-hD2NHc0uOVtXyOHZV9lyHn0VdbwRmw4BxvIB62TDw_OXyz3TLDdUihiBJOmeUT3DckZjiIjq6UAf__rBh5u4KMU"'
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