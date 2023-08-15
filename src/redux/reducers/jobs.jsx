import jobsConstants from "./../constants/jobs";

const initialState = {
  jobs: [],
  failedJobs: ["Woo", "hoo"],
};

const { FETCH_JOBS } = jobsConstants;

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return { ...state, jobs: action.payload };
      break;
    default:
      return state;
  }
};
