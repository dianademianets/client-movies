import {IGenre} from './genre.interface';

export interface IMovie {
    adult?: boolean;
    genres: IGenre[];
    id: number;
    original_language?: string;
    original_title?: string;
    overview: string;
    popularity?: number;
    poster_path: null | string;
    release_date: string;
    title: string;
    video?: boolean;
    vote_average: number;
    vote_count?: number;
    budget: string;
    param: string;
}

export interface IMoviesResponse {
    page: number;
    results: IMovie[];
    total_results: number;
    total_pages: number;
}
