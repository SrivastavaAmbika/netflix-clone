import React,{useState,useEffect} from 'react';
import './nav.css'

const Navbar = () => {
    const [show,handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
            handleShow(true);}
            else handleShow(false)
        });
        return () => {
          window.removeEventListener("scroll");  
        }
    }, []);
    return (
        <>
         <div className={`Navbar ${show && "Navbar_black"}`}>
             <img className="nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix_logo" />
         </div>   
        </>
    )
}

export default Navbar
