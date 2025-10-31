import * as React from "react";
import "./OneClick.css";
import { useTranslation } from "react-i18next";

function OneClick() {
  const { t } = useTranslation();

  return (
    <div className="one-click" id="about">
      <div className="one-click-title">{t("in_one_click.title")}</div>

      <div className="one-click-list">
        <div className="types-list-item">
          <video autoPlay loop playsInline muted>
            <source
              src={require("../../assets/video/anime_video.mp4")}
              type="video/mp4"
            />
          </video>

          <div className="types-list-item-title">{t("in_one_click.anime")}</div>
        </div>

        <div className="types-list-item">
          <img src={require("../../assets/image/card-manga.jpg")} alt="img" />

          <div className="types-list-item-title">{t("in_one_click.manga")}</div>
        </div>

        <div className="types-list-item">
          {/* <img src={require("../../assets/image/card-books.jpg")} alt="img" /> */}
          <video autoPlay loop playsInline muted>
            <source
              src={require("../../assets/video/book_video.mp4")}
              type="video/mp4"
            />
          </video>

          <div className="types-list-item-title">{t("in_one_click.books")}</div>
        </div>

        <div className="types-list-item">
          <video autoPlay loop playsInline muted>
            <source
              src={require("../../assets/video/animations_video.mp4")}
              type="video/mp4"
            />
          </video>

          <div className="types-list-item-title">
            {t("in_one_click.animations")}
          </div>
        </div>

        <div className="types-list-item">
          <video autoPlay loop playsInline muted>
            <source
              src={require("../../assets/video/clips_video.mp4")}
              type="video/mp4"
            />
          </video>

          <div className="types-list-item-title">{t("in_one_click.clips")}</div>
        </div>
      </div>
    </div>
  );
}

export default OneClick;
