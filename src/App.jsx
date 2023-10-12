import { useState, useEffect } from 'react'
import './App.css'
import Trailer from './components/Trailer'
import Letter from './components/Letter'

function App() {
  
  return (
    <>
      <div className="group/screen w-screen h-screen p-4 flex flex-col justify-between">

        <div className="row max-w-full h-[25%] flex justify-start align-baseline gap-7">
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

        <div className="row max-w-full h-[25%] flex justify-start align-baseline gap-7">
          <Letter
            char="t"
          />
          <Letter
            char="o"
          />

          <Letter
            char=" "
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

        <div className="row max-w-full h-[25%] flex justify-start align-baseline gap-7">
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
        
        <a className='fixed bottom-[16px] right-[16px]' href='#'>
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
            <circle cx="7.13543" cy="7.13518" r="7.13543" fill="#495199"/>
            <circle cx="7.13543" cy="24.4997" r="7.13543" fill="#495199"/>
            <circle cx="7.13543" cy="41.8642" r="7.13543" fill="#495199"/>
            <circle cx="24.4997" cy="7.13518" r="7.13543" fill="#495199"/>
            <circle cx="24.4997" cy="24.4997" r="7.13543" fill="#495199"/>
            <circle cx="24.4997" cy="41.8642" r="7.13543" fill="#495199"/>
            <circle cx="41.8644" cy="7.13518" r="7.13543" fill="#495199"/>
            <circle cx="41.8644" cy="24.4997" r="7.13543" fill="#495199"/>
            <circle cx="41.8644" cy="41.8642" r="7.13543" fill="#495199"/>
          </svg>
        </a>

        <Trailer/>
      </div>
    </>
  )
}

export default App
