import React from "react";
import Card from "./Card";
import "./StartingPage.css";

const AdminStartingPage = ({
  username,
  setUsername,
  password,
  setPassword,
  setShowQuestionAddPage,
  setShowStartingPage
}) => {
  const Login = () => {
    if (username == "admin" && password == "admin123") {
      setShowQuestionAddPage(true);
      setShowStartingPage(false);
    }
  };

  return (
    <Card>
      <h1 className="header">Welcome to Quiz Game!</h1>
      <h3 className="primary_text">Please enter your username.</h3>
      <input
        type="text"
        placeholder="Username"
        className="username_input"
        vtypealue={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="text"
        placeholder="password"
        className="username_input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="start_btn" onClick={Login}>
        Login
      </button>
    </Card>
  );
};

export default AdminStartingPage;
