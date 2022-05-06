import React from 'react';
import "./Features.css";
import features1 from "../../imgs/features-02.jpg";
import features2 from "../../imgs/features-02.jpg";
import features3 from "../../imgs/features-03.jpg";
import { useContext ,useEffect ,useState} from 'react';
import {ProductContext} from "../../App"
import {useInView} from "react-intersection-observer";
import {langContext} from "../../App"



const Features = () => {
const data = useContext(ProductContext)

const [ref, inView] = useInView()

const [animation , setanimation] = useState("")

useEffect(()=>{
  if(inView == true){
    setanimation(" animation")
  }else{
    setanimation("")
  }
})
const lang = useContext(langContext)



  return (
    <div ref={ref
    } className={"features " + data.dark + animation + lang.right } id="features">
    <h2 className="main-title">{lang.i("features")}</h2>
    <div className="container">
    <div
    className="box quality right">
        <div className="img-holder"><img src={features1} alt="" /></div>
        <h2>{lang.i("f_title_1")}</h2>
        <p>{lang.i("f_pr")}</p>
        <a href="#">{lang.i("f_more")}</a>
      </div>
      <div className="box time">
        <div className="img-holder"><img src={features2} alt="" /></div>
        <h2>{lang.i("f_title_2")}</h2>
        <p>{lang.i("f_pr")}</p>
        <a href="#">{lang.i("f_more")}</a>
      </div>
      <div
        className="box passion left">
        <div className="img-holder"><img src={features3} alt="" /></div>
        <h2>{lang.i("f_title_3")}</h2>
        <p>{lang.i("f_pr")}</p>
        <a href="#">{lang.i("f_more")}</a>
    </div>
    </div>
    </div>
)
}

export default Features