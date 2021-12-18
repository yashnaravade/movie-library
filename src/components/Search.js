import React, {useState} from 'react'
import axios from 'axios';

import MovieCard from './MovieCard';
import './Search.css';

function Search() {

    const [searchQuery, setSearchQuery]= useState("");
    const [moviesList, setMoviesList]= useState([]);

    const handleQueryChange = (e)=>{
        setSearchQuery(e.target.value);
        setMoviesList([]);
        axios.get(`https://www.omdbapi.com/?apikey=69dabab5&s=${e.target.value}`)
        .then(response =>{
            console.log(response.data.Search)
            setMoviesList(response.data.Search)
        })

    }

    return (
        <div className="container">
            <input 
            type="text" 
            placeholder="Search for a movie"
            className="form-control"
            value={searchQuery}
            onChange={handleQueryChange}
            />
            <div className="row">

                {
                moviesList && moviesList.map((movie)=>{
                        return (
                            <MovieCard 
                                key={movie.imdbID}
                                Poster={movie.Poster} 
                                Title={movie.Title} 
                                Year={movie.Year}/>
                        )
                })
                
                }
            </div>
            
        </div>
    )
}

export default Search
