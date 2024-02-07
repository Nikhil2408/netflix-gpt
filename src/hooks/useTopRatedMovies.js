import { useDispatch } from "react-redux";
import { moviesActions } from "../redux/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

function useTopRatedMovies(){

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?page=3", API_OPTIONS)
        .then((responseObj) => {
            return responseObj.json()
        })
        .then((response) => {
        dispatch(moviesActions.addTopRatedMovies(response.results));
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])    
}


export default useTopRatedMovies;

