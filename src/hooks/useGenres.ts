import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => ({ data: genres, isLoading: false, error: null })
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => 
    apiClient
      .get<FetchResponse<Genre>>('/genres')
      .then(res => res.data),
  staleTime: 1000 * 60 * 60 * 24, // 24 hours
  initialData: { count: genres.length, results: genres },
})


export default useGenres;