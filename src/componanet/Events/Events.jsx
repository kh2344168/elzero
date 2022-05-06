import React from 'react';
import { useEffect, useState,useContext } from "react";
import "./Events.css";
import events from "../../imgs/events.png";
import {langContext} from "../../App"

const Events = () => {

  const [days, setdays] = useState("");
  const [hours, sethours] = useState("");
  const [minutes, setminutes] = useState("");
  const [seconds, setseconds] = useState("");
  


  let countDownDate = new Date("Dec 30, 2022 23:59:59").getTime();

  const counter = setInterval(() => {
    // Get Date Now
    const dateNow = new Date().getTime();
  
    // Find The Date Difference Between Now And Countdown Date
    const dateDiff = countDownDate - dateNow;
  
    // Get Time Units
    setdays(Math.floor(dateDiff / (1000 * 60 * 60 * 24)))
    sethours(Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setminutes(Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)))
    setseconds(Math.floor((dateDiff % (1000 * 60)) / 1000))
  },1000)


  const lang = useContext(langContext)



  return (
    <div className={"events" + lang.right} id="events">
    <div className="dots dots-up"></div>
    <div className="dots dots-down"></div>
    <h2 className="main-title">{lang.i("latest_events")}</h2>
    <div className="container">
      <img src={events} alt="" />
      <div className="info">
        <div className="time">
          <div className="unit">
            <span>{days}</span>
            <span>{lang.i("days")}</span>
          </div>
          <div className="unit">
            <span>{hours}</span>
            <span>{lang.i("Hours")}</span>
          </div>
          <div className="unit">
            <span>{minutes}</span>
            <span>{lang.i("Minutes")}</span>
          </div>
          <div className="unit">
            <span>{seconds}</span>
            <span>{lang.i("Seconds")}</span>
          </div>
        </div>
        <h2 className="title">{lang.i("tme")}</h2>
        <p className="description">
        {lang.i("la_pr")}
        </p>
      </div>
      <div className="subscribe">
        <form action="">
          <input type="email" placeholder="Enter Your Email" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  </div>
  )
}

export default Events