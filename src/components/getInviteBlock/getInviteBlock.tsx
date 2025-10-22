import * as React from "react";
import "./getInviteBlock.css";
import { useTranslation } from "react-i18next";

import GetInviteBtnBlack from "../getInviteBtn/getInviteBtnBlack";

interface GetInviteBlockProps {
  isModalOpened: boolean;
  setIsModalOpened: Function;
}

function GetInviteBlock({
  isModalOpened,
  setIsModalOpened,
}: GetInviteBlockProps) {
  const { t } = useTranslation();

  return (
    <div className="get-invite-block" id="get-access">
      <p>{t("get_early_access.title.row1")}</p>
      
      <p>{t("get_early_access.title.row2")}</p>

      <div
        className="get-invite-btn-group"
        onClick={() => setIsModalOpened(true)}
      >
        <div className="get-invite-lines"/>
        <GetInviteBtnBlack text={t("get_early_access.button")} />
        <div className="get-invite-lines"/>
      </div>
    </div>
  );
}

export default GetInviteBlock;
