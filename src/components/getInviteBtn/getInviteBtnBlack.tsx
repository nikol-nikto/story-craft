import * as React from "react";
import "./getInviteBtn.css";
import { ReactComponent as EllipseSvgBlack } from "../../assets/svg/Ellipse_black.svg";

interface GetInviteBtnBlackProps {
  text: string;
}

function GetInviteBtnBlack({ text }: GetInviteBtnBlackProps) {
  return (
    <div className="get-invite-btn">
      <div className="get-invite-btn-ellipses">
        <EllipseSvgBlack style={{ width: "18px" }} />
        <EllipseSvgBlack style={{ width: "6px" }} />
      </div>
      <div
        className="get-invite-btn-text black"
      >
        {text}
      </div>
      <div className="get-invite-btn-ellipses">
        <EllipseSvgBlack style={{ width: "6px" }} />
        <EllipseSvgBlack style={{ width: "18px" }} />
      </div>
    </div>
  );
}

export default GetInviteBtnBlack;
