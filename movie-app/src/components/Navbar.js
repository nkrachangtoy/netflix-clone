import React, { useEffect, useState } from 'react'
import netflixLogo from "../assets/logo/Netflix_Logo_PMS.png";
import avatar from "../assets/icons/png/boy.png";

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 50 ) {
                handleShow(true);
            } else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll")
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__main-nav">
            <img className="nav__logo" src={netflixLogo} alt="Logo"/>
            <ul className="nav__list">
                <li className="nav__item"><a>Home</a></li>
                <li className="nav__item"><a>TV Shows</a></li>
                <li className="nav__item"><a>Movies</a></li>
                <li className="nav__item"><a>New & Popular</a></li>
                <li className="nav__item"><a>My List</a></li>
            </ul>
            </div>
            <img className="nav__avatar" src={avatar} alt="avatar" />
        </div>
    )
}

export default Navbar
