import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook to manage API requests
const useApi = () => {
  const [token, setToken] = useState(localStorage.getItem("authToken") || "");

  const fetchToken = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/login",
        {
          email: "johndoe@example.com",
          password: "SecurePassword123!",
        }
      );

      const newToken = response.data.token;
      if (newToken) {
        setToken(newToken);
        localStorage.setItem("authToken", newToken); // Store token
      }
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  useEffect(() => {
    if (!token) {
      fetchToken(); // Fetch token if not available
    }
  }, [token]);

  // Axios instance with interceptor
  const api = axios.create();

  api.interceptors.request.use(
    async (config) => {
      if (!token) await fetchToken(); // Ensure token is available
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "authToken"
      )}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  const get = (url) => {
    return api
      .get(url)
      .then((response) => response?.data)
      .catch((error) => Promise.reject(error));
  };

  const post = (url, body = {}) => {
    return api
      .post(url, body)
      .then((response) => response?.data)
      .catch((error) => Promise.reject(error));
  };

  const put = (url, body = {}) => {
    return api
      .put(url, body)
      .then((response) => response?.data)
      .catch((error) => Promise.reject(error));
  };

  const del = (url) => {
    return api
      .delete(url)
      .then((response) => response?.data)
      .catch((error) => Promise.reject(error));
  };

  return { get, post, put, del };
};

export default useApi;
