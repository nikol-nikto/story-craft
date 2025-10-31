import * as React from "react";
import { useState, useEffect } from "react";
import "./LoginPage.css";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./LoginForm/RegisterForm";

interface LoginPageProps {
  isRegisterMode?: boolean;
}

function LoginPage({ isRegisterMode = false }: LoginPageProps) {

  return (
    <div className="login-page">
      <div className="login-page-header">
        Beta-доступ, оставьте <a>обратную связь</a>
      </div>

      {isRegisterMode ? <RegisterForm /> : <LoginForm />}
    </div>
  );
}

export default LoginPage;
