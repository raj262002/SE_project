'use strict';

const api_key ='4b7e7bc411902e509c69e0588857a32f';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

// fetch data from a server using 'url and passes th result in JSON data to a'callback function,
// along with an optional parameter if has 'optionalParam';

const fetchDataFromServer = function(url, callback,optionalParam) {
    fetch(url).then(response => response.json()).then(data => callback(data,optionalParam));
}

export {imageBaseURL,api_key,fetchDataFromServer};