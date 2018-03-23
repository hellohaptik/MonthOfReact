import React, { Component } from 'react';
import Card from '../../components/Card';

import './index.css';

const API_KEY = '47325ef45a2a765c5fe4a132ed6a4e9a';
const BASE_ENDPOINT = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

class Movie extends Component {
  state = {};

  componentDidMount() {
    const ENDPOINT = `${BASE_ENDPOINT}/movie/${
      this.props.match.params.id
    }?api_key=${API_KEY}&append_to_response=credits`;

    fetch(ENDPOINT)
      .then(res => res.json())
      .then(json => {
        this.setState({
          movie: json
        });
      });
  }

  render() {
    if (!this.state.movie) {
      return <h1> Loading... </h1>;
    } else {
      return (
        <div
          className="movie"
          style={{
            backgroundImage: `url(${IMAGE_BASE_URL}/${
              this.state.movie.backdrop_path
            })`
          }}
        >
          <Card
            img={this.state.movie.poster_path}
            title={this.state.movie.title}
            subtitle={this.state.movie.overview}
          />
          <br />
          <br />
          <div className="cast">
            {this.state.movie.credits.cast.map((actor, i) => {
              if (i > 11) return null;
              return (
                <Card
                  img={actor.profile_path}
                  title={actor.name}
                  subtitle={actor.character}
                  key={actor.id}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default Movie;
