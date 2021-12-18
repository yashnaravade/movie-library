import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
    return (
        <div className="movie-card  shadow m-2 p-2 bg-light">
            <div className="row">
                <div className="col-md-4">
                    <img src={props.Poster} className="img-poster img-fluid" />
                </div>
                <div className="col-md-8">
                   <h2 className="mb-3 mt-3"> {props.Title} </h2>
                   <h2 className="mb-3 mt-3"> {props.Year} </h2>
                   <div className="d-flex justify-content-end">
                        <button className="btn btn-warning">Add To Playlist</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MovieCard
