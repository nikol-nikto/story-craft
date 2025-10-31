import * as React from "react";
import "./GuideBlock.css";
import { useTranslation } from "react-i18next";

function GuideBlock() {
  const { t } = useTranslation();

  return (
    <div className="guide-block" id="how-it-works">
      <div className="guide-block-title">{t("how_it_works.title")}</div>

      <div className="guide-tips">
        <div className="guide-tips-item">
          <div className="guide-block-text">
            {t("how_it_works.tips.tips1.title")}
          </div>

          <textarea placeholder={t("how_it_works.tips.tips1.text")} rows={2} />
        </div>

        <div className="guide-tips-item">
          <div className="guide-block-text">
            {t("how_it_works.tips.tips2.title")}
          </div>

          <textarea placeholder={t("how_it_works.tips.tips2.text")} rows={2} />
        </div>

        <div className="guide-tips-item">
          <div className="guide-block-text">
            {t("how_it_works.tips.tips3.title")}
          </div>

          <textarea placeholder={t("how_it_works.tips.tips3.text")} rows={2} />
        </div>
      </div>

      <div className="guide-examples">
        <div className="guide-examples-item">
          <div className="guide-block-text">
            {t("how_it_works.examples.title1")}
          </div>

          <div className="guide-examples-content">
            <img src={require("../../assets/image/cat_image.png")} alt="img" />
          </div>
        </div>

        <div className="guide-examples-item">
          <div className="guide-block-text">
            {t("how_it_works.examples.title2")}
          </div>

          <div className="guide-examples-content">
            <img src={require("../../assets/image/cat2_image.png")} alt="img" />
          </div>
        </div>

        <div className="guide-examples-item">
          <div className="guide-block-text">
            {t("how_it_works.examples.title3")}
          </div>

          <div className="guide-examples-content">
            <video autoPlay loop playsInline muted>
              <source
                src={require("../../assets/video/cat_video.mp4")}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideBlock;
