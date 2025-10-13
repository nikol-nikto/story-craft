import React, { useState } from "react";
import "./header.css";

interface HeaderProps {
  selectedLanguage: string;
  setSelectedLanguage: Function;
  hasScrolledPastHero: boolean;
}

export const Header = ({
  selectedLanguage,
  setSelectedLanguage,
  hasScrolledPastHero,
}: HeaderProps) => {
  const [isSelectOpened, setIsSelectOpened] = useState(false);

  const handleLanguageItemClick = (lan: string) => {
    setSelectedLanguage(lan);

    setIsSelectOpened(false);
  };
  return (
    <div
      className="header"
      style={
        hasScrolledPastHero
          ? {
              borderBottom: "0.5px solid black",
              color: "black",
              backdropFilter: "blur(14px)",
            }
          : { borderBottom: "0.5px solid white", color: "white" }
      }
    >
      <div className="site-title">StoryCraft AI</div>
      <div className="navbar">
        <div className="navbar-link">About</div>
        <div className="navbar-link">How it works</div>
        <div className="navbar-link">Get Access</div>
        <button
          className="navbar-language-select"
          onClick={() => setIsSelectOpened(!isSelectOpened)}
        >
          {selectedLanguage}
          <div
            className="language_img"
            style={
              selectedLanguage === "EN"
                ? { backgroundImage: "url(./flag_imgs/us_flag.png)" }
                : selectedLanguage === "RU"
                ? { backgroundImage: "url(./flag_imgs/ru_flag.png)" }
                : { backgroundImage: "url(./flag_imgs/jp_flag.png)" }
            }
          />
        </button>
        {isSelectOpened ? (
          <div
            className="language-select-droplist"
            style={
              hasScrolledPastHero
                ? {
                    color: "black",
                    backgroundColor: "white",
                    backdropFilter: "none",
                  }
                : {
                    color: "white",
                    backgroundColor: "unset",
                    backdropFilter: "blur(14px)",
                  }
            }
          >
            <div
              className="language-droplist-item"
              onClick={() => handleLanguageItemClick("EN")}
            >
              <div
                className="language_img"
                style={{ backgroundImage: "url(./flag_imgs/us_flag.png)" }}
              />
              English
            </div>
            <div
              className="language-droplist-item"
              onClick={() => handleLanguageItemClick("RU")}
            >
              <div
                className="language_img"
                style={{ backgroundImage: "url(./flag_imgs/ru_flag.png)" }}
              />
              Russian
            </div>
            <div
              className="language-droplist-item"
              onClick={() => handleLanguageItemClick("JP")}
            >
              <div
                className="language_img"
                style={{ backgroundImage: "url(./flag_imgs/jp_flag.png)" }}
              />
              Japanese
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
