import http from "./httpservice";
import { apiUrl } from "../config.json";

const apiEndpoint = `${apiUrl}/users`;

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
