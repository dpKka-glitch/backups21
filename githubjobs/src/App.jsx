import useFetchJobs from "./useFetchJobs";
import React, { useState } from "react";
import Card from "./components/Card.jsx";
import "./App.css";
import DetailsOverlay from "./components/DetailsOverlay";
import Button from "./components/Button";
import SearchForm from "./components/SearchForm";

export default function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);
  const [selectedJob, setSelectedJob] = useState(null);
  const [overlay, setOverlay] = useState(false);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <div className="App">
      <div className="search_wrapper">
        <SearchForm params={params} onParamChange={handleParamChange} />
      </div>
      {overlay && <DetailsOverlay job={selectedJob} callback={setOverlay} />}
      {loading && <h2> Loading </h2>}
      {error && <h2> Error, try relaoding </h2>}
      <div className="cards_gallery">
        {jobs.map((job) => (
          <>
            <Card
              key={job.id}
              job={job}
              overlay={setOverlay}
              select={setSelectedJob}
            />
          </>
        ))}
      </div>
      <div
        onClick={() => {
          setPage(page + 1);
        }}
        style={{ position: "absolute", left: "47%" }}
      >
        <Button width="6rem" primary={false} height="3rem" name="Laod More" />
      </div>
    </div>
  );
}
