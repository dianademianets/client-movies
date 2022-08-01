import {axiosService} from "./axios.service";
import {IUser, IUserData, IUserResponse} from "../interfaces";

export const authService = {
    login: (username: string, password: string, token: string) => {
        return axiosService.post<IUserResponse>(`/authentication/token/validate_with_login`, {
                username,
                password,
                request_token: token,
            }
        )
    },
    getToken: () => {
        return axiosService.get<IUserData>(`/authentication/token/new`)
    },
    createSessionId: (request_token: string) => {
        return axiosService.post<IUser>(`/authentication/session/new`,{request_token});
    },
    getAccountDetails: (session_id: string) => {
        return axiosService.get<IUser>(`/account?session_id=${session_id}`);
    },

}
