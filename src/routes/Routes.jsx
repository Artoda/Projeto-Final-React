import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "../common/components/Header";
import { Home } from "../pages/Home";
import { Footer } from "../common/components/Footer";

export function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route Component={Footer}> */}
        <Route Component={Header}>
          <Route Component={Home} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
