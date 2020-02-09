import http from "./httpservice";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = `${apiUrl}/auth`;
const tokenKey = "token";

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  const jwt = localStorage.getItem(tokenKey);
  return jwtDecode(jwt);
}

export async function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);

  //localStorage.setItem("token", response.headers["x-auth-token"]);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser
};
