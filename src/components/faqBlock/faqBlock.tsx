import * as React from "react";
import "./faqBlock.css";
import { useTranslation } from "react-i18next";

function FaqBlock() {
  const { t } = useTranslation();

  return (
    <div className="faq-block">
      <div className="faq-title">{t("faq.title")}</div>

      <div className="faq-question">
        <p className="faq-text">{t("faq.question1.title")}</p>

        <p className="faq-text smaller">{t("faq.question1.text")}</p>
      </div>

      <div className="faq-question">
        <p className="faq-text">{t("faq.question2.title")}</p>

        <p className="faq-text smaller">{t("faq.question2.text")}</p>
      </div>
    </div>
  );
}

export default FaqBlock;
