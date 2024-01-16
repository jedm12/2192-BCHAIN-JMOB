//Bartolome Jed Miguel O.
//WD-401
import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import ParentComponent from './components/ParentComponent'
import ToDoList from './components/ToDoList'
import BookList from './components/BookList'
import MovieList from './components/MovieList'
import CondiDemo1 from './components/Conditional-Demo-1'
import CondiDemo2 from './components/Conditional-Demo-2'
import CondiDemo3 from './components/Conditional-Demo-3'
import CondiDemo4 from './components/Conditional-Demo-4'
function App() {

  return (
    <>
      {/* <div>
        { <Hello /> }
        { <Welcome /> }
      </div>
      <div>
        <h1>React Props Example</h1>
        <ParentComponent />
      </div> */
      <div>
        { <ToDoList />}
        { <BookList />}
        { <MovieList />}
         {<CondiDemo1 />} 
        {<CondiDemo2/>} 
         {<CondiDemo3 />} 
          {<CondiDemo4/>} 
      </div>
      

    
      
      
      }
    </>
  )
}

export default App
