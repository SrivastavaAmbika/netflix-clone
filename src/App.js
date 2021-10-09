import React from "react";
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Banner />
    <Row title = "NETFLIX ORIGINAL"  fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}   />
    <Row title ="Trending Now"  fetchUrl={requests.fetchTrending}  />
    <Row title ="Top Rated"  fetchUrl={requests.fetchTopRated}  />
    <Row title ="Horror Movies"  fetchUrl={requests.fetchHorrorMovies}  />
    <Row title ="Romance Movies"  fetchUrl={requests.fetchRomanceMovies}  />
    <Row title ="Comedy Movies"  fetchUrl={requests.fetchComedyMovies}  />
    <Row title ="Action Movies"  fetchUrl={requests.fetchActionMovies}  />    
    <Row title ="Documentaries"  fetchUrl={requests.fetchDocumentaries}  />
    
    </>
  );
}

export default App;
