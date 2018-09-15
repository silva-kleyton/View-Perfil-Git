import axios from "axios";

var api = axios.create({
  baseURL: "https://api.github.com"
});

export default api;
