import React from 'react';
import "./Gallery.css";
import galler1 from "../../imgs/gallery-01.png"
import galler2 from "../../imgs/gallery-02.png"
import galler3 from "../../imgs/gallery-03.jpg"
import galler4 from "../../imgs/gallery-04.png"
import galler5 from "../../imgs/gallery-05.jpg"
import galler6 from "../../imgs/gallery-06.png"
import { motion } from "framer-motion";
import { useContext } from 'react';
import {ProductContext} from "../../App"


const Gallery = () => {

  const data = useContext(ProductContext);

  const transition = {
    duration: 5,
    type: "spring",
  };

  const galleryData = [
    {
      id:1,
      img:galler1, 
    },
    {
      id:2,
      img:galler2,
    },
    {
      id:3,
      img:galler3,
    },
    {
      id:4,
      img:galler4,
    },
    {
      id:5,
      img:galler5,
    },
    {
      id:6,
      img:galler6,
    },
  ]



  return (
    // ========================= Start Gallery =======================
    <div className={"gallery " + data.dark} id="gallery">
      <h2 className="main-title">Gallery</h2>
      <div className="container">
        {galleryData.map(({id ,img })=>{
          return(
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity : 1}}
            transition={{duration: 1}}
            key={id}
            className="box">
            <div className="image">
              <img src={img} alt="" />
            </div>
          </motion.div>
          )
        })}
      </div>
    </div>
    // ======================= End Gallery===================================
  )
}

export default Gallery