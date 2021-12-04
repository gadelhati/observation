import { api } from "../api/axios"
import { getLocalAccessToken } from "./service.token"

export const uploadFile = (file, onUploadProgress) => {
  let formData = new FormData()
  formData.append("file", file)
  return api.post(`/observation/upload`, formData, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      "Authorization": 'Bearer '+ getLocalAccessToken(),
    },
    onUploadProgress,
  })
}

// export const getFiles = () => {
//   return http.get(`/uploads`)
// }