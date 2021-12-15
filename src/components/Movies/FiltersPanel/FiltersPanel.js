import GenreFilter from './GenreFilter';
import RatingFilter from './RatingFilter';
import YearFilter from './YearFilter';
import styles from './FiltersPanel.module.css';

const FiltersPanel = ({ genre, year, rating, onGenreChange, onYearChange, onRatingChange }) => {
  return (
    <div className={styles.filtersPanel}>
      <GenreFilter genre={genre} onChange={onGenreChange} />
      <YearFilter year={year} onChange={onYearChange} />
      <RatingFilter rating={rating} onChange={onRatingChange} />
    </div>
  );
};

export default FiltersPanel;