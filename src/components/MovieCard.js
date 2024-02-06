import React from 'react'
import { IMG_CDN } from '../utils/constants';

const MovieCard = (props) => {
    const {posterPath} = props;
  return (
    <div className='w-48 pr-4'>
        <img src={`${IMG_CDN}${posterPath}`} />
    </div>
  )
}

export default MovieCard