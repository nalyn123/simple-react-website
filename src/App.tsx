import React, { ComponentType } from "react";
import "./App.scss";

import { Navbar, Footer } from "@components/index";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./router";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "@store/store";

interface ProtectedRouteProps {
  component: ComponentType;
  auth?: boolean;
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routes.map((value, index) => (
            <Route
              key={index}
              path={value?.path}
              element={<ProtectedRoute {...value} />}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { auth } = useSelector((state: RootState) => state.user);
  return auth && props?.auth ? (
    <Navigate to="/" />
  ) : (
    <Layout component={props?.component} />
  );
};

const Layout = ({ component: Component }: { component: ComponentType }) => {
  return (
    <>
      <Navbar />
      <Component />
      <Footer />
    </>
  );
};

export default App;
