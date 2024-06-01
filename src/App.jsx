import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from "./Json"
import Card from './Card'

function App() {

  return (
    <main>
        {Data.map((ele,idx)=>{
            return <Card ele={ele} />
        })}
    </main>
  )
}

export default App
