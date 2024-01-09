//Bartolome Jed Miguel O.
//WD-401
import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import ParentComponent from './components/ParentComponent'


function App() {

  return (
    <>
      <div>
        { <Hello /> }
        { <Welcome /> }
      </div>
      <div>
        <h1>React Props Example</h1>
        <ParentComponent />
      </div>
    </>
  )
}

export default App
