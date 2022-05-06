import React from 'react';
import "./Pricing.css";
import { useContext } from 'react';
import {ProductContext} from "../../App"

const Pricing = () => {
  const data = useContext(ProductContext);

  return (
    <div className={"pricing " + data.dark} id="pricing">
    <div className="dots dots-up"></div>
    <div className="dots dots-down"></div>
    <h2 className="main-title">Pricing Plans</h2>
    <div className="container">
      <div className="box">
        <div className="title">Basic</div>
        <img src="imgs/hosting-basic.png" alt="" />
        <div className="price">
          <span className="amount">$15</span>
          <span className="time">Per Month</span>
        </div>
        <ul>
          <li>10GB HDD Space</li>
          <li>5 Email Addresses</li>
          <li>2 Subdomains</li>
          <li>4 Databases</li>
          <li>Basic Support</li>
        </ul>
        <a href="#">Choose Plan</a>
      </div>
      <div className="box popular">
        <div className="label">Most Popular</div>
        <div className="title">Advanced</div>
        <img src="imgs/hosting-advanced.png" alt="" />
        <div className="price">
          <span className="amount">$25</span>
          <span className="time">Per Month</span>
        </div>
        <ul>
          <li>20GB HDD Space</li>
          <li>10 Email Addresses</li>
          <li>5 Subdomains</li>
          <li>8 Databases</li>
          <li>Advanced Support</li>
        </ul>
        <a href="#">Choose Plan</a>
      </div>
      <div className="box">
        <div className="title">Professional</div>
        <img src="imgs/hosting-professional.png" alt="" />
        <div className="price">
          <span className="amount">$45</span>
          <span className="time">Per Month</span>
        </div>
        <ul>
          <li>50GB HDD Space</li>
          <li>20 Email Addresses</li>
          <li>10 Subdomains</li>
          <li>20 Databases</li>
          <li>Professional Support</li>
        </ul>
        <a href="#">Choose Plan</a>
      </div>
    </div>
  </div>
  )
}

export default Pricing