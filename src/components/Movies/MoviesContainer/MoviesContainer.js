import { useRef, useEffect, useCallback } from 'react';
import { isInViewport } from '../../../services/domService';
import MovieItem from '../MovieItem/MovieItem';
import ThreeDotsLoader from '../../ThreeDotsLoader/ThreeDotsLoader';
import styles from './MoviesContainer.module.css';

const MoviesContainer = ({ allMoviesLoaded, movies, isLoading, onMovieClick, onIntersectionHit }) => {
  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current)
    }

  }, [handleObserver]);

  useEffect(() => {
    if (!allMoviesLoaded && loader.current && isInViewport(loader.current)) {
      onIntersectionHit();
    }
  }, [movies, allMoviesLoaded, onIntersectionHit])

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      onIntersectionHit();
    }
  }

  const loader = useRef(null);

  const handleMovieClick = (movie) => {
    onMovieClick(movie);
  }

  return (
    <div id="moviesContainer">
      {movies && movies.length > 0 && <section className={styles.moviesContainer}>
        {movies.map(m => (<MovieItem key={m.id} movie={m} onClick={() => handleMovieClick(m)} />))}
      </section>}
      {isLoading && <ThreeDotsLoader />}
      {movies && movies.length === 0 && allMoviesLoaded &&
        <div className={styles.nothingFound}>Nothing found :(</div>
      }
      {!allMoviesLoaded && <div ref={loader}></div>}
    </div>
  );
};

export default MoviesContainer;