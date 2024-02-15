import { useState } from "react";
import "./UseGeolocate.css";

function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}

export default function UseGeoLocationMain() {
  const {
    isLoading,
    position: { lat, lng },
    error,
    getPosition,
  } = useGeolocation();

  const [countClicks, setCountClicks] = useState(0);
  const [showMap, setShowMap] = useState(false);

  function handleClick() {
    setCountClicks((count) => count + 1);
    getPosition();
  }

  function handleViewMap() {
    setShowMap(!showMap);
  }

  return (
    <div className="use-geolocation-container">
      <h1>Find Your Location</h1>
      <div className="get-my-position-cont-1">
        <p>Click the button below to get your current GPS position:</p>
        <button onClick={handleClick} disabled={isLoading}>
          {isLoading ? "Loading..." : "Get My Position"}
        </button>
      </div>

      <div className="use-geolocation-cont-2">
        {error && <p className="error">{error}</p>}
        {!isLoading && !error && lat && lng && (
          <div className="marginRight">
            <p>Your GPS position:</p>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lng}</p>
            <a onClick={handleViewMap} href="#view-on-map">
              View on Map
            </a>
          </div>
        )}
        <div className="marginLeft">
          <p>
            You have requested your position <span>{countClicks} times</span>
          </p>
        </div>{" "}
      </div>
      {showMap && (
        <div className="view-on-map" id="view-on-map">
          <iframe
            title="Map"
            width="100%"
            height="300"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${
              lng - 0.01
            },${lat - 0.01},${lng + 0.01},${lat + 0.01}`}
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      )}
    </div>
  );
}
