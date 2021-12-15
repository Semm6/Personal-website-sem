import React from "react";
import { Component } from "react";
import "../Style/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <ul>
        <li>
          <a className="link" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="link" href="/about">
            About
          </a>
        </li>
        <li>
          <a className="link" href="/projects">
            Projects
          </a>
        </li>
        <li>
          <a className="link" href="/skills">
            Skills
          </a>
        </li>
        <li>
          <a className="link" href="/resume">
            Resume
          </a>
        </li>
      </ul>
    );
  }
}

export default Navbar;
