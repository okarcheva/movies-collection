import { useState, useEffect } from 'react';
import Filter from "../../shared/Filter/Filter";
import { buildRatingList } from "../../../services/mappingService";

const RatingFilter = ({ rating, onChange }) => {
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    setRatings(buildRatingList())
  }, []);

  if (ratings && ratings.length > 0) {
    return (
      <Filter label="Rating" selectedValue={rating} options={ratings} onChange={onChange} />
    );
  }

  return null;
};

export default RatingFilter;