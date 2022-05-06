import React from 'react';
import './App.css';
import Header from './componanet/Header/Header';
import Landing from './componanet/Landing/Landing';
import Articles from './componanet/Articles/Articles';
import Gallery from './componanet/Gallery/Gallery';
import Features from './componanet/Features/Features';
import Testimonials from './componanet/Testimonials/Testimonials';
import Team from './componanet/Team/Team';
import Services from './componanet/Services/Services';
import Skills from './componanet/Skills/Skills';
import WorkSteps from './componanet/WorkSteps/WorkSteps';
import Events from './componanet/Events/Events';
import Pricing from './componanet/Pricing/Pricing';
import Video from './componanet/Video/Video';
import Stats from './componanet/Stats/Stats';
import Discount from './componanet/Discount/Discount';
import Footer from './componanet/Footer/Footer';
import Topbutton from './componanet/Topbutton/Topbutton';
import { useState, createContext, useContext } from "react";
import { useTranslation } from 'react-i18next';

export const ProductContext = createContext();
export const langContext = createContext();


function App() {
  const [dark , setdark] =  useState("light")

  function toggle(){
    if(dark=="dark"){
      setdark("light");
    }else{
      setdark("dark");
    }
  }


const [i , i18ne] = useTranslation()
const [right , setright] =  useState(" left")

  function changeLangar(){
      i18ne.changeLanguage("ar")
      setright(" right")
  }

  function changeLangen(){
      i18ne.changeLanguage("en")
      setright(" left")
  }


  return (
    <div className={"App " + dark + right}>
      <ProductContext.Provider value={{dark , toggle}} >
        <langContext.Provider value={{i , i18ne , changeLangar , changeLangen , right }} >
        <Header/>
        <Landing/>
        <Articles/>
        <Gallery/>
        <Features/>
        <Testimonials/>
        <Team/>
        <Services/>
        <Skills/>
        <WorkSteps/>
        <Events/>
        <Pricing/>
        <Video/>
        <Stats/>
        <Discount/>
        <Footer/>
        <Topbutton/>
        </langContext.Provider>
      </ProductContext.Provider>
      </div>
  );
}

export default App;
