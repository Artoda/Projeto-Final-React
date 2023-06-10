import axios from "axios";

export const api = axios.create({
  baseURL: "https://trabalho-api-desenv-web-g2.up.railway.app/postgres",
});

export const apiGit = axios.create({
  baseURL: "https://api.github.com/users",
});

