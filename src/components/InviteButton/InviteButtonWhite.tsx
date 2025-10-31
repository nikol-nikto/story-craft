import * as React from "react";
import "./InviteButton.css";
import { ReactComponent as EllipseSvgBigger } from "../../assets/svg/Ellipse_bigger.svg";

interface InviteButtonWhiteProps {
  text: string;
}

function InviteButtonWhite({ text }: InviteButtonWhiteProps) {
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

export default InviteButtonWhite;
