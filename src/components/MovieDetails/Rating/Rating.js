import styles from './Rating.module.css';

const Rating = ({ rating }) => {
  return (
    <div className={styles.ratingContainer}>
      <span className={styles.rating}>{rating}</span>
    </div>
  );
};

export default Rating;