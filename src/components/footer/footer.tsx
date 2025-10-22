import * as React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";
import { ReactComponent as EllipseSvgBlack } from "../../assets/svg/Ellipse_black.svg";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <a href="#hero-block" className="footer-title">
        <EllipseSvgBlack className="footer-ellipse" />
        StoryCraft
      </a>
      <div className="footer-links">
        <div className="footer-links-column">
          <a>Instagram</a>
          <a>Telegram</a>
          <a>Tik Tok</a>
          <a>Twitter</a>
        </div>
        <div className="footer-links-column">
          <a href="#about">{t("header.about")}</a>
          <a href="#how-it-works">{t("header.how_it_works")}</a>
          <a href="#get-access">{t("header.get_access")}</a>
          <a>{t("header.join_us")}</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
