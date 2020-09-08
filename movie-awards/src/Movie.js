import React, { useState, useEffect } from 'react'
import './movie.css';

const LOCAL_STORAGE_KEY = 'awardsApp.movies'


export default function Movie(movie) {
    const [movies, setMovies] = useState([])

    console.log(movies)

    const movieId = movie.movie.imdbID
    const movieTitle = movie.movie.Title
    const movieYear = movie.movie.Year
    const moviePoster = movie.movie.Poster

    useEffect(() => {
        console.log("movies loaded")
        const storedMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedMovies) setMovies(storedMovies)
    }, [])

    useEffect(() => {
        console.log("movies added ")
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies))
    }, [movies])

    function handleNominate(e) {
        setMovies(awardedMovies => {
            console.log(movies)
            return [...awardedMovies, { id: movieId, name: movieTitle, year: movieYear, poster: moviePoster, awarded: true }]
        })
    }

    // complete logic to disable button for awarded movies. test
    if (movie.movie.imdbID === "tt6868278")
        return (
            <div className="movieHolder">
                <div className="imgHolder">
                    <img src={movie.movie.Poster} alt={movie.movie.Title}></img>
                </div>
                <div className="movieInfo">
                    <p>{movie.movie.Title}</p>
                    <p>year {movie.movie.Year}</p>
                </div>
                <div>
                    <button className="disabled" onClick={handleNominate} disabled>AWARDED</button>
                </div>
            </div>
        )
    else
        return (
            <div className="movieHolder">
                <div className="imgHolder">
                    <img src={movie.movie.Poster} alt={movie.movie.Title}></img>
                </div>
                <div className="movieInfo">
                    <p>{movie.movie.Title}</p>
                    <p>year {movie.movie.Year}</p>
                </div>
                <div>
                    <button onClick={handleNominate}>NOMINATE</button>
                </div>
            </div>
        )
}


