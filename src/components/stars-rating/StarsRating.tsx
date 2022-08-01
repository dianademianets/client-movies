import React, {FC, useState} from 'react';
import {Rating} from 'react-simple-star-rating'

const StarsRating: FC = () => {

    const [rating, setRating] = useState(0);

    const handleRating = (rate: any) => {
        setRating(rate)
    }

    return (
        <div className='rating'>
            <Rating onClick={handleRating} ratingValue={rating}/>
        </div>
    )
};


export default StarsRating;
