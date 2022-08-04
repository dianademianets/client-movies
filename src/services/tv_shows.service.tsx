import {axiosService} from './axios.service';
import {ITVShow, ITVShowsResponse} from '../interfaces';

export const tvShowsService = {
    getALLTVShowWithGenre: (genres: number) => axiosService.get<ITVShowsResponse>(`/discover/tv?with_genres=${genres}`),
    getAllTVShows: (page: number) => axiosService.get<ITVShowsResponse>(`/discover/tv?page=${page}`),
    getByIdTVShow: (id: number) => axiosService.get<ITVShow>(`/tv/${id}`),
    getPopularTVShow: (page: number) => axiosService.get<ITVShowsResponse>(`/discover/tv?sort_by=popularity.desc&page=${page}`),
    getRatedTVShow: (page: number) => axiosService.get<ITVShowsResponse>(`/discover/tv?sort_by=vote_average.desc&page=${page}`),
    getTVShowWithYear: (year: number, page: number) => axiosService.get<ITVShowsResponse>(`/discover/tv?primary_release_year=${year}&sort_by=popularity.desc&page=${page}`),

}
