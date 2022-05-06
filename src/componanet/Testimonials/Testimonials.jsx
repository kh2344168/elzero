import React from 'react';
import "./Testimonials.css";
import {AiFillStar} from "react-icons/ai" 
import {AiOutlineStar} from "react-icons/ai" 
import avatar1 from "../../imgs/avatar-01.png";
import avatar2 from "../../imgs/avatar-02.png";
import avatar3 from "../../imgs/avatar-03.png";
import avatar4 from "../../imgs/avatar-04.png";
import avatar5 from "../../imgs/avatar-05.png";
import avatar6 from "../../imgs/avatar-06.png";
import { useContext } from 'react';
import {ProductContext} from "../../App"
import { motion } from 'framer-motion';
import {langContext} from "../../App"


const Testimonials = () => {

  const data = useContext(ProductContext);


  const datatestmo = [
    {
      id:1,
      img:avatar1,
      rate: <div class="rate">
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiOutlineStar className='icon'/>
      </div>
    },
    {
      id:2,
      img:avatar2,
      rate: <div class="rate">
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiOutlineStar className='icon'/>
      </div>
    },
    {
      id:3,
      img:avatar3,
      rate: <div class="rate">
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiOutlineStar className='icon'/>
      <AiOutlineStar className='icon'/>
      </div>
    },
    {
      id:4,
      img:avatar4,
      rate: <div class="rate">
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiOutlineStar className='icon'/>
      </div>
    },
    {
      id:5,
      img:avatar5,
      rate: <div class="rate">
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiOutlineStar className='icon'/>
      <AiOutlineStar className='icon'/>
      </div>
    },
    {
      id:6,
      img:avatar6,
      rate: <div class="rate">
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiFillStar className="active_icon" />
      <AiOutlineStar className='icon'/>
      </div>
    },
  ]
  const lang = useContext(langContext)


  const transition = {
    duration: 1,
  
  };
  return (
    <motion.div
      initial={{ scale: .1 , opacity:0  }}
      whileInView={{scale: 1 ,opacity:1   }}
      transition={transition}
    class={"testimonials " + data.dark + lang.right} id="testimonials">
      <h2 class="main-title">{lang.i("testimonials")}</h2>
      <div class="container">
        {datatestmo.map(({id , img, rate})=>{
        return(
          <div key={id} class="box">
          <img src={img} alt="" />
          <h3>{lang.i("t_name")}</h3>
          <span class="title">{lang.i("t_skile")}</span>
          {rate}
          <p>
          {lang.i("t_pr")}
          </p>
        </div>
          )
        })
        }
        </div>
    </motion.div>
  )
}

export default Testimonials