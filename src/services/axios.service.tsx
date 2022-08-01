import axios from 'axios'

const axiosService = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTRhMTA4NDYwN2IxNjRlMDM4ZmM5NGY0NTIyZDcxNyIsInN1YiI6IjVmZmVhNzMwMGZmMTVhMDAzZDVhOGRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W8uRmvLzDEPlGfMzO8habaeVmLeEk2dUYVKuTbw-wBg '
    }
})

export {axiosService}
