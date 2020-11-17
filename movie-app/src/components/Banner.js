import React,{useEffect, useState} from 'react'
import axios from "../axios";
import requests from "../requests";
import playIcon from "../assets/icons/svg/play-solid.svg";
import infoIcon from "../assets/icons/svg/info-circle-solid.svg"

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.popularMovies);
            // console.log(request.data.results);
            setMovie(
                request.data.results[
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
        
        <h2 className="banner__description">{truncate(movie.overview, 150)}</h2>
            <div className="banner__btns">
                <button className="banner__btn"><img className="banner__icon" src={playIcon} alt="play-icon"/>Play</button>
                <button className="banner__btn"><img className="banner__icon" src={infoIcon} alt="info-icon"/>More Info</button>
            </div>
            </div>
            <div className="banner--fadebottom" />
        </header>
    )
}

export default Banner
