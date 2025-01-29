import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '82d438e43ab34107bac9936abe0fc72b'
  }
})