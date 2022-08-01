export interface IVideoResponse {
    id: number;
    results: IVideo[];
}

export interface IVideo {
    name: string;
    key: string;
    id: number;
}
