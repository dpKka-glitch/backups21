import React from "react";
import ReactMarkdown from "react-markdown";
import "../styles/DetailBox.scss";
import useFetchJobs from "../useFetchJobs";
import Button from "./Button";

export default function DetailsBox({ job }) {
  return (
    <>
      <div className="details_box">
        <div className="details_header">
          <div className="header_text_box">
            <div className="text_3 text_sec">
              {new Date(job.created_at).toLocaleDateString()}{" "}
              <span> {job.type} </span>
            </div>
            <div className="text_1">{job.title}</div>
            <div className="text_2">{job.company}</div>
          </div>
          <div className="bttn_container">
            <Button
              width="100%"
              primary={true}
              height="3rem"
              name="Apply Now"
            />
          </div>
        </div>
        <div style={{ padding: "1rem" }}> {job.description} </div>
      </div>
    </>
  );
}
