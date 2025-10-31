import * as React from "react";
import "./InviteBlock.css";
import { useTranslation } from "react-i18next";

import InviteButtonBlack from "../InviteButton/InviteButtonBlack";

interface InviteBlockProps {
  isModalOpened: boolean;
  setIsModalOpened: Function;
}

function InviteBlock({ isModalOpened, setIsModalOpened }: InviteBlockProps) {
  const { t } = useTranslation();

  return (
    <div className="get-invite-block" id="get-access">
      <p>{t("get_early_access.title.row1")}</p>

      <p>{t("get_early_access.title.row2")}</p>

      <div
        className="get-invite-btn-group"
        onClick={() => setIsModalOpened(true)}
      >
        <div className="get-invite-lines" />
        <InviteButtonBlack text={t("get_early_access.button")} />
        <div className="get-invite-lines" />
      </div>
    </div>
  );
}

export default InviteBlock;
