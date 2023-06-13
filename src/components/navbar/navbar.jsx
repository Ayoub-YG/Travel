import React from "react";
import "./navbar.css";
import "./navbar.scss";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState('navbar')
  const shownav = ()=>{
       setActive('navbar navbarActive')
  }
  const removenav = () => {
    setActive ('navbar')
  }
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logo flex">
          <a href="#">
            <h1>
              <MdTravelExplore className="iconLogo" /> Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="NavLinks">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="NavLinks">
                Package
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="NavLinks">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="NavLinks">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="NavLinks">
                Pages
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removenav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={shownav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
