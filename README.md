Netflix Clone

Overview
This project is a Netflix Clone Web App built using React.js. It mimics the basic structure of Netflix’s landing page with features such as:

Dynamic banner

Multiple movie rows (Trending, Top Picks, etc.)

YouTube trailer previews

Fully responsive design

Features
Fetches movie data from The Movie Database (TMDB) API

Displays multiple categorized movie rows

Renders YouTube trailers on user interaction

Modern layout using React Components

Fully responsive across device sizes

Technologies Used
React.js

Axios for HTTP Requests

The Movie Database (TMDB) API

movie-trailer package for YouTube lookup

react-youtube package for embedded players

Custom CSS for styling

Folder Structure
src/
src/
├── components/
│   ├── Banner/
│   ├── Footer/
│   ├── Nav/
│   └── Row/
├── utils/
│   ├── axios.js
│   └── request.js
├── App.jsx
├── App.css
├── index.js
└── index.css

public/
└── index.html

How to Run Locally
Clone the repository
git clone <repository-link>

Install dependencies
npm install

Run the development server
npm start

Open in browser
http://localhost:3000

Demo Preview
Add screenshots or screen recordings here if available.

Future Enhancements
Add login and authentication

Build out separate pages (Profile, My List)

Add real-time search functionality

Improve trailer search logic with fallback strategies

License
This project is for educational and demonstration purposes.
