import React from "react";
import TopTitleCard from "./TopTitleCard";
import DetailsBox from "./DetailsBox";
import "../styles/detailsoverlay.scss";

export default function DetailsOverlay({ job, callback }) {
  return (
    <div className="overlay-container">
      <img
        src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close&icon_size=32&icon_color=000000&icon_flip=&icon_rotate=0"
        className="close_btn"
        alt=""
        onClick={() => callback(false)}
      />
      <div className="main">
        <TopTitleCard job={job} />
        <div style={{ height: "3rem" }}></div>
        <DetailsBox job={job} />
      </div>
    </div>
  );
}
