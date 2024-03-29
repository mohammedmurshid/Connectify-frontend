import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);

export const reactPost = (id, userId) =>
  API.put(`post/${id}/react`, { userId: userId });
