import React from "react";
import "./style.css";
// import ReactDOM from "react-dom";

const getMonth = function () {
  return new Date().getMonth();
};
const getSeason = function (lat, month) {
  if (lat > 0) {
    return month < 9 && month > 2 ? "Summer" : "Winter";
  } else {
    return month < 9 && month > 2 ? "Winter" : "Summer";
  }
};
const DisplaySeason = (props) => {
  let str = getSeason(props.lat, getMonth());
  if (str === "Winter" && props.lat) {
    return (
      <div className="wrapper winter-box">
        <i className="massive snowflake icon first-icon"></i>
        <h1 className="text">Burr, it's chilly!</h1>
        <i className=" massive snowflake icon second-icon"></i>
      </div>
    );
  }
  if (str === "Summer" && props.lat) {
    return (
      <div className="wrapper summer-box">
        <i className=" massive sun icon first-icon"></i>
        <h1 className="text">Let's hit the beach!</h1>
        <i className=" massive sun icon second-icon"></i>
      </div>
    );
  }
  return <div className="wrapper">{props.error}</div>;
};
export default DisplaySeason;
