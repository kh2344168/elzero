import React from 'react';
import "./WorkSteps.css";
import work from  "../../imgs/work-steps.png";
import work1 from  "../../imgs/work-steps-1.png";
import work2 from  "../../imgs/work-steps-2.png";
import work3 from  "../../imgs/work-steps-3.png";
import { useContext } from 'react';
import {ProductContext} from "../../App";
import {langContext} from "../../App"


const WorkSteps = () => {
  const data = useContext(ProductContext);
  const lang = useContext(langContext)

  return (
    <div className={"work-steps " + data.dark + lang.right} id="work-steps">
      <h2 className="main-title">{lang.i("hw")}</h2>
      <div className="container">
        <img src={work} alt="" className="image" />
        <div className="info">
          <div className="box">
            <img src={work1} alt="" />
            <div className="text">
              <h3>{lang.i("hw_one")}</h3>
              <p>
              {lang.i("la_pr")}
              </p>
            </div>
          </div>
          <div className="box">
            <img src={work2} alt="" />
            <div className="text">
              <h3>{lang.i("hw_two")}</h3>
              <p>
                {lang.i("la_pr")}
              </p>
            </div>
          </div>
          <div className="box">
            <img src={work3} alt="" />
            <div className="text">
              <h3>{lang.i("hw_three")}</h3>
              <p>
                {lang.i("la_pr")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkSteps