export const mapMovies = (result, movieApiConfig) => {
  const movies = result.results.map(m => ({
    id: m.id,
    title: m.title,
    overview: m.overview,
    rating: m.vote_average,
    releaseDate: new Date(m.release_date),
    posterUrl: `${movieApiConfig.imagesBaseUrl}w185${m.poster_path}`,
    genres: m.genre_ids,
    originalLanguage: m.original_language
  }));

  return movies;
};

export const mapGenres = (result) => {
  const genres = result.genres.map(g => ({
    value: g.id,
    displayValue: g.name
  }));

  return genres;
}

export const buildYearsOfProduction = () => {
  const years = [];
  const currentYear = (new Date()).getFullYear();
  const oldestYear = 1950;

  let year = currentYear;

  while (year % 10 !== 0) {
    years.push({
      value: { from: year, to: year },
      displayValue: `${year}`
    });
    year--;
  }

  while (year > oldestYear) {
    years.push({
      value: { from: year - 10, to: year },
      displayValue: `${year - 10} - ${year}`
    });
    year -= 10;
  }

  years.push({
    value: { from: 1900, to: year },
    displayValue: `before ${year}`
  });

  return years;
};

export const buildRatingList = () => {
  const ratings = [];
  const maxRating = 10;
  let currentRating = maxRating;

  while (currentRating > 5) {
    ratings.push({
      value: { from: currentRating - 1, to: maxRating },
      displayValue: `Bigger than ${currentRating - 1}`
    });

    currentRating--;
  };

  return ratings;
};
