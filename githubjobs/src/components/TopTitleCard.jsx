import React from "react";
import "../styles/toptitle.scss";
import Button from "./Button";

export default function TopTitleCard({ job }) {
  return (
    <div className="top_tile">
      <div className="company_logo">
        <img
          src={
            job.company_logo
              ? job.company_logo
              : `https://ui-avatars.com/api/?name=${job.title[0]}`
          }
        />
      </div>
      <div className="title_box">
        <div className="title_text">
          {job.company} <br />{" "}
          <span style={{ fontSize: "small", fontWeight: "normal" }}>
            {" "}
            {job.company_url}
          </span>
        </div>
        <div className="btn_container">
          <a href={job.url}>
            <Button
              width="100%"
              primary={false}
              height="3rem"
              name="Company site"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
