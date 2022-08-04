import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {getPopularTVShow} from '../../store/slices';
import {ITVShow} from '../../interfaces';

const PopularTVShows: FC = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const {tvShows, totalPage, status} = useAppSelector(
        (state) => state.tvShowsReducer
    );
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getPopularTVShow({currentPage: Number(pageNumber)}));
    }, [dispatch, pageNumber]);

    const handlePrevious = () => {
        pageNumber <= 1 ? setPageNumber(1) : setPageNumber(pageNumber - 1);
    };

    const handleNext = () => {
        pageNumber >= totalPage ? setPageNumber(totalPage) : setPageNumber(pageNumber + 1);
    };

    return (
        <div>
            <div className='loading__div'>
                {status === 'loading' && <h1>Loading...</h1>}
            </div>

            <div id='carouselExampleControls' className='carousel slide div_carousel' data-ride='carousel'>
                <div className='carousel-inner div_carousel_inner'>
                    <div className='carousel-item active'>
                        {tvShows.map((tvShow: ITVShow) =>
                            <button className='button_container__carousel'
                                    onClick={() => navigate(`tv/${tvShow.id.toString()}`)}>
                                <img className='poster_img' src={`https://image.tmdb.org/t/p/w200${tvShow.poster_path}`}
                                     alt={`${tvShow.name} poster`}/>
                                <h1>{tvShow.name}</h1>
                            </button>)}
                    </div>
                </div>


                <a className='carousel-control-prev' role='button' data-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true' onClick={() => {
                        handlePrevious()
                    }}></span>
                </a>
                <a className='carousel-control-next' role='button' data-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true' onClick={() => {
                        handleNext()
                    }}></span>
                </a>
            </div>
        </div>
    )

};

export default PopularTVShows;
