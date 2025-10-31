import * as React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase";
import "./LoginForm.css";
import { ReactComponent as EyeSvg } from "../../../assets/svg/eye.svg";

function RegisterForm() {
  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      await updateProfile(userCredential.user, { displayName: userName });

      const user = userCredential.user;
      console.log(`Registration success for:`);
      console.log({
        name: userCredential.user.displayName,
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      });
      navigate("/login");
    } catch (error: any) {
      console.error(`Registration failed: ${error.message}`);
    }
  };

  return (
    <form className="login-form" onSubmit={formSubmit}>
      <div className="login-title">Регистрация</div>
      <div className="login-form-field">
        <div className="login-form-label">Имя</div>

        <div className="login-form-input">
          <input
            type="text"
            placeholder="Александр"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
      </div>

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
        Начать
      </button>

      <div className="form-switch-link">
        Уже есть аккаунт?{" "}
        <a
          onClick={() => {
            navigate("/login");
          }}
        >
          Войдите
        </a>
      </div>
    </form>
  );
}

export default RegisterForm;
