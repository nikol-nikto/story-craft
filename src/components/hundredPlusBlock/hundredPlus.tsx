import * as React from "react";
import "./hundredPlus.css";
import { useTranslation } from "react-i18next";

function HundredPlusBlock() {
  const { t } = useTranslation();

  return (
    <div className="hundred-plus-title">
      <p>
        {t("hundred_plus.title_row1.before_hundred")}{" "}
        <span>{t("hundred_plus.title_row1.hundred")}</span>{" "}
        {t("hundred_plus.title_row1.after_hundred")}
      </p>

      <p>{t("hundred_plus.title_row2")}</p>
      
      <p>{t("hundred_plus.title_row3")}</p>

      <p className="hundred-plus-subtext">{t("hundred_plus.subtitle")}</p>
    </div>
  );
}

export default HundredPlusBlock;
