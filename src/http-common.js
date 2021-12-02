import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3128",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json"
  }
});
