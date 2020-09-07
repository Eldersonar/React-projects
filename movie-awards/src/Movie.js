import React from 'react'
import './movie.css';

export default function Movie(movie) {
    console.log(movie)
    return (
        <div id="movieHolder">
            <label>{movie.movie.Title}</label>
            <p>year {movie.movie.Year}</p>
            <img src={movie.movie.Poster}></img>
            <button>Nominate</button>
        </div>
    )
}
