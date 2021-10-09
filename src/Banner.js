import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';


const Banner = () => {
    const[bmovie,setBmovie]=useState([]);
    useEffect(() => {
      const fetchData = async()=>{
const request = await axios.get(requests.fetchNetflixOriginals);
setBmovie(
    request.data.results[
    Math.floor(Math.random()*request.data.results.length-1)]
)
console.log(bmovie)
return request;
      } 
      fetchData(); 
    }, [])
    return (
        <>
        <header className="Banner"
        style={{backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${bmovie?.backdrop_path}")`,
        backgroundPosition:"center center"}}>
<div className="Banner_con">
<h1 className="banner_tit">{bmovie?.title || bmovie?.name || bmovie?.original_name}</h1>
<div className="Banner_button">
    <button className="Banner_buttonA">Play</button>
     <button className="Banner_buttonA">My List</button>
</div>
<h1 className="Banner_disc">{bmovie?.overview}</h1>
</div>
<div className="Banner_bottomfade" />
        </header>    
        </>
    )
}

export default Banner
