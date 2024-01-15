const API_KEY= process.env.API_KEY;

export const TRENDING_API = (page) => `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`;
export const CREDITS_API = (media_type, id) =>`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${API_KEY}&language=en-US`;
export const MOVIE_DETAIL_API = (media_type, id) => `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}&language=en-US`;
export const VIDEO_API = (media_type, id) => `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${API_KEY}&language=en-US`
export const TV_API = (page,genreForURL) => `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`;
export const MOVIE_API = (page, genreforURL) => `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
export const GENRE_API = (type) => `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`;
export const SEARCH_API = (type, searchText, page) => `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
