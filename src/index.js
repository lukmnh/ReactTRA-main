import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../src/component/Page/Layout";
import Login from "../src/component/Page/Login";
import Registration from "../src/component/Page/Registration";
import TravelRequest from "./component/Page/User/TravelRequest";
import PageNotFound from "../src/component/Template/PageNotFound";
import User from "./component/Page/User";
import History from "./component/Page/User/History";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/Layout" element={<Layout />}> */}
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/user" element={<User />} />
        <Route path="/form-travel" element={<TravelRequest />} />
        <Route path="/history" element={<History />} />
        <Route path="/*" element={<PageNotFound />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
