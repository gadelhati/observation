import axios from "axios"
import { getLocalAccessToken } from "../services/service.token"

export const api = axios.create({
  // baseURL: "https://10.5.193.20/application-back",
  baseURL: "http://10.5.198.169:3128/application-back",
  headers:{
    'Access-Control-Allow-Origin': '*',
    // 'Authorization': 'Bearer '+ authHeader(),
  }
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