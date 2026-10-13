import {useQuery} from '@tanstack/react-query';
import { getMovieById } from '@/features/movies/api/movies.api';

export const useMovie = (id:number)=>
    useQuery({
        queryKey: ['movie',id],
        queryFn:()=>getMovieById(id),
        enabled: Number.isInteger(id) && id > 0,
    });
