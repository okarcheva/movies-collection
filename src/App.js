import './App.css';
import FiltersPanel from './components/Movies/FiltersPanel/FiltersPanel';
import MoviesContainer from './components/Movies/MoviesContainer/MoviesContainer';
import Modal from './components/Modal/Modal';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { MovieApiConfig } from './config';
import { mapMovies } from './services/mappingService';
import { filterMovies } from './services/helper';
import { SessionStorageKeys } from './constants';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);

  const [currentMovie, setCurrentMovie] = useState(null);

  const [currentGenre, setCurrentGenre] = useState(undefined);
  const [currentYear, setCurrentYear] = useState(undefined);
  const [currentRating, setCurrentRating] = useState(undefined);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const filteredMovies = useMemo(() => filterMovies(movies, currentGenre, currentYear, currentRating),
    [movies, currentGenre, currentYear, currentRating]);

  useEffect(() => {
    const url = `${MovieApiConfig.baseUrl}movie/top_rated?api_key=${MovieApiConfig.apiKey}&language=${MovieApiConfig.language}&page=${page}`;
    setIsLoading(true);

    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then(
        (result) => {
          if (result.page === result.total_pages) {
            setAllLoaded(true);
          }
          const mappedMovies = mapMovies(result, MovieApiConfig);
          setMovies((movies) => movies.concat(mappedMovies));
          setIsLoading(false);
        },
        (error) => {
          setError(error);
          setIsLoading(false);
        }
      );
  }, [page]);

  useEffect(() => {
    if (sessionStorage.getItem(SessionStorageKeys.currentGenre)) {
      setCurrentGenre(JSON.parse(sessionStorage.getItem(SessionStorageKeys.currentGenre)));
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(SessionStorageKeys.currentYear)) {
      setCurrentYear(JSON.parse(sessionStorage.getItem(SessionStorageKeys.currentYear)));
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(SessionStorageKeys.currentRating)) {
      setCurrentRating(JSON.parse(sessionStorage.getItem(SessionStorageKeys.currentRating)));
    }
  }, []);

  const handleMovieClick = (movie) => {
    setIsOpen(true);
    setCurrentMovie(movie);
  }

  const handleGenreChange = (genre) => {
    setCurrentGenre(genre);
    sessionStorage.setItem(SessionStorageKeys.currentGenre, JSON.stringify(genre));
  }

  const handleYearChange = (year) => {
    setCurrentYear(year);
    sessionStorage.setItem(SessionStorageKeys.currentYear, JSON.stringify(year));
  }

  const handleRatingChange = (rating) => {
    setCurrentRating(rating);
    sessionStorage.setItem(SessionStorageKeys.currentRating, JSON.stringify(rating));
  }

  const loadMoreMovies = useCallback(() => {
    if (allLoaded) {
      return;
    }

    setPage((page) => ++page);
  }, [allLoaded]);

  return (
    <div className="App">
      <FiltersPanel
        genre={currentGenre}
        year={currentYear}
        rating={currentRating}
        onGenreChange={handleGenreChange}
        onYearChange={handleYearChange}
        onRatingChange={handleRatingChange}
      />
      {movies && movies.length > 0 && <MoviesContainer
        allMoviesLoaded={allLoaded}
        movies={filteredMovies}
        isLoading={isLoading}
        onMovieClick={handleMovieClick}
        onIntersectionHit={loadMoreMovies}
      />}
      {isOpen && <Modal setOpen={setIsOpen}>
        <MovieDetails movie={currentMovie} />
      </Modal>}
    </div>
  );
}

export default App;
