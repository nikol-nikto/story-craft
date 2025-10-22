import * as React from "react";
import "./forWhoBlock.css";
import { useTranslation } from "react-i18next";

function ForWhoBlock() {
  const { t } = useTranslation();

  return (
    <div className="for-who-block">
      <div className="for-who-column left">
        <p className="for-who-title">{t("for_who.title")}</p>

        <p className="for-who-text bigger">{t("for_who.subtitle")}</p>
      </div>

      <div className="for-who-column right">
        <p className="for-who-text">{t("for_who.text1")}</p>

        <p className="for-who-text">{t("for_who.text2")}</p>
        
        <p className="for-who-text">{t("for_who.text3")}</p>
      </div>
    </div>
  );
}

export default ForWhoBlock;
