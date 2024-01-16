import React from "react";
import divergent from '../assets/divergent.jpg';
import insurgent from '../assets/insurgent.jpeg';
import allegiant from '../assets/allegiant.jpg';
import './BookList.css'

console.log(divergent);
console.log(insurgent);
console.log(allegiant);

class BookList extends React.Component{
    render () {
        return (
        <div>
            <body>
          <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="card movie_card">
                    <img class="card-img-top book" src={divergent} alt="Divergent" />
                    <div class="card-body d-flex flex-column align-items-center justify-content-between">
                        <h5 class="card-title books">Divergent</h5>
                        <p class="author">Clean Porch</p>
                    </div>
                    </div>
                    <div class="card movie_card">
                    <img class="card-img-top book" src={insurgent} alt="Insurgent" />
                    <div class="card-body d-flex flex-column align-items-center justify-content-between">
                        <h5 class="card-title books">Car Wash</h5>
                        <p class="author" >Veronica Roth</p>
                    </div>                    
                    </div>
                    <div class="card movie_card">
                    <img class="card-img-top book" src={allegiant} alt="Allegiant" />
                    <div class="card-body d-flex flex-column align-items-center justify-content-between">
                        <h5 class="card-title todos">attend BCHAIN class</h5>
                        <p class="author">Veronica Roth</p>
                    </div>
                    </div>
            </div>
            </div>
            </body>
        </div>
        );
    }
}

export default BookList;