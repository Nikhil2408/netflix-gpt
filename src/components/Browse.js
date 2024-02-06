import React, {useEffect} from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useDispatch } from 'react-redux'
import { moviesActions } from '../redux/moviesSlice'

const Browse = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS)
        .then((responseObj) => {
            return responseObj.json()
        })
        .then((response) => {
            dispatch(moviesActions.addNowPlayingMovies(response.results));
        })
        .catch((err) => {

        })
    }, [])

  return (
    <div className='flex flex-col'>
        <Header page = "Browse" />
        <MainContainer />
        <SecondaryContainer />
    </div>
  )
}

export default Browse