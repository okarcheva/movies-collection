import { useEffect, useState } from 'react';
import Filter from "../../shared/Filter/Filter";
import { buildYearsOfProduction } from "../../../services/mappingService";

const YearFilter = ({ year, onChange }) => {
  const [years, setYears] = useState([]);
  useEffect(() => {
    setYears(buildYearsOfProduction());
  }, []);

  if (years && years.length > 0) {
    return (
      <Filter selectedValue={year} label="Release Year" options={years} onChange={onChange} />
    );
  }

  return null;
};

export default YearFilter;