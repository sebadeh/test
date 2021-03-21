import React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";
import "./styles.scss";

interface LayoutContainerProps {
  children: JSX.Element;
}

function LayoutContainer({
  children,
}: LayoutContainerProps & RouteComponentProps) {
  return (
    <div className="theme-rs">
      <div className="authenticated-layout">
        <div className="content-layout">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LayoutContainer);
