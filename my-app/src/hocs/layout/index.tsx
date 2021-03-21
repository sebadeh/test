import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import { AUTH_TOKEN } from "../../constants/common";
import { SiteUrl } from "../../constants/urls";
import Layout from "../../pages/layout";

export const WithLayout = (Container: any) => () => {
  const cookies = new Cookies();
  return (
    <Fragment>
      {cookies.get(AUTH_TOKEN) ? (
        <Layout>
          <Container />
        </Layout>
      ) : (
        <Redirect to={SiteUrl.LOGIN} />
      )}
    </Fragment>
  );
};
