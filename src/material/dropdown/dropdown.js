/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
// libraries
import React, { useState } from "react";
// styles
import "./dropdown.css";

/* ========== ~~~~~~~~~~ DROPDOWN ~~~~~~~~~~ ========== */
const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSites, setSelectedSiteData] = useState(props.selectedSiteData);
  const [selectedSitesDataInfo, setSelectedSiteDataInfo] = useState([]);
  const [initialSiteData] = useState(props.orginalSiteData);
  const [count, setCount] = useState(0);
  const [displayFilteredSites, setDisplayFilteredSites] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const uniqueArray = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const handleOnChange = (event) => {
    const { setSiteData } = props.actions;
    const element = event && event.target;

    if (
      element.checked &&
      !selectedSitesDataInfo.includes(element.getAttribute("item"))
    ) {
      selectedSitesDataInfo.push(element.getAttribute("item"));
      setSelectedSiteData(selectedSitesDataInfo);
      setSiteData(selectedSitesDataInfo);
      setSelectedSiteDataInfo(selectedSitesDataInfo);
      setDisplayFilteredSites(false);
      setCount(Math.random());
    } else {
      // const selSitesArr = selectedSites.filter((item) => {
      //   return item !== element.getAttribute("item");
      // });

      const selSitesArrInfo = selectedSitesDataInfo.filter((item) => {
        return item !== element.getAttribute("item");
      });
      setSelectedSiteData(selSitesArrInfo);
      setSiteData(selSitesArrInfo);
      setSelectedSiteDataInfo(selSitesArrInfo);
      setDisplayFilteredSites(false);
      setCount(Math.random());
    }
  };

  const onHandleSelectAll = () => {
    const { setSiteData } = props.actions;
    selectedSites.push(...initialSiteData);
    var unique = selectedSites.filter(uniqueArray);
    setSelectedSiteData(unique);
    setSiteData(unique);
    setSelectedSiteDataInfo(unique);
    setDisplayFilteredSites(false);
    setCount(Math.random());
  };

  const onHandleSelectNone = () => {
    const { setSiteData } = props.actions;
    setSelectedSiteData([]);
    setSiteData([]);
    setSelectedSiteDataInfo([]);
    setDisplayFilteredSites(false);
    setCount(Math.random());
  };

  const handleFilterClick = () => {
    setDisplayFilteredSites(true);
    console.log(
      "-------------FILTERED SITES-------------",
      selectedSitesDataInfo
    );
  };

  return (
    <div className="container">
      <div style={{ display: "none" }}>{count}</div>
      <button className={`dropdown`} onClick={toggling}>
        <i className="fas fa-link link-icon"></i>
        <div className="text-container">
          <div className="sites-text">Sites</div>
          <div className="all-sites-text">
            {selectedSites.length === 0
              ? "All Sites"
              : selectedSites.length === 1
              ? "1 Site Selected"
              : `${selectedSites.length} Sites Selected`}
          </div>
        </div>
        {!isOpen ? (
          <i className="fas fa-sort-down drop-drown-icon"></i>
        ) : (
          <i className="fas fa-sort-up drop-drown-up-icon"></i>
        )}
      </button>
      {isOpen && (
        <React.Fragment>
          <div className="dropdown-down">
            {displayFilteredSites ? (
              <div
                className={`${
                  selectedSitesDataInfo.length > 0
                    ? "drop-down-result-container"
                    : ""
                }`}
              >
                {selectedSitesDataInfo.map((site, i) => {
                  return (
                    <div key={i} className="selected-output-text">
                      {site}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div></div>
            )}

            <div className="drop-down-search-container">
              <i className="fas fa-search input-search-icon"></i>
              <input placeholder="Search Site" type="text" />
            </div>
            <div className="drop-down-select">
              <div className="select-all-cont" onClick={onHandleSelectAll}>
                <i className="fas fa-plus-circle plus-icon"></i>
                <div className="select-all-label">Select all</div>
              </div>
              <div className="select-none-cont" onClick={onHandleSelectNone}>
                <i className="fas fa-times-circle close-icon"></i>
                <div className="select-none-label">Select none</div>
              </div>
            </div>
            <div className="site-list-container">
              {initialSiteData.map((item, x) => {
                const isSelected = selectedSitesDataInfo.find(
                  (ele) => ele === item
                );
                return (
                  <div className="site-list-content" key={x}>
                    <input
                      className="checkbox-input"
                      type="checkbox"
                      checked={!!isSelected ? true : false}
                      item={item}
                      onChange={handleOnChange}
                    />
                    <div className="site-list-label">{item}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="button-container">
            <div
              className={`filter-button ${
                selectedSites && selectedSites.length > 0
                  ? "button-back-color-selected"
                  : "button-back-color-not-selected"
              }`}
              onClick={handleFilterClick}
            >
              Filter
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default DropDown;
