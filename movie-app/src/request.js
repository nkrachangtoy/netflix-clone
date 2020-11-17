API_KEY = "242a41542813e131e17bde675a042224";

const requests = {
    trendingMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    netflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    comedyMovies: `discover/tv?api_key=${API_KEY}&with_genres=35`,
    romanceMovies: `discover/tv?api_key=${API_KEY}&with_genres=10749`,
    documentaries: `discover/tv?api_key=${API_KEY}&with_genres=99`
}