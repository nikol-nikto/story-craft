import * as React from "react";
import "./getInviteBtn.css";
import { ReactComponent as EllipseSvgBigger } from "../../assets/svg/Ellipse_bigger.svg";

interface GetInviteBtnWhiteProps {
  text: string;
}

function GetInviteBtnWhite({ text }: GetInviteBtnWhiteProps) {
  return (
    <div className="get-invite-btn white">
      <div className="get-invite-btn-text white">{text}</div>
      <div className="get-invite-btn-ellipses">
        <EllipseSvgBigger style={{ width: "6px" }} />
        <EllipseSvgBigger style={{ width: "18px" }} />
      </div>
    </div>
  );
}

export default GetInviteBtnWhite;
