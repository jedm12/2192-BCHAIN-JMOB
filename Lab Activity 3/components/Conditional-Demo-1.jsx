/* Bartolome, Jed Miguel O. / WD-401 */

import React from "react";
import './conDemo.css'

//comparing function
function Greeting(){
    return (
        <h1> Hello! I am standard function.</h1>
    );
}

const ArrowGreeting = () =>{
   <h1> Hello! I am an arrow function.</h1>
}

//function with an arrow function
function ShinyButton(){
    const handleClick = () => {
        alert ("You Clicked me!");
    }
    return(
        <button className="buttonColor" onClick={handleClick}>Click This Button!</button>
    )
}

export default ShinyButton;