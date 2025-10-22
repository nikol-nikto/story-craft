import * as React from "react";
import "./heroBlock.css";
import { useTranslation } from "react-i18next";

import GetInviteBtnWhite from "../getInviteBtn/getInviteBtnWhite";

interface HeroBlockProps {
  isModalOpened: boolean;
  setIsModalOpened: Function;
}

function HeroBlock({ isModalOpened, setIsModalOpened }: HeroBlockProps) {
  const { t } = useTranslation();

  return (
    <div className="hero-block" id="hero-block">
      <video width={"100%"} autoPlay loop playsInline muted>
        <source
          src={require("../../assets/video/hero_block_video2.mp4")}
          type="video/mp4"
        />
      </video>

      <div className="hero-content">
        <div className="hero-title">{t("hero.title")}</div>

        <div className="hero-desc">{t("hero.subtitle")}</div>

        <div className="hero-btn" onClick={() => setIsModalOpened(true)}>
          <GetInviteBtnWhite text={t("hero.button")} />
        </div>
      </div>
    </div>
  );
}

export default HeroBlock;
