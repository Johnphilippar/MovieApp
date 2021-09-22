import { useState, useEffect } from 'react';
//API
import API , { Movie } from '../API';

const initialState = {
    page: 0,
    results: [] as Movie[],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [loadMore , setLoadMore] = useState(false);


    const fetchMovies = async (page : number, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            console.log(movies)

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    //Initial and Search
    useEffect(() => {
        setState(initialState)
        fetchMovies(1, searchTerm)
    }, [searchTerm]);

    //Loadmore

    useEffect(() => {
        if(!loadMore) return

        fetchMovies(state.page + 1, searchTerm);
        setLoadMore(false)
    } ,[loadMore , searchTerm , state.page])

    return { state, loading, error, setSearchTerm , searchTerm , setLoadMore };
}