import React from 'react';
import "./Skills.css";
import skills from "../../imgs/skills.png"
import { motion } from "framer-motion"
import { useContext } from 'react';
import {langContext} from "../../App"


const Skills = () => {
  
const transition = {
  duration: 5,
  type: "spring",
};

  const lang = useContext(langContext)

  return (
    <div class={"our-skills" + lang.right} id="our-skills">
    <h2 class="main-title">{lang.i("our_skills")}</h2>
    <div class="container">
      <img src={skills} alt="" />
      <div class="skills">
        <div class="skill">
          <h3>HTML <span>80%</span></h3>
          <div class="the-progress">
            <motion.span  
              initial={{ width :"0" }}
              whileInView={{ width :"80%"   }}
              transition={transition} style={{width: "0%"}}>
            </motion.span>
          </div>
        </div>
        <div class="skill">
          <h3>CSS <span>70%</span></h3>
          <div class="the-progress">
          <motion.span  
              initial={{ width :"0" }}
              whileInView={{ width :"70%"   }}
              transition={transition} style={{width: "0%"}}>
            </motion.span>          </div>
        </div>
        <div class="skill">
          <h3>JavaScript <span>90%</span></h3>
          <div class="the-progress">
          <motion.span  
              initial={{ width :"0" }}
              whileInView={{ width :"90%"   }}
              transition={transition} style={{width: "0%"}}>
            </motion.span>
          </div>
        </div>
        <div class="skill">
          <h3>Python <span>50%</span></h3>
          <div class="the-progress">
          <motion.span  
              initial={{ width :"0" }}
              whileInView={{ width :"50%"   }}
              transition={transition} style={{width: "0%"}}>
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Skills