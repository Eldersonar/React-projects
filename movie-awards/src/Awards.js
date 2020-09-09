import React from 'react'
import './awards.css';


// export default function Awards() {
export default class Awards extends React.Component {
    constructor(props) {
        super(props);
        this.LOCAL_STORAGE_KEY = 'awardsApp.movies'

        this.state = { movies: localStorage.getItem(this.LOCAL_STORAGE_KEY) };
        this.movies = JSON.parse(this.state.movies)

        console.log(this.props)
    }

    render() {
        console.log(this.movies.length)
        console.log(this.movies)
        if (this.movies) {
            return (
                <>
                    <h1 id="awardLabel">AWARDS</h1>
                    <div id="movieList">
                        {this.movies.map((movie) => {
                            return (
                                <div className="awardHolder" key={movie.imdbID}>
                                    <div className="awardImgHolder"  >
                                        <img src={movie.Poster} alt={movie.Title}></img>
                                    </div>
                                    <div className="awardMovieInfo">
                                        <p>{movie.Title}</p>
                                        <p>year {movie.Year}</p>
                                    </div>
                                    <div className="withdrawButton" onClick={() => this.props.deleteMovie(movie)}> WITHDRAW </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            )
        } else if (this.movies && this.movies.length > 1) {
            console.log("condition met")
            return (
                <div id="awardsText">
                    there are 5 movies
                </div >
            )
        } else {
            return (
                <>
                    <div id="awardsText">
                        Your awards
                </div >
                </>
            )
        }
    }
}
