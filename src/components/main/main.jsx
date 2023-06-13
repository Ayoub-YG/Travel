import React from "react";
import "./main.css";
import "./main.scss"
import { HiOutlineLocationMarker } from "react-icons/hi";
import {HiOutlineClipboardCheck} from 'react-icons/hi';
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/new wrok (1).jpg';
import img4 from '../../assets/paris.jpg'
import img5 from '../../assets/Oran.jpg'
import img6 from '../../assets/Tamanerasset.jpg'
import img7 from '../../assets/casa.jpg'
import img8 from '../../assets/dubai.jpg'

import Aos  from "aos";
import 'aos/dist/aos.css' 
import { useEffect } from "react";



const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bara Bora",
    location: "New Zerland",
    grad: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of remance, Bara Bora is one of the best travel destination in the world, This place is know for its luxurious stays and advanturous activaties",
      rank: "7"
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "London",
    location: "England",
    grad: "CULTURAL RELAX",
    fees: "$900",
    description:
      "is a dynamic and diverse metropolis that seamlessly blends history, culture, and modernity. With its iconic landmarks, world-class museums, bustling markets, and vibrant neighborhoods, London offers a wealth of experiences for tourists",
      rank: "5"
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "New Work",
    location: "USA",
    grad: "CULTURAL RELAX",
    fees: "$850",
    description:
      "New York City, often referred to as the 'Big Apple ', is one of the most vibrant and iconic destinations in the United States. It is a global center for finance, fashion, art, and entertainment, attracting millions of visitors each year",
      rank: "6"
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Paris",
    location: "France",
    grad: "CULTURAL RELAX",
    fees: "$950",
    description:
      "city that embodies beauty, culture, and romance. Its iconic landmarks, world-class museums, exquisite cuisine, and vibrant neighborhoods make it a captivating destination for tourists from around the world.",
      rank: "4"
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Oran",
    location: "Algeria",
    grad: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Oran is known for its beautiful coastal location, with sandy beaches and a pleasant Mediterranean climate. The city is characterized by a mix of modern infrastructure and historic architecture, reflecting its rich history and cultural heritage. It has a population of over 1 million people and is a vibrant and bustling metropolis.",
      rank: "3"
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Tamenrasset",
    location: "Algeria",
    grad: "CULTURAL RELAX",
    fees: "$480",
    description:
      " Tamanrasset is a destination that allows travelers to immerse themselves in the mystique of the Sahara Desert, experience the rich Tuareg culture, and appreciate the raw beauty of Algeria's southern region.",
      rank: "1"
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "CasaBlanca",
    location: "Moroco",
    grad: "CULTURAL RELAX",
    fees: "$240",
    description:
      "Casablanca is known for its vibrant atmosphere, cosmopolitan lifestyle, and stunning architectural landmarks. The city boasts a mix of modern skyscrapers, colonial-era buildings, and traditional Moroccan architecture, creating a unique urban landscape. The Hassan II Mosque, one of the largest mosques in the world, is a remarkable sight with its intricate details and stunning oceanfront location. ",
    rank: "2"
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Dubai",
    location: "Emarat",
    grad: "CULTURAL RELAX",
    fees: "$1000",
    description:
      "city of superlatives, where futuristic skyscrapers stand against the backdrop of the Arabian Desert. It has gained worldwide recognition for its stunning architectural wonders, such as the Burj Khalifa, the tallest building in the world. Visitors can ride the elevator to the observation deck on the 148th floor for breathtaking panoramic views of the city.",
      rank: "5"
  },
  
];
const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map((dest) => (
          <div data-aos="fade-up" className="singleCard" key={dest.id}>
            <div className="imgDiv">
              <img  src={dest.imgSrc} alt={dest.destTitle} />
            </div>
            <div className="cardInfo">
              <h4 className="desTitle">{dest.destTitle} </h4>

              <span className="conteint flex">
                <HiOutlineLocationMarker className="icon" />
                <span className="name">{dest.location} </span>
              </span>

              <div className="fees flex">
                 <div className="grade">
                    <span>{dest.grad} <small>+{dest.rank}</small></span> 
                 </div>
                 <div className="price">
                  <h5> {dest.fees}</h5> 
                 </div>
              </div>

              <div className="description">
                <p>{dest.description}</p>
              </div>

              <button className="btn flex">
                    <h3>DETAILS</h3> <HiOutlineClipboardCheck className='icon' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
