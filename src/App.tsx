import React, { ComponentType } from "react";
import "./App.scss";

import { Navbar, Footer } from "@components/index";
import { Home, Products, Product } from "@pages/index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./router";

function AppController() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((value, index) => (
            <Route
              key={index}
              path={value?.path}
              element={<Layout component={value?.component} />}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Layout = ({ component: Component }: { component: ComponentType }) => {
  return (
    <>
      <Navbar />
      <Component />
      <Footer />
    </>
  );
};

export default AppController;
