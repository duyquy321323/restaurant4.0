import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// tạm thời ẩn vì chưa làm login

// Cấu hình cho login
api.interceptors.request.use((config) => {
  const currentLocal = window.location.pathname;
  const token = document.cookie;
  console.log(token);
  // if (!token) {
  //   if (currentLocal !== "/login") {
  //     window.location.href = "/login";
  //   }
  // }
  return config;
});

export default api;