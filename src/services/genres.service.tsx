import {axiosService} from './axios.service';
import {IGenre} from '../interfaces';

export const genresService = {
    getAll: () => axiosService.get<IGenre[]>(`/genre/movie/list`)
}
