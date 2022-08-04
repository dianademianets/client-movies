export interface IPeople {
    id: number;
    name: string;
    profile_path: string

}

export interface IPeopleResponse {
    page: number;
    results: IPeople[];
    total_results: number;
    total_pages: number;
}
