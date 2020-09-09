import React from 'react';
import Movie from './Movie';

// export default function Movies(handleSearch) {
export default class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            movies: null,
            data: []
        };
    }

    componentWillUnmount() {
        this.props.SaveMovies(this.state.data)
    }

    render() {
        if (this.props.movies) {
            return (
                <Movie movies={this.props.movies} GetMovies={this.props.GetMovies} />
            );
        }

        if (this.state.loading) {
            return (
                <div className="movieHolder">
                    <div className="imgHolder">
                    </div>
                    <div className="movieInfo">
                    </div>
                    <div>
                    </div>
                </div>
            )
        }

        if (!this.props.movies) {
            return <div>Couldn't get movies</div>;
        }
    }
}
