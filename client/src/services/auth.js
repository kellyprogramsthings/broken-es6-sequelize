import axios from "axios";
import { api } from '../utils/api.js';

export const register = (username, password) => {
  return axios.post(api + "auth/signup", {
    username,
    password,
  });
};

export const login = (username, password) => {
  console.log("attempted to login?");
  console.log("api", api);
  //return 
  axios
    .post(api + "/auth/signin", { username, password })
    .then(r => {
      console.log("response?");
      if (r.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(r.data));
      }
      return r.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// export default {
//   register,
//   login,
//   logout,
//   getCurrentUser,
// };