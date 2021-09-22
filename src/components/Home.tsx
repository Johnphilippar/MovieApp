import React from 'react';

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';


//components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumbnail from './Thumbnail';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Button from './Button';



//hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//Image
import NoImage from '../images/no_image.jpg';

const Home:React.FC = () => {

    const { state, loading, error, setSearchTerm, searchTerm, setLoadMore } = useHomeFetch();
    console.log(state);

    if(error) return <div>Something Went Wrong ...</div>

    return (
        <>
            {state.results[0] ? (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            ) : null}

            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header={searchTerm ? ' Search Result ' : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumbnail key={movie.id}
                        clickable={true}
                        image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
                        movieId={movie.id}
                    />
                ))}
            </Grid>

            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={() => setLoadMore(true)} />
            )}
        </>
    )
}

export default Home;
