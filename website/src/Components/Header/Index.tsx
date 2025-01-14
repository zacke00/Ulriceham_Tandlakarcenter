import React, { SVGProps, useEffect, useState } from "react"
import {Link, useLocation} from "react-router-dom"
import {AboutUsPage} from "../../Pages/About-us/Index"
import {ContactPage}  from "../../Pages/Contact/Index"
import {HomePage}  from "../../Pages/Home/Index"

import "./Header.css"

export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isMainPage = location.pathname == "/";

  return (
    <div
        className={`${
          scrolled ? "Header-Container-Scrolled" : "Header-Container"
        } ${isMainPage ? "Main-Page-Header" : "Other-Page-Header"}`}
      >
      <div id="Header-Inner-Container">
        <div id="Header-Icon">Tandanlaget</div>
        <div id="Header-Pages-Container">
          <Link to="/" className={scrolled ? "Scrolled-Link" : "Normal-Link"}>
            <h2>Hem</h2>
          </Link>
          <Link to="/about-us" className={scrolled ? "Scrolled-Link" : "Normal-Link"}>
            <h2>Om oss</h2>
          </Link>
          <Link to="/contact" className={scrolled ? "Scrolled-Link" : "Normal-Link"}>
            <h2>Kontakt</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};