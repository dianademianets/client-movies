import React, {FC, useEffect, useState} from 'react';
import {PeopleCard} from '../../components';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAllPeople} from '../../store/slices';
import './peoplePage.css';

const PeoplePage: FC = () => {

    const {people, totalPage, status} = useAppSelector((state) => state.peopleReducer);
    const [pageNumber, setPageNumber] = useState(1);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllPeople({currentPage:Number(pageNumber)}));
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
            <div className='header_wrapper_div'>
                <div className='header_wrap__div'>
                    {status === 'fulfilled' && people.map(person => <PeopleCard key={person.id} person={person}/>)}
                </div>
            </div>

            <div className='wrap__pagination'>
                <button className=' btn btn-outline-dark page-link fs-8' disabled={pageNumber - 1 === 0}
                        onClick={() => {
                            handlePrevious()
                        }}>Previous
                </button>
                <div className='text_div btn-outline-dark'>
                    {pageNumber}
                </div>

                <button className='btn btn-outline-dark page-link fs-8' disabled={pageNumber + 1 > totalPage}
                        onClick={() => {
                            handleNext()
                        }}>Next
                </button>
            </div>
        </div>
    );
};

export default PeoplePage
