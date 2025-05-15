// Import dependencies and components
import React from "react";
import "./App.css"; // App-wide styles
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import Footer from "./components/Footer/Footer";

// ✅ Import demo images
import HavocImage from "./assets/images/Havoc.jpeg";
import SquidGameImage from "./assets/images/SquidGame.jpeg";
import StrangerThingsImage from "./assets/images/StrangerThings.jpeg";

function App() {
  // ✅ Movie Lists Section
  const trendingMovies = [
    { src: HavocImage, alt: "Havoc" },
    { src: SquidGameImage, alt: "Squid Game" },
    { src: StrangerThingsImage, alt: "Stranger Things" },
  ];

  const newOnNetflix = [
    { src: StrangerThingsImage, alt: "Stranger Things" },
    { src: HavocImage, alt: "Havoc" },
  ];

  const topPicks = [
    { src: SquidGameImage, alt: "Squid Game" },
    { src: HavocImage, alt: "Havoc" },
  ];

  const actionMovies = [
    { src: HavocImage, alt: "Havoc" },
    { src: SquidGameImage, alt: "Squid Game" },
  ];

  const comedyMovies = [
    { src: StrangerThingsImage, alt: "Stranger Things" },
    { src: HavocImage, alt: "Havoc" },
  ];

  const documentaries = [
    { src: SquidGameImage, alt: "Squid Game" },
    { src: StrangerThingsImage, alt: "Stranger Things" },
  ];

  // ✅ App Layout Section
  return (
    <div className="app">
      {/* ✅ Navigation Bar */}
      <Nav />
      {/* ✅ Hero Banner */}
      <Banner />
      {/* ✅ Content Rows */}
      <div className="categories-section">
        <Row title="Trending Now" movies={trendingMovies} />
        <Row title="New on Netflix" movies={newOnNetflix} />
        <Row title="Top Picks for You" movies={topPicks} />
        <Row title="Action Movies" movies={actionMovies} />
        <Row title="Comedy Movies" movies={comedyMovies} />
        <Row title="Documentaries" movies={documentaries} />
      </div>
      <Footer /> {/* ✅ Added Footer */}
    </div>
  );
}

export default App;
