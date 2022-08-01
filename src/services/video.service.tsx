import {axiosService} from './axios.service';
import {IVideoResponse} from '../interfaces';

export const videoService = {
    getVideo: (movieId: number) => axiosService.get<IVideoResponse>(`/movie/${movieId}/videos`),
}
