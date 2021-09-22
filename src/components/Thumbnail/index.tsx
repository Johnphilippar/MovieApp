import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import { Image } from './Thumbnail.styles';

type Props = {
    image: string;
    movieId: number;
    clickable: boolean;
}

const Thumbnail:React.FC<Props> = ({ image, movieId, clickable }) => (
    <div>
        {
            clickable ? (
                <Link to={`/movie/${movieId}`}>
                    <Image src={image} alt='movie-thumb' />
                </Link>
            ) : (
                
                <Image src={image} alt='movie-thumb' />
            )}
    </div>
)


export default Thumbnail;