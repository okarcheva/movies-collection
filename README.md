# Movies Collection App
You can find deployed application [here](https://61bc5752344ce40008c1d25e--fervent-archimedes-551a2d.netlify.app/).

## Implemented features
- SPA for showing and filtering movies collection
- Available filters: Genre, Release Year and Rating
- Hover on movie from collection shows additional information
- Click on movie from collection opens a modal window with movie details
- Integrated with open-source back-end API for retrieving movies [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)
  - Used [/movie/top_rated](https://developers.themoviedb.org/3/movies/get-top-rated-movies) endpoint for retrieving movies (this endpoint supports paging)
  - Used [/genre/movie/list](https://developers.themoviedb.org/3/genres/get-movie-list) endpoint for retrieving the list of movie genres
- Movies are loaded by pages, new loads are triggered by scrolling up to page bottom (infinite scroll feature)
- Images loaded with movies support lazy loading
- All filters survive page reload
- Application is adaptive (supports mobile and tablet modes). Deployed application was checked on iPhone 12 Pro.
- Application was checked on Chrome (v96), Safari (v15.1) and Firefox (v95.0)

## Known issues (limitations)
- Chosen API doesn't support passing search parameters in it that's why filtering (search) is happening on UI. This sometimes cause strange UI behavior. Infinite scroll is constantly triggered up to reaching the final page because server returns movies that don't satisfy the chosen filters.
- Sometimes infinite scroll is not triggered. Need to scroll a bit up and then down
- No tests

## To launch app locally
Prerequisites:\
`Node >= 14.0.0 and npm >= 5.6` should be installed on your machine

Run the following commands:\
`npm install`\
`npm start`

