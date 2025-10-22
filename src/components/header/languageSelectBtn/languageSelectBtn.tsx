import React from "react";
import "./languageSelectBtn.css";
import i18n from "../../../locales/i18n";

interface LanguageSelectBtnProps {
  selectedLanguage: string;
  setSelectedLanguage: Function;
  setIsSelectOpened: Function;
  isSelectOpened: boolean;
  hasScrolledPastHero: boolean;
}

function LanguageSelectBtn({
  selectedLanguage,
  setSelectedLanguage,
  setIsSelectOpened,
  isSelectOpened,
  hasScrolledPastHero,
}: LanguageSelectBtnProps) {
  const handleLanguageItemClick = (lan: string) => {
    setSelectedLanguage(lan);
    i18n.changeLanguage(lan);

    setIsSelectOpened(false);
  };

  return (
    <>
      <button
        className="navbar-language-select"
        onClick={() => setIsSelectOpened(!isSelectOpened)}
      >
        {selectedLanguage}
        <div className="language-img">
          {selectedLanguage === "EN" ? (
            <img src={require("../../../assets/image/us_flag.png")} alt="img" />
          ) : selectedLanguage === "RU" ? (
            <img src={require("../../../assets/image/ru_flag.png")} alt="img" />
          ) : (
            <img src={require("../../../assets/image/jp_flag.png")} alt="img" />
          )}
        </div>
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
            <div className="language-img">
              <img src={require("../../../assets/image/us_flag.png")} alt="img" />
            </div>
            English
          </div>
          <div
            className="language-droplist-item"
            onClick={() => handleLanguageItemClick("RU")}
          >
            <div className="language-img">
              <img src={require("../../../assets/image/ru_flag.png")} alt="img" />
            </div>
            Russian
          </div>
          <div
            className="language-droplist-item"
            onClick={() => handleLanguageItemClick("JP")}
          >
            <div className="language-img">
              <img src={require("../../../assets/image/jp_flag.png")} alt="img" />
            </div>
            Japanese
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default LanguageSelectBtn;
