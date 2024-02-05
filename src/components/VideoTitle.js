import React, {useState} from 'react'

const VideoTitle = (props) => {
    const [mute, setMute] = useState(1);
    const {movie} = props;


    return (
        <div>
            <div className='mt-60 ml-10 text-white absolute'>
                <h1 className='font-bold text-5xl'>{movie?.original_title}</h1>
                <p className='my-4 w-1/2 text-justify'>{movie?.overview}</p>
                <div className='flex flex-row'>
                    
                    <button className='mr-4 bg-[rgb(229,9,20)] py-2 px-10 text-white font-bold rounded-md'>
                    <i className="fa-solid fa-play mr-1"></i> Play
                    </button>
                    <button className='mr-4 bg-gray-500 py-2 px-10 text-white rounded-md'><i className="fa-solid fa-circle-info mr-2"></i>More Info</button>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle