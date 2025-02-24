import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMainPage = location.pathname === "/";

  return (
    <div
      className={`Header-Container ${scrolled ? "Header-Container-Scrolled" : ""} ${
        isMainPage ? "Main-Page-Header" : "Other-Page-Header"
      }`}
    >
      <div id="Header-Inner-Container">
        <div id="Header-Icon">Tandanlaget</div>

        {/* Burger Menu Button */}
        {isMobile && (
          <div
          id="Burger-Menu"
          className={menuOpen ? "Open" : ""}
          onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        {/* Navigation */}
        <div id="Header-Pages-Container" className={menuOpen ? "Open" : "Closed"}>
          <Link to="/" className={scrolled ? "Scrolled-Link" : "Normal-Link"}>
            <h2>Hem</h2>
            {location.pathname === "/" && <span id="Underline"></span>}
          </Link>
          <Link to="/about-us" className={scrolled ? "Scrolled-Link" : "Normal-Link"}>
            <h2>Om oss</h2>
            {location.pathname === "/about-us" && <span id="Underline"></span>}
          </Link>
          <Link to="/contact" className={scrolled ? "Scrolled-Link" : "Normal-Link"}>
            <h2>Kontakt</h2>
            {location.pathname === "/contact" && <span id="Underline"></span>}
          </Link>
        </div>
      </div>
    </div>
  );
};