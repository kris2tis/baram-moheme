import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.create({
  withCredentials: true,
});

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
