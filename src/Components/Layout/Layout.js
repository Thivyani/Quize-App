import React from "react";
import TopNavbar from "../Header/Header";

function Layout(props) {
  const { children } = props;

  return (
    <div>
      <TopNavbar />
      <main>
        <div />
        {children}
      </main>
    </div>
  );
}

export default Layout;
