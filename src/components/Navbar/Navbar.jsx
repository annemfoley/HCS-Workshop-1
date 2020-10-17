import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Anne Foley</h1>
        <div className="info-bar">
          <p className="info-item">amfoley@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
            className = "info-link"
            to = {{pathname: "https://www.facebook.com/anne.foley.7127/"}}
            target = "_blank"
            >
            Facebook            
          </Link>

          <Link
            className = "info-link"
            to = {{pathname: "https://www.instagram.com/anne_mfoley/"}}
            target = "_blank"
            >
            Instagram            
          </Link>

          <Link
            className = "info-link"
            to = {{pathname: "https://github.com/annemfoley"}}
            target = "_blank"
            >
            GitHub            
          </Link>

        </div>
      </div>
      <div className="nav-background">
      <Link className = "info-link" to = {{pathname: "/about"}} > About </Link>
      <Link className = "info-link" to = {{pathname: "/experience"}} > Experience </Link>
      <Link className = "info-link" to = {{pathname: "/projects"}} > Projects </Link>
      <Link className = "info-link" to = {{pathname: "/education"}} > Education </Link>

      </div>
    </>
  );
}
