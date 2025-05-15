import React from "react";
import "./Banner.css";
import bannerImage from "../../assets/images/bgbanner.jpeg";

function Banner() {
  return (
    <header
      className="banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Title</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">
          This is a short description of the featured movie or TV show.
        </p>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
