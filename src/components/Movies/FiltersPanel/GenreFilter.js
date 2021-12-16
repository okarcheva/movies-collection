import { useState, useEffect } from 'react';
import Filter from '../../Filter/Filter';
import { MovieApiConfig } from '../../../config';
import { mapGenres } from '../../../services/mappingService';
import styles from './FiltersPanel.module.css';
import ThreeDotsLoader from '../../ThreeDotsLoader/ThreeDotsLoader';

const GenreFilter = ({ genre, onChange }) => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${MovieApiConfig.baseUrl}genre/movie/list?api_key=${MovieApiConfig.apiKey}&language=${MovieApiConfig.language}`;
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
          const mappedGenres = mapGenres(result);
          setGenres(mappedGenres);
          setIsLoading(false);
        },
        (error) => {
          setError(error);
          setIsLoading(false);
        }
      );
  }, []);

  return (
    <>
      {genres && genres.length > 0 && <Filter label="Genre" selectedValue={genre} options={genres} onChange={onChange} />}
      {isLoading && <ThreeDotsLoader />}
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
};

export default GenreFilter;