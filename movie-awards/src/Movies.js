import React from 'react';
import Movie from './Movie';

// export default function Movies(handleSearch) {
export default class Movies extends React.Component {


    // const movieInput = handleSearch()
    // const url = `http://www.omdbapi.com/?s=${movieInput}&plot=full&apikey=d78f4d96`
    // console.log(url)


    // // console.log(movies)
    // let movieArr = Array.from(movies);
    // return (
    //     movieArr.map(movie => {
    //         return <Movie key={movie.imdbID} movie={movie} />
    //     })
    // )

    state = {
        loading: true,
        movies: null,
    };

    async componentDidMount(props) {
        // console.log(props)
        // let userInput = props => (
        //     console.log(props.name)
        // );
        // const CreateProfile = (props) => {...}

        console.log(props)

        const url = `http://www.omdbapi.com/?s=${props}&plot=full&apikey=d78f4d96`
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        console.log(data.Search)
        this.setState({ movies: data.Search, loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.movies) {
            return <div>didn't get movies</div>;
        }

        // return (
        //     <div>
        //         <div>{this.state.movie.Title}</div>
        //         <div>{this.state.movie.Year}</div>
        //         <img src={this.state.movie.Poster} />
        //     </div>
        // );

        return (
            this.state.movies.map(movie => {
                return <Movie key={movie.imdbID} movie={movie} />
            })
        );
    }
}
