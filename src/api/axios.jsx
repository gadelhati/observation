import axios from "axios"
import { getLocalAccessToken } from "../services/service.token"

export const api = axios.create({
  baseURL: "http://10.5.198.169:3128/",
});

api.interceptors.request.use(async config => {
  const token = getLocalAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    // config.headers.Access = `*`,
    // config.headers.Content = `application/json`
  }
  return config;
})