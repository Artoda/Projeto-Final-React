import axios from "axios";

export const api = axios.create({
  baseURL: "https://trabalho-api-desenv-web-g2.up.railway.app/postgres"
  // headers: {
  //   Authorization:''
  // }
});

export const apiGit = axios.create({
  baseURL: "https://api.github.com/users",
});

// export const apiLocal = axios.create({ teste
//   baseURL: "http://localhost:8080/postgres"
//   // headers: {
//   //   Authorization:''
//   // }
// });