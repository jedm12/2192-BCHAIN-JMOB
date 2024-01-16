/* Bartolome, Jed Miguel O. / WD-401 */

import React from "react";
import './conDemo.css'

//comparing function
function Rainy(){
    return (
        <h1> Bring your Umbrella!</h1>
    );
}

//function with an arrow function
function RainOrShine(props){
    const isRainy = props.isRainy; 
    if(isRainy){
        return (
            <Rainy />
        );
    }
    return(
    <h1> No rain today!</h1>)
}

export default function App(){
    return(
        <div>
            <RainOrShine
                isRainy={true} />
        </div>
    );
}