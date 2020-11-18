import React, {useState, useEffect} from 'react'
import axios from '../axios';
import infoIcon from "../assets/icons/svg/info-circle-solid.svg"
// image url
const base_url = "http://image.tmdb.org/t/p/original/";
// movie info page
const movieInfo_url = "https://www.themoviedb.org/movie/";


function Row({title, fetchUrl, isLargeRow}) {
    // react Hooks 
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        // console.log(request.data.results);
        setMovies(request.data.results)
        return request;
    }
    fetchData();
    }, 
    // [] = run once when the page load, and don't run it again
    [fetchUrl])



    console.table(movies);

    return (
        <div className="row">
           <h2>{title}</h2>
            <div className="row__container">
                {movies.slice(0,12).map(movie => (
                    <div key={movie.id}>
                        <div 
                            className={`row__poster ${isLargeRow && "row__poster--large"}`}
                            style={{backgroundImage: 'url(' + `${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}` + ')' }} 
                            
                        >
                            
                            <div className="overlay">
                                <h4 className="overlay__title">{movie?.title || movie?.name || movie?.original_name}</h4>
                                <h5 className="overlay__rating">Rating {movie.vote_average} / 10</h5>
                                <h6 className="overlay__release-date">Release date: {movie?.release_date }</h6>
                                <a href={`${movieInfo_url}/${movie.id}`} target={"_blank"} className="overlay__link"><img className="overlay__icon" src={infoIcon} alt="info-icon"/>Info</a>
                            </div>
                        </div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Row
