import React from "react";
import "./home.css";
import "./home.scss";
import video from "../../assets/lac-67201.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos  from "aos";
import 'aos/dist/aos.css' 
import { useEffect } from "react";



const Home = () => {

   // animations
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">Our Package</span>
          <h1 data-aos="fade-up" className="Hometitle">Search your holiday</h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name her .." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="city">Select your day</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">max Price :</label>
              <h3 className="total">$50000</h3>
            </div>
            <div className="input flex">
              <input type="range" max={50000} min={10000} />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter />
            <span>MORE FILTRE</span>
          </div>
        </div>

        <div data-aos="fade-up" className="IconSocial flex">
          <div className="rightIcon">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <SiTripadvisor className="icon" />
          </div>

          <div className="leftIcon">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
