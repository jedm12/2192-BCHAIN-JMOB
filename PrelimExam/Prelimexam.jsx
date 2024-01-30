import React from "react";
import './PrelimExam.css'

function Items(){
    return (
        <div>
            <h1> My Strawhat</h1>
            <h1> Gum gum Fruit</h1>
            <h1> The Red Vest</h1>
        </div>
    )
}

function OnHandList(){
    return (
        <div>
            <h1 className="true"> My Strawhat</h1>
            <h1 className="true"> Gum gum Fruit</h1>
            <h1 className="false"> The Red Vest</h1>
        </div>
    )
}

function CheckListItems(props){
    const isOnhand = props.isOnhand;
    if (isOnhand){
        return(
            <OnHandList />
        );
    }
    return (<Items/>
    );
}

export default function Prelimexam(){
    return(
        <div>
            <CheckListItems isOnhand={false} />
        </div>
    );
}