import React,{useState,useEffect} from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url="https://image.tmdb.org/t/p/original/";


const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies,setMovie] =useState([]);

    const [trailerUrl,setTrailerUrl] = useState();

    useEffect(() => {
     const  fetchData = async  ()=>{
const request = await axios.get(fetchUrl);
//https://www.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US
setMovie(request.data.results);
console.log(request);
return request;
     } 
     fetchData();  
    }, [fetchUrl])
    const opts={
height:"390px",
width:"100%",
playerVars:{
    autoplay:1,
},

    };


const handleClick =(movies)=>{
    if(trailerUrl){
        setTrailerUrl("");
     } else{
                movieTrailer(movies?.name || "")
                .then((url)=>{
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) =>console.log(error));
                
            }
        };
    




    return (
        <>
        <div className="container">
        <h1>{title}</h1> 
        <div className="row_Banner">
            {movies.map((movie)=>(
<img 
key={movie.id}
onClick={()=>handleClick(movie)}
 className={`row_Banner_img ${isLargeRow && "row_Banner_Large"}`} 
 src={`${base_url}${
     isLargeRow?movie.poster_path:movie.backdrop_path}`}
      alt="movie.name" />
                ))}
        </div>
       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
          
        </>
    );
}

export default Row
