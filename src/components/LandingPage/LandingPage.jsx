import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing_overlay">
        <h2 className="landing_logo">NETFLIX</h2>
        <div className="landing_content">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Starts at $7.99. Cancel anytime.</p>
          <div className="landing_cta">
            <input type="email" placeholder="Email address" />
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
