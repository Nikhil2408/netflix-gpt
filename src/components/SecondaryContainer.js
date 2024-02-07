import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector(state => state.moviesReducer.nowPlayingMovies);
    const popularMovies = useSelector(state => state.moviesReducer.popularMovies);
    const topRatedMovies = useSelector(state => state.moviesReducer.topRatedMovies);
    const upcomingMovies = useSelector(state => state.moviesReducer.upcomingMovies);

  return (
    <div className='bg-black'>
        <div className='-mt-52'>
            <MovieList title = {"Now Playing"} movies = {nowPlayingMovies}/>
        </div>
        <MovieList title = {"Popular"} movies = {popularMovies}/>
        <MovieList title = {"Top Rated"} movies = {topRatedMovies}/>
        <MovieList title = {"Upcoming"} movies = {upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer