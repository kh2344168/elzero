import React from 'react';
import "./Header.css";
import megamenu from "../../imgs/megamenu.png";
import {FaRegComments} from "react-icons/fa";
import {AiOutlineUser} from "react-icons/ai";
import {FaRegBuilding} from "react-icons/fa";
import {HiOutlineMoon} from "react-icons/hi";
import {BsSun} from "react-icons/bs";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {FaRegClipboard} from "react-icons/fa";
import {FaRegCalendarAlt} from "react-icons/fa";
import {FaServer} from "react-icons/fa";
import {AiOutlinePlayCircle} from "react-icons/ai";
import {FcComboChart} from "react-icons/fc";
import {BsPercent} from "react-icons/bs";
import { useEffect, useState ,useContext } from "react";
import {ProductContext} from "../../App";
import {langContext} from "../../App";
// import langungchan from "./img/Google_Translate_logo.svg.webp"




const Header = () => {

  const [showMegamenu, setshowMegamenu] = useState(false);
  const [heserfixed, setsheserfixed] = useState("relative");
  const [moon, setmoon] = useState("moon");
  const [showfunbtm, setshowfunbtm] = useState("0");

  // useEffect(() => {
    window.addEventListener("scroll", () => {
          setshowMegamenu(false);

          if(window.pageYOffset > 100){
            setsheserfixed("fixed")
          }else{
            setsheserfixed("relative")
          }
    });
    // }, []);
    const showMeg = () => {
      if (showMegamenu == false) {
        setshowMegamenu(true);
      } else {
        setshowMegamenu(false);
      }

    };
    
    const data = useContext(ProductContext)
    const lang = useContext(langContext)

    function moonbuttom(){
      if(moon=="moon"){
        setmoon("sun");
      }else{
        setmoon("moon");
      }
    }

    function onshowfunbtm(){
      if(showfunbtm=="showfunbtm"){
        setshowfunbtm("0");
      }else{
        setshowfunbtm("showfunbtm");
      }
    }


  return (

    <div className={"header " + data.dark} id="header" style={{position :heserfixed}} >
        <div class="container">
            <a href="#" className='logo'>{lang.i("logo")}</a>
            <ul class="main-nav">
                <li className='changelang'>
                  {lang.i18ne.language === "en" ?
                      <button className='ar' onClick={()=>{lang.changeLangar()} }  >
                      AR
                    </button> :
                    <button className='en' onClick={()=>{lang.changeLangen()} }  >
                      EN
                    </button>
                  }
     
                </li>
                <li className='darkmood'>
                  <button className={"dark_mode " + moon} onClick={()=>{
                    data.toggle()
                    moonbuttom()
                  } }  >
                  <HiOutlineMoon className='moon'/>
                  <BsSun  className='sun'/>
                </button></li>
                <li><a href="#articles">{lang.i("Articles")}</a></li>
                <li><a href="#gallery">{lang.i("Features")}</a></li>
                <li><a href="#features">{lang.i("Gallery")}</a></li>
                <li  onClick={showMeg} >
                  <a  >{lang.i("Other Links")}</a>
{/* ===========================Start Megamenu=============================== */}
{showMegamenu == true? 
                <div class="mega-menu">
                  <div class="image">
                    <img src={megamenu} alt="" />
                  </div>
                  <ul class="links">
                    <li>
                      <a href="#testimonials"><FaRegComments className="icon"/> Testimonials</a>
                    </li>
                    <li>
                      <a href="#team"><AiOutlineUser className="icon"/> Team Members</a>
                    </li>
                    <li>
                      <a href="#services"><FaRegBuilding className="icon"/> Services</a>
                    </li>
                    <li>
                      <a href="#our-skills"><AiOutlineCheckCircle className="icon"/> Our Skills</a>
                    </li>
                    <li>
                      <a href="#work-steps"><FaRegClipboard className="icon"/> How It Works</a>
                    </li>
                  </ul>
                  <ul class="links">
                    <li>
                      <a href="#events"><FaRegCalendarAlt className="icon"/> Events</a>
                    </li>
                    <li>
                      <a href="#pricing"><FaServer className="icon"/> Pricing Plans</a>
                    </li>
                    <li>
                      <a href="#video"><AiOutlinePlayCircle className="icon"/> Top Videos</a>
                    </li>
                    <li>
                      <a href="#stats"><FcComboChart className="icon"/> Stats</a>
                    </li>
                    <li>
                      <a href="#discount"><BsPercent className="icon"/> Request A Discount</a>
                    </li>
                  </ul>
                </div>:"" }
{/*======================= End Megamenu ============================= */}
            </li>
            </ul>
        </div>
              <div className={"funbtm " + showfunbtm}>
              {lang.i18ne.language === "en" ?
                      <button className='ar' onClick={()=>{lang.changeLangar()} }  >
                      AR
                    </button> :
                    <button className='en' onClick={()=>{lang.changeLangen()} }  >
                      EN
                    </button>
                  }
                  <button className={"dark_mode " + moon} onClick={()=>{
                    data.toggle()
                    moonbuttom()
                  } }  >
                  <HiOutlineMoon className='moon'/>
                  <BsSun  className='sun'/>
                </button>
                <button onClick={onshowfunbtm}  className='show '><i class="fa-solid fa-gear"></i></button>
              </div>

    </div>
  )
}

export default Header