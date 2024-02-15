import React from "react";
import "./ClassyWeather.css";

export default class ClassyWeather extends React.Component {
  render() {
    return (
      <div className="classy-weather-app">
        <div>
          <input type="text" placeholder="Search from location" />
        </div>
      </div>
    );
  }
}
