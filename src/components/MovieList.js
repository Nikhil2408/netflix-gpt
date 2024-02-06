import React from 'react'
import MovieCard from './MovieCard';

const MovieList = (props) => {
    const {title, movies} = props;
  return (
    <div className='p-6'>
        <h1 className='text-3xl mb-4 text-white'>{title}</h1> 
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {
                    movies.map((movie) => {
                        return <MovieCard posterPath = {movie.poster_path}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList