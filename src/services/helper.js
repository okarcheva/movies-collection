export const getNextId = (() => {
  let id = 0;
  return () => ++id;
})();

export const filterMovies = (movies, genre = null, year = null, rating = null) => {
  let filteredMovies = movies;
  if (genre) {
    filteredMovies = filteredMovies.filter(m => m.genres.includes(genre.value));
  }

  if (year) {
    filteredMovies = filteredMovies.filter(m => {
      const releaseDateYear = m.releaseDate.getFullYear();
      return releaseDateYear >= year.value.from && releaseDateYear <= year.value.to;
    });
  }

  if (rating) {
    filteredMovies = filteredMovies.filter(m =>
      m.rating >= rating.value.from && m.rating <= rating.value.to);
  }

  return filteredMovies;
}