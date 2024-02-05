import React, {useEffect, useState} from 'react'
import { API_OPTIONS } from '../utils/constants';

const VideoBackground = (props) => {
    const [trailorKey, setTrailorKey] = useState();
    const {movie} = props;

    console.log(movie)
    useEffect(() => {
        if(movie){
            fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos`, API_OPTIONS)
            .then(responseObj => {
                return responseObj.json();
            })
            .then(response => {
                const data = response.results;
                const trailorVideosData = data.filter(videoData => {
                    return videoData.type === "Trailer";
                })
                const randomIndex = Math.floor(Math.random() * trailorVideosData.length);
                setTrailorKey(trailorVideosData[randomIndex].key)
            })
            .catch(err => {

            })
        }
        
    }, [movie])
  return (
    <div>
        <iframe
        className='w-screen aspect-video'
            src={`https://www.youtube.com/embed/${trailorKey}?autoplay=1&mute=1&controls=0&rel-0`}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        >
        </iframe>
    </div>
  )
}

export default VideoBackground