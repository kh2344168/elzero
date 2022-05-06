import React from 'react';
import "./Footer.css"
import galler1 from "../../imgs/gallery-01.png"
import galler2 from "../../imgs/gallery-02.png"
import galler3 from "../../imgs/gallery-03.jpg"
import galler4 from "../../imgs/gallery-04.png"
import galler5 from "../../imgs/gallery-05.jpg"
import galler6 from "../../imgs/gallery-06.png"
const Footer = () => {
  return (
    <div class="footer">
    <div class="container">
      <div class="box">
        <h3>Elzero</h3>
        <ul class="social">
          <li>
            <a href="#" class="facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#" class="twitter">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" class="youtube">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
        <p class="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
        </p>
      </div>
      <div class="box">
        <ul class="links">
          <li><a href="#">Important Link 1</a></li>
          <li><a href="#">Important Link 2</a></li>
          <li><a href="#">Important Link 3</a></li>
          <li><a href="#">Important Link 4</a></li>
          <li><a href="#">Important Link 5</a></li>
        </ul>
      </div>
      <div class="box">
        <div class="line">
          <i class="fas fa-map-marker-alt fa-fw"></i>
          <div class="info">Egypt, Giza, Inside The Sphinx, Room Number 220</div>
        </div>
        <div class="line">
          <i class="far fa-clock fa-fw"></i>
          <div class="info">Business Hours: From 10:00 To 18:00</div>
        </div>
        <div class="line">
          <i class="fas fa-phone-volume fa-fw"></i>
          <div class="info">
            <span>+20123456789</span>
            <span>+20198765432</span>
          </div>
        </div>
      </div>
      <div class="box footer-gallery">
        <img src={galler1} alt="" />
        <img src={galler2} alt="" />
        <img src={galler3} alt="" />
        <img src={galler4} alt="" />
        <img src={galler5} alt="" />
        <img src={galler6} alt="" />
 
      </div>
    </div>
    <p class="copyright">Made With &lt;3 By Elzero</p>
  </div>
  )
}

export default Footer