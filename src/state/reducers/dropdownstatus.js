/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
// libraries
// actions
import {
  SET_SITE_DATA, // please update this and add more if necessary
  GET_ORGINAL_SITE_DATA,
} from "../actions/dropdownstatus";

/* ========== ~~~~~~~~~~ DROPDOWN STATUS : REDUCER ~~~~~~~~~~ ========== */
// DEFAULT STATE
const defaultState = {
  orginalSiteData: [
    "Show aggregate",
    "website.com",
    "webpage.com",
    "website-two.com",
    "my-website.com",
    "page.com",
    "web-blog.com",
    "webpage-three.com",
    "web-page-four.com",
    "webpage-five.com",
    "webpage-six.com",
    "my-website-two.com",
    "google.com",
    "yahoo.com",
    "bing.com",
    "flipkart.com",
    "myntra.com",
    "myntra-one.com",
    "amazon.com",
  ],
  selectedSiteData: [],
};

// REDUCER
export const dropdownStatus = (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  const { payload } = action;
  switch (action.type) {
    case SET_SITE_DATA:
      return { ...state, selectedSiteData: payload };
    case GET_ORGINAL_SITE_DATA:
      return { ...state };
    default:
      return newState;
  }
};
