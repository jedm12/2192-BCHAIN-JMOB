import React from "react";
import clean from '../assets/porch.jpg';
import car from '../assets/car.jpeg';
import bchain from '../assets/class.jpeg';
import './TodoList.css'
console.log(clean);
console.log(car);
console.log(bchain);
class ToDoList extends React.Component{
    render () {
        return (
        <div>
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="card movie_card">
                    <img class="card-img-top task" src={clean} alt="porch" />
                    <div class="card-body d-flex flex-column align-items-center justify-content-between">
                        <h5 class="card-title todos">Captain Marvel</h5>
                        <p class="date">Task by: Quinny Lacsina</p>
                    </div>
                    </div>
                    <div class="card movie_card">
                    <img class="card-img-top task" src={car} alt="clean" />
                    <div class="card-body d-flex flex-column align-items-center justify-content-between">
                        <h5 class="card-title todos">Up</h5>
                        <p class="todo">Task by: Mark Laus</p>
                    </div>
                    </div>
                    <div class="card movie_card">
                    <img class="card-img-top task" src={bchain} alt="class" />
                    <div class="card-body d-flex flex-column align-items-center justify-content-between">
                        <h5 class="card-title todos">Attend BCHAIN class</h5>
                        <p class="date">Task by: Jed Bartolome</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        

        
        );
    }
}

export default ToDoList;