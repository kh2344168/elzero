import React from 'react';
import "./Team.css";

import {BsFacebook} from "react-icons/bs" ;
import {AiFillTwitterCircle} from "react-icons/ai" ;
import {AiFillLinkedin} from "react-icons/ai" ;
import {AiOutlineYoutube} from "react-icons/ai" ;

import team1 from "../../imgs/team-01.jpg";
import team2 from "../../imgs/team-02.jpg";
import team3 from "../../imgs/team-03.jpg";
import team4 from "../../imgs/team-04.jpg";
import team5 from "../../imgs/team-05.png";
import team6 from "../../imgs/team-06.png";
import team7 from "../../imgs/team-07.jpg";
import team8 from "../../imgs/team-08.jpg";
import { useContext } from 'react';
import {ProductContext} from "../../App"
import { motion } from 'framer-motion';
import {langContext} from "../../App"


const Team = () => {
  const dataDark = useContext(ProductContext);
    const data=[
        {
          id :1,
          photo : team1
        },
        {
          id :2,
          photo : team2
        },
        {
          id :3,
          photo : team3
        },
        {
          id :4,
          photo : team4
        },
        {
          id :5,
          photo : team5
        },
        {
          id :6,
          photo : team6
        },
        {
          id :7,
          photo : team7
        },
        {
          id :8,
          photo : team8
        },
    ]
    const lang = useContext(langContext)

  return (
    <div class={"team " + dataDark.dark + lang.right} id="team">
      <h2 class="main-title">{lang.i("team_members")}</h2>
      <div class="container">
        {
          data.map(({id , photo})=>{
            return (
              <motion.div 
              initial={{ opacity:0  }}
              whileInView={{opacity:1   }}
              transition={{duration : 1 , delay :.5}}   
              
              key={id} class="box">
              <div class="data">
                <img src={photo} alt="" />
                <div class="social">
                  <a href="#">
                    <BsFacebook className='icon'/>
                  </a>
                  <a href="#">
                    <AiFillTwitterCircle className='icon'/>
                  </a>
                  <a href="#">
                    <AiFillLinkedin className='icon'/>
                  </a>
                  <a href="#">
                    <AiOutlineYoutube className='icon'/>
                  </a>
                </div>
              </div>
              <div class="info">
                <h3>{lang.i("tm_name")}</h3>
                <p>{lang.i("tm_des")}</p>
              </div>
            </motion.div>
            )
          })
        }
      </div>
    </div>
    
  )
}

export default Team