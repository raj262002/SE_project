'use strict';

/* ***
 * Add event on multiple elements
 ****  */

const addEventOnElements = function (elements, eventType, callback) {
    elements.forEach( (elem) =>
        {
            elem.addEventListener(eventType, callback);
        }
    );
}

/* ***
 * Toggle search box in mobile device || small  screen
 ****  */

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

// console.log(searchBox)
// console.log(searchTogglers)

addEventOnElements(searchTogglers, 'click' , function () {
    searchBox.classList.toggle("active");
    // console.log(searchBox.classList);
});


// store movieId in "localStorage" when you click any movie

const getMovieDetail = function(movieId) {
    window.localStorage.setItem("movieId", String(movieId));
}

const getMovieList = function(urlParam, genreName) {
    console.log("local storage genre id and name")
    window.localStorage.setItem("urlParam", urlParam);
    window.localStorage.setItem("genreName", genreName);
}

