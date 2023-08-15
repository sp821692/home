import axios from "axios";
import jobsConstants from "./../constants/jobs";

const { FETCH_JOBS } = jobsConstants;

const headers = { headers: { "Access-Control-Allow-Origin": "*" } };

export const fetchJobs = (
  details = {},
  onSuccess = () => {},
  onFailure = () => {}
) => {
  return (dispatch) => {
    console.log("Action is called");
    axios
      .get("http://127.0.0.1:5000/getjobs", headers)
      .then((response) => {
        console.log("Dispatching");
        console.log(response);
        dispatch({ type: FETCH_JOBS, payload: response.data.jobs });
      })
      .catch((response) => {
        console.error("Failed to fetch jobs");
      });
  };
};
