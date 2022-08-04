import {axiosService} from './axios.service';
import {IMovie, IMoviesResponse} from '../interfaces';

export const moviesService = {
    getAllPage: (page: number) => axiosService.get<IMoviesResponse>(`/discover/movie?page=${page}`),
    getById: (id: number) => axiosService.get<IMovie>(`/movie/${id}`),
    getPopularMovie: (page: number) => axiosService.get<IMoviesResponse>(`/discover/movie?sort_by=popularity.desc&page=${page}`),
    getRatedMovie: (page: number) => axiosService.get<IMoviesResponse>(`/discover/movie?sort_by=vote_average.desc&page=${page}`),
    getMovieWithYear: (year: number,page: number) => axiosService.get<IMoviesResponse>(`/discover/movie?primary_release_year=${year}&sort_by=popularity.desc&page=${page}`),
    getSearchResponse: (param: string) => axiosService.get<IMoviesResponse>(`/search/movie?query=${param}`),
    getALLMovieWithGenre: (genres: number) => axiosService.get<IMoviesResponse>(`/discover/movie?with_genres=${genres}`)
}
