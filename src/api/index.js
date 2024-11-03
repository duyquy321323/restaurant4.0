import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const currentLocal = window.location.pathname;
  console.log(currentLocal);
  const token = document.cookie
    .split(";")
    .filter((it) => it.startsWith("token"))
    .at(0)
    .split("=")
    .at(1);
  if (!token) {
    localStorage.removeItem("userData");
    if (currentLocal !== "/login") {
      window.location.href = "/login";
    }
  }
  return config;
});


export default api;
// import axios from "axios";

// // Create an Axios instance with the base URL and default headers
// const api = axios.create({
//   baseURL: "http://localhost:3000/",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Request interceptor to check for token and handle redirection
// api.interceptors.request.use((config) => {
//   const currentLocal = window.location.pathname;
//   const token = document.cookie
//     .split("; ")
//     .find((it) => it.startsWith("token="))
//     ?.split("=")[1]; // Use optional chaining to prevent errors if token is not found

//   if (!token) {
//     localStorage.removeItem("userData");
//     // Redirect to login page if there is no token and we are not already on the login page
//     if (currentLocal !== "/login") {
//       window.location.href = "/login";
//     }
//   } else {
//     // Set the Authorization header with the token if it exists
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }

//   return config;
// });

// // Login API function using the configured Axios instance
// const LoginApi = async (email, password) => {
//   try {
//     const response = await api.post("users/login", { email, password });
//     return response.data;
//   } catch (error) {
//     console.error("Login error:", error.response ? error.response.data : error.message);
//     throw error; 
//   }
// };

// export { LoginApi };
