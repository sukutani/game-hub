import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import ApiClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new ApiClient<Genre>('/genres');

// const useGenres = () => ({ data: genres, isLoading: false, error: null })
const useGenres = () => 
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24 hours (1000 * 60 * 60 * 24)
    initialData: genres
})


export default useGenres;