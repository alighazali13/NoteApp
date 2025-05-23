import axios from "axios";
import { useNavigate } from "react-router-dom";


export const client = axios.create({
    baseURL : 'http://127.0.0.1:8000/v1/api/',
    
})

// گرفتن توکن از هر جایی که ذخیره می‌کنی
function getAccessToken(): string | null  {
    return localStorage.getItem("accessToken");
  }
  
  function getRefreshToken(): string | null  {
    return localStorage.getItem("refreshToken");
  }
  
  function setAccessToken(token: string) {
    localStorage.setItem("accessToken", token);
  }
  
  // Add accessToken to header
  client.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });
  
  // Handle e 401 and way to get refreshToken
  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
  
        try {
          const refreshToken = getRefreshToken();
          if (!refreshToken) throw new Error("No refresh token");
  
          const response = await axios.post(
            "http://127.0.0.1:8000/v1/api/account/token/refresh/",
            { refresh: refreshToken }
          );
  
          const newAccessToken = response.data.access;
          setAccessToken(newAccessToken);
  
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
  
          return client(originalRequest);
        } catch (err) {
          
          localStorage.clear();
          window.location.href = "/signin";
          return Promise.reject(err);
        }
      }
  
      return Promise.reject(error);
    }
  );
  
  export default client;