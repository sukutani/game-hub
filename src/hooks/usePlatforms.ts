import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import platforms from "../data/platforms";

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => 
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: platforms
})

export default usePlatforms;