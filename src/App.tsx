import React, { ComponentType, useEffect } from "react";
import "./App.scss";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./router";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, store } from "@store/store";
import { fetchUser } from "@store/user-store";
import { CommonUtils } from "@utils/common-utils";
import { Layout } from "@template/index";

interface ProtectedRouteProps {
  component: ComponentType;
  auth?: boolean;
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={BASE_URL}>
        <AppController />
      </BrowserRouter>
    </Provider>
  );
}

const AppController = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <Routes>
      {routes.map((value, index) => (
        <Route
          key={index}
          path={value?.path}
          element={<ProtectedRoute {...value} />}
        ></Route>
      ))}
    </Routes>
  );
};

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { auth } = useSelector((state: RootState) => state.user);

  if (auth === null) {
    return <></>;
  }

  if (CommonUtils.checkAuth(props.auth)) {
    return <Navigate to="/" />;
  }

  return <Layout component={props?.component} />;
};

export default App;
