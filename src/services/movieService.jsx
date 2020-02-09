import http from "./httpservice";
import { apiUrl } from "../config.json";

const apiEndpoint = "http://localhost:3900/api/movies";

export function getMovies() {
  return http.get(`${apiUrl}/movies`);
}

export function deleteMovie(movieId) {
  return http.delete(`${apiUrl}/movies/${movieId}`);
}
