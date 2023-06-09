import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "../common/components/Header";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { AboutUs } from "../pages/AboutUs";
import { Footer } from "../common/components/Footer";

export function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route Component={Footer}> */}
        <Route Component={Header}>
          <Route Component={Home} path="/" />
          <Route Component={Login} path="/login" />
          <Route Component={AboutUs} path="/aboutus" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}