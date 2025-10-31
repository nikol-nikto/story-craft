import * as React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"; // Add this import
import { auth } from "../../../firebase"; // Import your initialized auth instance

import "./LoginForm.css";
import { ReactComponent as EyeSvg } from "../../../assets/svg/eye.svg";

function LoginForm() {
  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );

      const user = userCredential.user;
      console.log(`Authorization success for:`);
      console.log({
        name: userCredential.user.displayName,
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      });
      navigate("/");
    } catch (error: any) {
      console.error(`Authorization failed: ${error.message}`);
    }
  };

  return (
    <form className="login-form" onSubmit={formSubmit}>
      <div className="login-title">Авторизация</div>

      <div className="login-form-field">
        <div className="login-form-label">Почта</div>

        <div className="login-form-input">
          <input
            type="email"
            placeholder="name@example.com"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="login-form-field">
        <div className="login-form-label">Пароль</div>
        <div className="login-form-input">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="••••••••••••"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <EyeSvg
            className="login-form-svg"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        </div>
      </div>

      <button className="login-form-button" type="submit">
        Войти
      </button>

      <div className="form-switch-link">
        Нет аккаунта?{" "}
        <a
          onClick={() => {
            navigate("/register");
          }}
        >
          Зарегистрируйтесь
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
