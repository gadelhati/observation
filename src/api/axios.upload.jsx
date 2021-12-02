import api from "./axios.authenticated";
import TokenService from "../services/token.service";

export const uploadFile = (file, onUploadProgress) => {
  let formData = new FormData();
  formData.append("file", file);
  return api.post("/shipsynop/upload", formData, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      "Authorization": 'Bearer '+ TokenService.getLocalAccessToken(),
    },
    onUploadProgress,
  });
};

// export const getFiles = () => {
//   return http.get("/uploads");
// };