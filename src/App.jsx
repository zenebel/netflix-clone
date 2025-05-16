// Import dependencies and components
import React from "react";
import "./App.css"; // App-wide styles
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import Footer from "./components/Footer/Footer";
import requests from "./utils/request"; // Import requests for API URLs

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <Nav />

      {/* Hero Banner */}
      <Banner />

      {/*  Content Rows with Live TMDB Data */}
      <div className="categories-section">
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
