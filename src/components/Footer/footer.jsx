import React from "react";
import "./footer.css";
import "./footer.scss";
import video2 from "../../assets/lac-67201.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import {FiChevronRight} from 'react-icons/fi'

import Aos  from "aos";
import 'aos/dist/aos.css' 
import { useEffect } from "react";

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent conatiner">
        <div data-aos="fade-up" className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND <FiSend />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div data-aos="fade-up" className="footerInfo flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore /> Travel
              </a>
            </div>

            <div className="footerPargarph">
                Choose your tourist trip with Travel
            </div>

            <div className="footerSocails">
              <AiOutlineTwitter className="icon" />
              <FiFacebook className="icon" />
              <AiOutlineInstagram className="icon" />
              <SiTripadvisor className="icon" />
            </div>
          </div>

          <div data-aos="fade-up" className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Services
              </li>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Insurance
              </li>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Agency
              </li>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Tourism
              </li>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Payment
              </li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 London
              </li>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Paris
              </li>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 California
              </li>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Oran
              </li>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Tamenrasset
              </li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">PARTINERS</span>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Booking
              </li>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Rentricos
              </li>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Hostworld
              </li>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Tourism
              </li>
              <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Payment
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
