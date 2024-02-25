import axios from "axios";
import { logout } from "./shared/utils/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDeatails = localStorage.getItem("user");
    if (userDeatails) {
      const token = JSON.parse(userDeatails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
//public routes

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (err) {
    return {
      error: true,
      err,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (err) {
    return {
      error: true,
      err,
    };
  }
};
//private routes

export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/invite", data);
  } catch (err) {
    checkResponseCode(err);
    return {
      error: true,
      err,
    };
  }
};

const checkResponseCode = (err) => {
  const responseCode = err?.reponse?.status;
  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
