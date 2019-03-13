import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import MainHeader from "./Components/Header/Header";
import SearchButton from "./Components/searchButton/searchButton";
import YearButton from "./Components/yearSelectBox/year";
import Footer from "./Components/Footer/Footer";
import Axios from "axios";
import MovieCard from "./Components/movieCard/movieCard";

// https://api.themoviedb.org/3/search/movie?api_key=810cfa0487c36ac5f9b7fbf8a830a3c3&language=en-US&page=1&include_adult=false&year=

// http://www.omdbapi.com/?apikey=[yourkey]&

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      year: "",
      searchText: "",
      likedMovies: []
    };
  }

  getMovies = () => {
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=810cfa0487c36ac5f9b7fbf8a830a3c3&language=en-US&query=${
        this.state.searchText
      }&page=1&include_adult=false&year=${this.state.year}`
    ).then(res => {
      let limitedResults = res.data.results.slice(0, 20);
      this.setState({ movies: limitedResults });
      console.log(limitedResults);
    });
  };

  handleYearChange = year => {
    this.setState({ year: year });
  };

  handleSearchTextChange = text => {
    this.setState({ searchText: text });
  };

  componentDidMount() {
    Axios.get('http://localhost:3002/api/favorites')
    .then (res => {
      this.setState({
        likedMovies : res.data
      })
    })
  }

  // create a method to add this movie to the "favorites" array in the back-end

  addToFavorites = (movie) => {
    Axios.post('http://localhost:3002/api/favorites',movie)
    .then (res => {
      console.log('it worked',res.data);
      this.setState({
        likedMovies : res.data
      })
    })

  }



  render() {
    const movieResults = this.state.movies.map(movie => {
      let isItLiked = ""; 
      // find it in the "likedMovies" array in state, and if it's found, then set this to true instead
      this.state.likedMovies.forEach(favoriteMovie => {
        if(favoriteMovie.id === movie.id) {
          isItLiked = "❤️";
        }
        // if the "favoriteMovie" id is the same as the "movie" id, then set "isItLiked" to true
      })
      return <MovieCard likeMovie={this.addToFavorites} movie={movie} liked={isItLiked} />;
    });
    return (
      <div className="App">
        <header className="App-header">
          <MainHeader />
        </header>

        <div className="navigation">
          <YearButton
            handleYearChange={this.handleYearChange}
            getMovies={this.getMovies}
            handleSearchTextChange={this.handleSearchTextChange}
          />{" "}
          Year
        </div>

        {this.state.movies.length > 0 ? (
          <div className="cards-container">{movieResults}</div>
        ) : null}

        <footer className="App-footer">
          <Footer name="Gabe" isFavorite={true} />
        </footer>
      </div>
    );
  }
}

export default App;
