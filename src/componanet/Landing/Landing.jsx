import React ,{useContext} from 'react';
import "./Landing.css";
import laindingimg from "../../imgs/landing-image.png"
import {FaAngleDoubleDown} from "react-icons/fa"
import {ProductContext} from "../../App"
import {langContext} from "../../App"
const Landing = () => {
    const data = useContext(ProductContext)
    const lang = useContext(langContext)


return (
<div class={"landing " + data.dark + lang.right }>
    <div class="container">
        <div class="text">
            <h1>{lang.i("l_title")}</h1>
            <p>{lang.i("l_pr")}</p>
        </div>
        <div class="image">
            <img src={laindingimg} alt="" />
        </div>
    </div>
        <a href="#articles" class="go-down">
        < FaAngleDoubleDown className='icon' />
    </a>
</div>
)
}

export default Landing