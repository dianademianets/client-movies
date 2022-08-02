import { IGenre } from './genre.interface';

export interface ITVShow {
    genres: IGenre[];
    id: number;
    original_language?: string;
    name?: string;
    original_country?: string;
    original_title?: string;
    overview: string;
    popularity?: number;
    backdrop_path: null | string;
    poster_path: null | string;
    first_air_date: string;
    title: string;
    video?: boolean;
    vote_average: number;
    vote_count?: number;
    param: string;
}

export interface ITVShowsResponse {
    page: number;
    results: ITVShow[];
    total_results: number;
    total_pages: number;
}
