import React,{useEffect, useState} from 'react'
import axios from "../axios";
import requests from "../requests";
import playIcon from "../assets/icons/svg/play-solid.svg";
import infoIcon from "../assets/icons/svg/info-circle-solid.svg"

const movieInfo_url = "https://www.themoviedb.org/movie/";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.popularMovies);
            // console.log(request.data.results);
            setMovie(
                request.data.results[
                    // randomize movie picture
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData()
    },[])

   console.log(movie);

   // truncate function -- takes in str and n params, this allows to put "..." when str exceed n of words.
   function truncate(str, n){
       return str?.length > n ? str.substr(0, n - 1) + "..." : str;
   }

    return (
        <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(http://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
            <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <h3>Release Date: {movie.release_date}</h3>
        
        <h2 className="banner__description">{truncate(movie.overview, 150)}</h2>
            <div className="banner__btns">
                <button className="banner__btn"><img className="banner__icon" src={playIcon} alt="play-icon"/>Play</button>
                <a className="banner__btn" target={"_blank"} href={`${movieInfo_url}${movie.id}`}><img className="banner__icon" src={infoIcon} alt="info-icon"/>More Info</a>
            </div>
            </div>
            <div className="banner--fadebottom" />
        </header>
    )
}

export default Banner
