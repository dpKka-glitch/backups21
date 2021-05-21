import React, { useState } from "react";
import "../styles/card.scss";

export default function Card({ job, select, overlay }) {
  function handleClick() {
    select(job);
    overlay(true);
  }

  return (
    <>
      <div className="card_container">
        <div className="logo_top">
          <img src={job.company_logo} alt="" />
        </div>
        <div onClick={handleClick} className="details_btn">
          Details
        </div>
        <div className="text_3">
          {new Date(job.created_at).toLocaleDateString()}{" "}
          <span> {job.type} </span>
        </div>
        <div className="text_1">{job.title}</div>
        <div className="text_2">{job.company}</div>
        <div className="location">{job.location}</div>
      </div>
    </>
  );
}
