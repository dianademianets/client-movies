import {axiosService} from './axios.service';
import {ITVShow, ITVShowsResponse} from '../interfaces';

export const tvShowsService = {
    getALLTVShowWithGenre: (genres: number) => axiosService.get<ITVShowsResponse>(`/discover/tv?with_genres=${genres}`),
    getAllTVShows: (page: number) => axiosService.get<ITVShowsResponse>(`/discover/tv?page=${page}`),
    getByIdTVShow: (id: number) => axiosService.get<ITVShow>(`/tv/${id}`),
}
