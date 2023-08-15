import { useState } from "react";
import { fetchJobs } from "../../redux/actions/jobs";
import { connect } from "react-redux";

const View = ({ jobs, failedjobs, fetchJobs }) => {
  return (
    <div>
      <button onClick={() => fetchJobs()}> Click here </button>
      <p>{failedjobs}</p>
      {jobs.length > 0 && <p>{jobs}</p>}
    </div>
  );
};

const mapStateToProps = ({ jobs }) => {
  return {
    jobs: jobs.jobs,
    failedjobs: jobs.failedJobs,
  };
};
export default connect(mapStateToProps, {
  fetchJobs,
})(View);
