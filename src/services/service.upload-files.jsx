import http from "../api/axios";
import TokenService from "./service.token";

export const uploadFile = (file, onUploadProgress) => {
  let formData = new FormData();
  formData.append("file", file);
  return http.post("/observation/upload", formData, {
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