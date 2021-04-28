/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
// libraries
import React from "react";
// material
import DropDown from "../material/dropdown/dropdown";
// styles
import "./app.css";

import { connect } from "react-redux";
import {
  getOrginalSiteData,
  setSiteData,
} from "../state/actions/dropdownstatus";

/* ========== ~~~~~~~~~~ APP ~~~~~~~~~~ ========== */
const App = (props) => {
  return (
    <div className={`app`}>
      <DropDown {...props} />
    </div>
  );
};

const mapStateToProps = function (state) {
  const orginalSiteData =
    state && state.dropdownStatus && state.dropdownStatus.orginalSiteData;
  const selectedSiteData =
    state && state.dropdownStatus && state.dropdownStatus.selectedSiteData;

  return {
    orginalSiteData,
    selectedSiteData,
  };
};

const mapDispatchToProps = function (dispatch) {
  const dispatchActions = {
    setSiteData: function (value) {
      dispatch(setSiteData(value));
    },
    getOrginalSiteData: function () {
      dispatch(getOrginalSiteData());
    },
  };

  return {
    actions: dispatchActions,
  };
};

/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default connect(mapStateToProps, mapDispatchToProps)(App);
