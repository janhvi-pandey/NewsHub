import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg`}
        style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)' }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/world"
            style={{ fontWeight: "bolder", color: '#111' }}
          >
            NewsHub
          </Link>
          <div className="d-none d-lg-flex flex-grow-1"> 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontWeight: "500", color: '#111' }}>
             
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/education">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tourism">
                  Tourism
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="form-check form-switch"
            style={{ color: props.mode === "light" ? "#111" : "#fff", fontWeight: "600" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
              checked={props.mode === "dark"}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ fontWeight: "600", color: '#111' }}
            >
              Enable {props.mode === "light" ? "dark" : "light"} mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
