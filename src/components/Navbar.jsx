import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/LOGO.svg"



function Navbar({ bagIcon }) {

    const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      // I understand that you want to do here. Does the UX team have any feedback on this?
      // every time we refresh the page, we are taken to the top of it with this smooth scroll effect.
    }, [location]); // the location never changes because we don't have links. Or we have then but they are not working.

    return (
        <nav>
            <Link className="logo-link">
                <img className="logo" src={logo} alt="isibcn logo" />
            </Link>
            <div className="nav-icons">
                <img src={bagIcon} alt="empty bag icon"/>
            </div>
        </nav>
        
    )
}

export default Navbar;