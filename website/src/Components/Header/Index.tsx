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
      setScrolled(window.scrollY > 90);
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
      className={`${
        scrolled ? "Header-Container-Scrolled" : "Header-Container"
      } ${isMainPage ? "Main-Page-Header" : "Other-Page-Header"}`}
    >
      <div id="Header-Inner-Container">
        <div id="Header-Icon">Tandanlaget</div>

        {/* Burger Menu Button */}
        {isMobile && (
          <div
            id="Burger-Menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </div>
        )}

        {/* Navigation */}
        <div
          id="Header-Pages-Container"
          style={{ display: isMobile ? (menuOpen ? "block" : "none") : "flex" }}
        >
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