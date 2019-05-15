"use strict"


fetch('https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay')
    .then(response => response.json())
    .then(data => {

        console.log(data)
    });

