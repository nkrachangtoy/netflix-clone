const API_KEY = "242a41542813e131e17bde675a042224";

const requests = {
    trendingMovies: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    popularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    romanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    documentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`
}

export default requests;