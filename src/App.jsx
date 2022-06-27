import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import QuoteBox from "../src/Components/QuoteBox"

function App() {

  return(
    <div className='Container'>
      <div className='QuoteCard'>
        <QuoteBox />
      </div>
    </div>
  )
}

export default App
