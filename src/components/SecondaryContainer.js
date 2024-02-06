import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies = useSelector(state => state.moviesReducer.nowPlayingMovies);

  return (
    <div className='bg-black'>
        <div className='-mt-52'>
            <MovieList title = {"Now Playing"} movies = {movies}/>
        </div>
        <MovieList title = {"Trending"} movies = {movies}/>
        <MovieList title = {"Horror"} movies = {movies}/>
        <MovieList title = {"Crime/Thriller"} movies = {movies}/>
    </div>
  )
}

export default SecondaryContainer