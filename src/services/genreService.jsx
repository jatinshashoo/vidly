import http from "./httpservice";

export function getGenres() {
  return http.get("http://localhost:3900/api/genres");
}
