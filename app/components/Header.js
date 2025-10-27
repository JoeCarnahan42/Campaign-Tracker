"use client";

import Link from "next/link";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useView } from "../context/ViewContext";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const { currentView, changeView } = useView();

  const navLinks = [
    { name: "Home", view: "Home" },
    { name: "Journal", view: "Journal" },
    { name: "Characters", view: "Characters" },
    { name: "World Info", view: "World Info" },
    { name: "Map", view: "Map" },
  ];

  const currentBook = "Hoard of the Dragon Queen"; // Static admin-only display

  return (
    <header className="position-relative">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm position-relative">
        <div className="container-fluid">
          {/* Left: Logo */}
          <Link className="navbar-brand fw-bold fs-4" href="/">
            🧭 The Campaign Chronicle
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Right: Navigation Links */}
          <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.name}>
                  <button
                    className={`nav-link btn btn-link ${
                      currentView === link.view ? "active fw-semibold" : ""
                    }`}
                    onClick={() => changeView(link.view)}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
