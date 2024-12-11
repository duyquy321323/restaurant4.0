import axios from "axios";

const api = axios.create({
  baseURL: "https://da-cnpm-be.vercel.app/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use((config) => {
//   const currentLocal = window.location.pathname;
//   const token = document.cookie
//   .split(";")
//   .find((it) => it.trim().startsWith("token="));
//   if (!token) {
//     localStorage.removeItem("userData");
//     if (currentLocal !== "/login") {
//       window.location.href = "/login";
//     }
//   }
//   return config;
// });

export default api;