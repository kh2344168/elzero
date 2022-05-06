import React from 'react';
import "./Services.css";
import {FaUserShield} from "react-icons/fa";
import {FaTools} from "react-icons/fa";
import {FaMapMarkedAlt} from "react-icons/fa";
import {FaLaptopCode} from "react-icons/fa";
import {IoIosColorPalette} from "react-icons/io";
import {FaBullhorn} from "react-icons/fa";
import { useContext } from 'react';
import {ProductContext} from "../../App"
import {langContext} from "../../App"
const Services = () => {
  const dataDark = useContext(ProductContext);
  const lang = useContext(langContext)

  const data=[
    {
      id:1,
      icon: <FaUserShield className="icon" />,
      h3 :lang.i("s_one"),
    },
    {
      id:2,
      icon: <FaTools className="icon" />,
      h3 :lang.i("s_two"),
    },
    {
      id:3,
      icon: <FaMapMarkedAlt className="icon" />,
      h3 :lang.i("s_three"),
    },
    {
      id:4,
      icon: <FaLaptopCode className="icon" />,
      h3 :lang.i("s_four"),
    },
    {
      id:5,
      icon: <IoIosColorPalette className="icon" />,
      h3 :lang.i("s_five"),

    },
    {
      id:6,
      icon: <FaBullhorn className="icon" />,
      h3 :lang.i("s_sex"),
    },
  ]


  return (
    <div class={"services " + dataDark.dark + lang.right} id="services">
      <h2 class="main-title">{lang.i("services")}</h2>
      <div class="container">
        {data.map(({id ,h3 ,icon})=>{
          return(
            <div key={id} class="box">
            {icon}
            <h3>{h3}</h3>
            <div class="info">
              <a href="#">{lang.i("details")}</a>
            </div>
          </div>
          )
        })}

      </div>
    </div>
  )
}

export default Services