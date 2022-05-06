import React,{useContext ,useEffect} from 'react';
import "./Articles.css";
import img1 from "../../imgs/cat-01.jpg";
import img2 from "../../imgs/cat-02.jpg";
import img3 from "../../imgs/cat-03.jpg";
import img4 from "../../imgs/cat-04.jpg";
import img5 from "../../imgs/cat-05.jpg";
import img6 from "../../imgs/cat-06.jpg";
import img7 from "../../imgs/cat-07.jpg";
import img8 from "../../imgs/cat-08.jpg";

import {ProductContext} from "../../App"
import {FaLongArrowAltRight} from "react-icons/fa"
import { motion } from "framer-motion" 
import {useInView} from "react-intersection-observer";
import {langContext} from "../../App"



const Articles = () => {
  const [ref, inView] = useInView()

  const data = useContext(ProductContext);
  const lang = useContext(langContext);



  const articlesdata=[
    {
      id:1,
      img:img1,
    },
    {
      id:2,
      img:img2,
    },
    {
      id:3,
      img:img3,
    },
    {
      id:4,
      img:img4,
    },
    {
      id:5,
      img:img5,
    },
    {
      id:6,
      img:img6,
    },
    {
      id:7,
      img:img7,
    },
    {
      id:8,
      img:img8,
    },
  ]
  const transition = {
    duration: 1,
  
  };

  return (
    <>    <div className={"articles " + data.dark + lang.right} id="articles">
    <h2 className="main-title">{lang.i("articles")}</h2>
    <div className="container">
      {
        articlesdata.map(({id , img})=>{
          return(
            <motion.div 
            initial={{ scale: .1 , opacity:0  }}
            whileInView={{scale: 1 ,opacity:1   }}
            transition={transition}   
              key={id} className="box">
              <img src={img} alt="" />
              <div className="content">
                <h3>{lang.i("ar_title")}</h3>
                <p>{lang.i("ar_pr")}</p>
              </div>
              <div className="info">
                <a href="">{lang.i("ar_read")}</a>
                <FaLongArrowAltRight className='icon' />
              </div>
            </motion.div>
          )
        })
        
      }
    </div>
    </div>
    <div className={"spikes " + data.dark }></div>
   {/* ========================End Articles==========================  */}
</>
)
}

export default Articles