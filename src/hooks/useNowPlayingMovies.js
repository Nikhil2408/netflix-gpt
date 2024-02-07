import { useDispatch } from "react-redux";
import { moviesActions } from "../redux/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

function useNowPlayingMovies(){

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
            console.log(err);
        })
    }, [])


}


export default useNowPlayingMovies;

