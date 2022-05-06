import React from 'react'
import { useRef, useEffect , useState } from "react";
import {useInView} from "react-intersection-observer";
import "./Stats.css"
import { useContext } from 'react';
import {ProductContext} from "../../App"
import CountUp from 'react-countup';
const Stats = () => {
  const data = useContext(ProductContext);
  const [countone , setcountone] = useState(0);
  const [counttow , setcounttow] = useState(0);
  const [countthree , setcountthree] = useState(0);
  const [countfour , setcountfour] = useState(0);
  const [ref, inView] = useInView()

  useEffect(()=>{
    console.log("this is " + inView)

    if(inView == true){
      setcountone(300)
      setcounttow(400)
      setcountthree(12)
      setcountfour(500)
    }else{
       setcountone(0)
       setcounttow(0)
       setcountthree(0)
       setcountfour(0)
    }
  })



  return (
    <div  ref={ref}  className={"stats " + data.dark } id="stats">
      <h2>Our Awesome Stats</h2>
      <div className="container">
        <div  className="box">
          <i className="far fa-user fa-2x fa-fw"></i>
          <span className="number"><CountUp end={countone}/></span>
          <span className="text">Clients</span>
        </div>
        <div className="box">
          <i className="fas fa-code fa-2x fa-fw"></i>
          <span className="number"><CountUp end={counttow}/></span>
          <span className="text">Projects</span>
        </div>
        <div className="box">
          <i className="fas fa-globe-asia fa-2x fa-fw"></i>
          <span className="number"><CountUp end={countthree}/></span>
          <span className="text">Countries</span>
        </div>
        <div className="box">
          <i className="far fa-money-bill-alt fa-2x fa-fw"></i>
          <span className="number"><CountUp end={countfour} suffix="K" /></span>
          <span className="text">Money</span>
        </div>
      </div>
    </div>
  )
}

export default Stats