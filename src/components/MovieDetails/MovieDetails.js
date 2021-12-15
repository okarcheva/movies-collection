import MovieMetaData from './MovieMetaData/MovieMetaData';
import Rating from './Rating/Rating';
import styles from './MovieDetails.module.css';

const MovieDetails = ({ movie }) => {
  return (
    <div className={styles.movieDetails}>
      <header>{movie.title}</header>
      <div className={styles.movieDetailsBlock}>
        <div className={styles.imageContainer}>
          <img alt={`${movie.title} poster url`} src={movie.posterUrl} />
        </div>
        <p className={styles.movieOverview}>{movie.overview}</p>
      </div>
      <MovieMetaData movie={movie} />
      <div className={styles.ratingContainer}>
        <Rating rating={movie.rating} />
      </div>
    </div>
  );

};

export default MovieDetails;