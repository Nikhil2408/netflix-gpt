import { useDispatch } from "react-redux";
import { moviesActions } from "../redux/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

function usePopularMovies(){

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?page=2", API_OPTIONS)
        .then((responseObj) => {
            return responseObj.json()
        })
        .then((response) => {
        dispatch(moviesActions.addPopularMovies(response.results));
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])    
}


export default usePopularMovies;

