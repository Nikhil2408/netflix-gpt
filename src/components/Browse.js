import React, {useEffect} from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useDispatch } from 'react-redux'
import { moviesActions } from '../redux/moviesSlice'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

  return (
    <div className='flex flex-col'>
        <Header page = "Browse" />
        <MainContainer />
        <SecondaryContainer />
    </div>
  )
}

export default Browse