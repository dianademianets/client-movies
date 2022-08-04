import {IPeopleResponse } from '../interfaces';
import {axiosService} from './axios.service';

export const peopleService = {
    getAllPeople: (page: number) => axiosService.get<IPeopleResponse>(`/person/popular?page=${page}`),
}

