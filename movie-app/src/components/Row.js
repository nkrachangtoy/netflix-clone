import React, {useState, useEffect} from 'react'
import axios from '../axios';

const base_url = "http://image.tmdb.org/t/p/original";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    // Runs based on a specific condition
    useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        //console.log(request.data.results);
        setMovies(request.data.results)
        return request;
    }
    fetchData();
    }, 
    // [] = run once when the page load, and don't run it again
    [fetchUrl])

    console.log(movies);

    return (
        <div className="row">
           <h2>{title}</h2>
            <div className="row__container">
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__poster--large"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row
