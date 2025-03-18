import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/api-client";
import platforms from "../data/platforms";
import { Platform } from "../entities/Platform";

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => 
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24 hours
    initialData: platforms
})

export default usePlatforms;