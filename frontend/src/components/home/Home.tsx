/* eslint-disable jsx-a11y/media-has-caption */
// Home.js
import React from "react";
import "./Home.css";

function Home(): JSX.Element {
  return (
    <div className="hero-styles">
      <div className="video-wrapper">
        <video id="heroVideo" autoPlay loop playsInline muted>
          <source
            src="https://cms.whipsnadezoo.org/sites/default/files/2022-12/Whipsnade%20homepage%20video%20v2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="hero-wrapper">
        <div className="main-text">
          <span>Experience a world of wildlife in the heart of Uryupinsk</span>
          <h1>Visit Uryupinsk Zoo</h1>
          <div className="btn-box">
            <a href="/animals">Show Animals</a>
            <a href="/rates">Show Rates</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
