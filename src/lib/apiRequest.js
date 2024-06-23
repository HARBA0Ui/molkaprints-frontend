import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://molkaprints-backend.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
