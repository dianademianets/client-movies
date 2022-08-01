export interface IUser {
    session_id:string;
    username: string;
    name:string;
    success:boolean;
}


export interface IUserResponse {
    username: string;
    password: string;
    success:boolean;
}


export interface IUserData{
    accessToken: string;
    request_token: string;
    user: IUser;
    userResponse: IUserResponse;
}
