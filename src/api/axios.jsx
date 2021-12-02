import axios from "axios";
import TokenService from "../services/service.token"

export const axiosApi = axios.create({
  baseURL: "http://localhost:3128/",
});

axiosApi.interceptors.request.use(async config => {
  const token = TokenService.getLocalAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    // config.headers.Access = `*`,
    // config.headers.Content = `application/json`
  }
  return config;
});

export default axiosApi