/* Bartolome, Jed Miguel O. / WD-401 */

import React from "react";
import './conDemo.css'

//comparing function
function Rainy(){
    return (
        <h1> Bring your Umbrella!</h1>
    );
}

function Sunny(){
    return(
        <h1> Bring Your sunglasses!</h1>
    );
}

function RainOrShine(props){
    const isRainy = props.isRainy;
    if (isRainy){
        return(
            <Rainy />
        );
    }
    return (<Sunny />
    );
}

export default function App(){
    return(
        <div>
            <RainOrShine isRainy={false} />
        </div>
    );
}