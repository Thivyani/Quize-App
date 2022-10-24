import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const history = useHistory();
  const location = useLocation();

  const admin = () => {
    history.push("/admin");
  };

  const student = () => {
    history.push("/");
  };

  return (
    <div className="topnav">
      <div
        className={location.pathname === "/" ? "active" : ""}
        onClick={student}
      >
        Student
      </div>
      <div
        className={location.pathname === "/admin" ? "active" : ""}
        onClick={admin}
      >
        Admin
      </div>
    </div>
  );
}
