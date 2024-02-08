import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GPTView from './GPTView'
import { useSelector } from 'react-redux'

const Browse = () => {

    const gptView = useSelector(state => state.gptReducer.gptView);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

  return (
    <div className='flex flex-col'>
        <Header page = "Browse" />
        {
          gptView
          ?
          <GPTView />
          :
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        }
    </div>
  )
}

export default Browse