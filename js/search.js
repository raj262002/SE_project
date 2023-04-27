'use strict';

import { api_key, fetchDataFromServer } from "./api.js";
import { createMovieCard } from "./movie-card.js";

export function search() {
    // console.log("hello");
    const searchWrapper = document.querySelector("[search-wrapper]");
    const searchField = document.querySelector("[search-field]");

    const searchResultModal = document.createElement("div");
    searchResultModal.classList.add("search-modal");
    document.querySelector("main").appendChild(searchResultModal);

    let searchTimeout;

    // console.log(searchField);
    
    searchField.addEventListener("input", function() {
        // console.log("hello");
        // console.log(searchField.value);
        if(searchField.value.trim()) {
            searchResultModal.classList.remove("active");
            // console.log(searchField.value.trim());
            searchWrapper.classList.remove("searching");
            clearTimeout(searchTimeout);
            // return;
        }

        // console.log(searchField.value);

        searchWrapper.classList.add("searching");
        clearTimeout(searchTimeout);


        searchTimeout = setTimeout(function() {
            fetchDataFromServer(`
            https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchField.value}&page=1&include_adult=false`, function({results: movieList}) {

                searchWrapper.classList.remove("searching");
                searchResultModal.classList.add("active");
                searchResultModal.innerHTML = ""; //remove old results

                searchResultModal.innerHTML = `
                    <p class="label">Result for</p>
                    <h1 class="heading">${searchField.value}</h1>
                    <div class="movie-list">
                        <div class="grid-list"></div>
                    </div>
                `;

                for( const movie of movieList) {
                    const movieCard = createMovieCard(movie);
                    searchResultModal.querySelector(".grid-list").appendChild(movieCard);
                    // console.log("hello");
                }

            });
        },500);

    })


}