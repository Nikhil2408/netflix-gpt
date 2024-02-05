import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const allMovies = useSelector(state => state.moviesReducer?.nowPlayingMovies);

    function selectRandomTrendingMovie(){
        const randomMovieIndex = Math.floor(Math.random() * allMovies.length)
        return allMovies[randomMovieIndex];
    }

    let trendingMovie = selectRandomTrendingMovie()


    return (
        <div>
            <VideoTitle movie = {trendingMovie}/>
            <VideoBackground movie = {trendingMovie}/>
        </div>
    )
}

export default MainContainer