import { useRef, useEffect, useCallback } from 'react';
import styles from './MovieItem.module.css';

const MovieItem = ({ movie, onClick }) => {
  const posterImage = useRef(null);
  const handleObserver = useCallback((entities, self) => {
    const entity = entities[0];
    if (entity.isIntersecting) {
      const src = posterImage.current.getAttribute('data-src');
      posterImage.current.setAttribute('src', src);
      self.unobserve(entity.target);
    }
  }, [posterImage]);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (posterImage.current) {
      observer.observe(posterImage.current)
    }

  }, [handleObserver]);

  const handleClick = () => {
    onClick();
  }

  return (
    <figure className={styles.movieItem} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img ref={posterImage}
          data-src={movie.posterUrl}
          alt={movie.description}
        />
        <div className={styles.movieRating}>{movie.rating}</div>
        <div className={styles.movieYear}>{movie.releaseDate.getFullYear()}</div>
      </div>

      <figcaption>{movie.title}</figcaption>
    </figure>
  );
}

export default MovieItem;