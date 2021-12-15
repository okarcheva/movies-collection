import MetaDataItem from '../../MetaDataItem/MetaDataItem';
import styles from './MovieMetaData.module.css';

const MovieMetaData = ({ movie }) => {
  return (
    <div className={styles.movieMetadata}>
      <MetaDataItem label="Year" value={movie.releaseDate.getFullYear()} />
      <MetaDataItem label="Original language" value={movie.originalLanguage} />
    </div>
  );
};

export default MovieMetaData;