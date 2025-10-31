import * as React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Modal.css";
import { emailService } from "../../services/emailService";
import InviteButtonBlack from "../InviteButton/InviteButtonBlack";

interface ModalProps {
  setIsModalOpened: Function;
  isModalOpened: boolean;
}

function Modal({ isModalOpened, setIsModalOpened }: ModalProps) {
  const { t } = useTranslation();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleUserEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  const sendMessage = () => {
    // emailService([userName, userEmail])

    setIsModalOpened(false);
  };

  useEffect(() => {
    if (isModalOpened) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      document.documentElement.style.scrollBehavior = "auto";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
        document.documentElement.style.scrollBehavior = "smooth";
      };
    }
  }, [isModalOpened]);

  return (
    <>
      <div onClick={() => setIsModalOpened(false)} className="overlay"></div>

      <form className="modal" onSubmit={sendMessage}>
        <div className="modal-wrapper">
          <div className="modal-title">
            <p>{t("modal.title.row1")}</p>
            <p>{t("modal.title.row2")}</p>
            <p>{t("modal.title.row3")}</p>
          </div>

          <div className="modal-inputs">
            <input
              type="text"
              placeholder={t("modal.input_name")}
              value={userName}
              onChange={handleUserNameChange}
              maxLength={20}
              required
            />

            <input
              type="email"
              placeholder={t("modal.input_email")}
              value={userEmail}
              onChange={handleUserEmailChange}
              maxLength={50}
              required
            />
          </div>
        </div>

        <button type="submit">
          <InviteButtonBlack text={t("modal.button")} />
        </button>
      </form>
    </>
  );
}

export default Modal;
