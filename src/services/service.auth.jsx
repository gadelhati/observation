import api from "../api/axios";
import TokenService from "./service.token";

export const signup = (username, email, password) => {
    return api.post("/auth/signup", { username, email, password });
};

export const signin = (username, password) => {
    return api.post("/auth/signin", { username, password })
        .then(response => {
            if (response.data.accessToken) {
                TokenService.setUser(response.data);
            }
            return response.data;
        });;
};

export const logout = () => {
    TokenService.removeToken();
};