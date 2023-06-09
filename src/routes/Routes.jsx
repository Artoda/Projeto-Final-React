import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "../common/components/Header";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Contact } from "../pages/Contact";
import { AboutUs } from "../pages/AboutUs";
import useAuth from "../hooks/useAuth";
import { Footer } from "../common/components/Footer";

// verifica se está logado
const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />; //logado retorna Item senão retorna Signin
};

export function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route Component={Footer}> */}
          <Route Component={Header}>
            <Route Component={Home} path="/" />
            <Route Component={Login} path="/login" />
            <Route Component={Register} path="/register" />
            <Route Component={Contact} path="/contact" />
            <Route Component={AboutUs} path="/aboutus" />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
