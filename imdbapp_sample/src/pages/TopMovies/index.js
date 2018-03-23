import React, { Component } from 'react';
import Card from '../../components/Card';

const API_KEY = '47325ef45a2a765c5fe4a132ed6a4e9a';
const BASE_ENDPOINT = 'https://api.themoviedb.org/3';
const ENDPOINT = `${BASE_ENDPOINT}/movie/popular?api_key=${API_KEY}`;

class TopMovies extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch(ENDPOINT)
      .then(res => res.json())
      .then(json => {
        this.setState({
          movies: json.results
        });
      });
  }

  render() {
    return (
      <div className="top-movies" style={{ padding: 24 }}>
        <h1>Top Movies</h1>
        <div className="top-movies-list">
          {this.state.movies.map((movie, i) => {
            return (
              <Card
                key={movie.id}
                img={movie.poster_path}
                title={movie.title}
                subtitle={movie.overview}
                link={`/movies/${movie.id}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TopMovies;
