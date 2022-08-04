import {axiosService} from './axios.service';
import {IMoviesResponse, IUser, IUserData, IUserResponse} from '../interfaces';

export const authService = {
    login: (username: string, password: string, token: string) => axiosService.post<IUserResponse>(`/authentication/token/validate_with_login`, {
                username,
                password,
                request_token: token,
            }
        ),
    getToken: () =>  axiosService.get<IUserData>(`/authentication/token/new`),
    createSessionId: (request_token: string) => axiosService.post<IUser>(`/authentication/session/new`,{request_token}),
    getAccountDetails: (session_id: string) => axiosService.get<IUser>(`/account?session_id=${session_id}`),
    getAccountWatchList: (account_id: number) => axiosService.get<IMoviesResponse>(`/account/${account_id}/watchlist/movies`),
    addMovieToWatchList: (account_id: number,  session_id:string, media_id:number) => axiosService.post<IMoviesResponse>(`/account/${account_id}/watchlist?session_id=${session_id}`, {
        media_type:'movie',
        media_id,
        watchlist:true
    }),
    getAccountFavorite: (account_id: number) => axiosService.get<IMoviesResponse>(`/account/${account_id}/favorite/movies`),
    addMovieToFavorite: (account_id: number,  session_id:string, media_id:number) => axiosService.post<IMoviesResponse>(`/account/${account_id}/favorite?session_id=${session_id}`, {
        media_type:'movie',
        media_id,
        watchlist:true
    }),

}
