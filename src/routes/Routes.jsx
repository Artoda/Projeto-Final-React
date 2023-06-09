import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "../common/components/Header";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Contact } from "../pages/Contact";
import { AboutUs } from "../pages/AboutUs";
import { Footer } from "../common/components/Footer";

export function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route Component={Footer} > */}
        <Route Component={Header}>
          <Route Component={Home} path="/" />
          <Route Component={Home} path="/artes" />
          <Route Component={Home} path="/antiguidades" />
          <Route Component={Home} path="/joias" />
          <Route Component={Home} path="/armas" />
          <Route Component={Home} path="/jogos" />
          <Route Component={Home} path="/livros" />
          <Route Component={Login} path="/login" />
          <Route Component={Register} path="/register" />
          <Route Component={Contact} path="/contact" />
          <Route Component={AboutUs} path="/aboutus" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
