import React from 'react';
import Movie from './Movie';

// export default function Movies(handleSearch) {
export default class Movies extends React.Component {

    state = {
        loading: true,
        movies: null,
    };

    async componentWillReceiveProps(newProps) {
        const url = `http://www.omdbapi.com/?s=${newProps.name}&plot=full&apikey=d78f4d96`
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.Search)
        this.setState({ movies: data.Search, loading: false });
        console.log('got new props')
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.movies) {
            return <div>didn't get movies</div>;
        }

        return (
            this.state.movies.map(movie => {
                return <Movie key={movie.imdbID} movie={movie} />
            })
        );
    }
}
