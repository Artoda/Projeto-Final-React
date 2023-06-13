import axios from "axios";

export const api = axios.create({
  baseURL: "https://trabalho-api-desenv-web-g2.up.railway.app/postgres"
});

// importante para pegar o token da header nas autorizações de segurança
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("user_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiGit = axios.create({
  baseURL: "https://api.github.com/users",
});

export const apiLocal = axios.create({
  baseURL: "http://localhost:8080/postgres"
});