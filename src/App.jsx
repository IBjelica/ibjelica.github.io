import { useState, useEffect } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/App.css'
import Trailer from './components/Trailer'
import Letter from './components/Letter'
import DotsLink from "./components/DotsLink"

function App() {
  
  return (
    <>
      <div className="group/screen w-screen h-screen p-4 flex flex-col justify-between">
//Todo: height for smaller screens
        <div className="row max-w-full h-[min(25vh,_14vw)] flex justify-start align-baseline gap-7">
          <Letter
            char="n"
          />
          <Letter
            char="o"
          />
          <Letter
            char="t"
          />
          <Letter
            char="h"
          />
          <Letter
            char="i"
          />
          <Letter
            char="n"
          />
          <Letter
            char="g"
          />
        </div>

        <div className="row max-w-full h-[min(25vh,_14vw)] flex justify-start align-baseline gap-7">
          <Letter
            char="t"
          />
          <Letter
            char="o"
          />

          <Letter
            char=" "//Todo: hidden link to portfolio
          />
          
          <Letter
            char="s"
          />
          <Letter
            char="e"
          />
          <Letter
            char="e"
          />
        </div>

        <div className="row max-w-full h-[min(25vh,_14vw)] flex justify-start align-baseline gap-7">
          <Letter
            char="h"
          />
          <Letter
            char="e"
          />
          <Letter
            char="r"
          />
          <Letter
            char="e"
          />
        </div>
        
        <DotsLink />

        <Trailer/>
      </div>
    </>
  )
}

export default App
