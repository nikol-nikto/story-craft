import React, { useState } from "react";
import "./header.css";
import LanguageSelectBtn from "./languageSelectBtn/languageSelectBtn";
import { ReactComponent as BurgerBtn } from "../../assets/svg/stash_burger-classic.svg";
import { ReactComponent as BurgerBtnBlack } from "../../assets/svg/stash_burger-classic copy.svg";
import { ReactComponent as CloseBtn } from "../../assets/svg/material-symbols_close-rounded.svg";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  selectedLanguage: string;
  setSelectedLanguage: Function;
  hasScrolledPastHero: boolean;
}

function Header({
  selectedLanguage,
  setSelectedLanguage,
  hasScrolledPastHero,
}: HeaderProps) {
  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="header">
      <div
        className="header-container"
        style={
          hasScrolledPastHero
            ? {
                borderBottom: "0.5px solid black",
                color: "black",
                backdropFilter: "blur(14px)",
              }
            : {
                borderBottom: "0.5px solid white",
                color: "white",
                backdropFilter: "none",
              }
        }
      >
        <a href="#hero-block" className="site-title">
          StoryCraft AI
        </a>

        <div className="navbar">
          <a href="#about" className="navbar-link">
            {t("header.about")}
          </a>
          <a href="#how-it-works" className="navbar-link">
            {t("header.how_it_works")}
          </a>
          <a href="#get-access" className="navbar-link">
            {t("header.get_access")}
          </a>

          <LanguageSelectBtn
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            setIsSelectOpened={setIsSelectOpened}
            isSelectOpened={isSelectOpened}
            hasScrolledPastHero={hasScrolledPastHero}
          />
        </div>

        <div className="mobile-navbar">
          <LanguageSelectBtn
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            setIsSelectOpened={setIsSelectOpened}
            isSelectOpened={isSelectOpened}
            hasScrolledPastHero={hasScrolledPastHero}
          />
          <button
            className="burger-btn"
            onClick={() => setIsSidebarOpened(!isSidebarOpened)}
          >
            {isSidebarOpened ? (
              <CloseBtn className="header-svg" />
            ) : hasScrolledPastHero ? (
              <BurgerBtnBlack className="header-svg" />
            ) : (
              <BurgerBtn className="header-svg" />
            )}
          </button>
        </div>
      </div>

      {isSidebarOpened && (
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-header-title">StoryCraft AI</div>

            <button
              className="burger-btn"
              onClick={() => setIsSidebarOpened(false)}
              aria-label="Close menu"
            >
              <CloseBtn />
            </button>
          </div>

          <a
            href="#about"
            className="sidebar-link"
            onClick={() => setIsSidebarOpened(false)}
          >
            {t("header.about")}
          </a>

          <a
            href="#how-it-works"
            className="sidebar-link"
            onClick={() => setIsSidebarOpened(false)}
          >
            {t("header.how_it_works")}
          </a>

          <a
            href="#get-access"
            className="sidebar-link"
            onClick={() => setIsSidebarOpened(false)}
          >
            {t("header.get_access")}
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
