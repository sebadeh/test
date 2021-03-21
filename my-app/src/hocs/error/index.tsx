import React from "react";
import { Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import { AUTH_TOKEN } from "../../constants/common";
import Home from "../../pages/home";
import { WithLayout } from "../layout";

export const WithError = () => {
  console.log("with error");
  const cookies = new Cookies();

  return cookies.get(AUTH_TOKEN) ? (
    WithLayout(Home)()
  ) : (
    <Redirect to={"/login"} />
  );
};
