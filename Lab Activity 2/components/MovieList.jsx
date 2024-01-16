import React from "react";
import captain from '../assets/captain.jpg'
import up from '../assets/up.jpeg'
import inside from '../assets/inside.jpeg'
import './MovieList.css'


console.log(captain);
console.log(up);
console.log(inside);

class MovieList extends React.Component{
    render () {
        return (
        <div>
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="card movie_card">
                    <img class="card-img-top" src={captain} alt="Captain" />
                    <div class="card-body d-flex flex-column align-items-center justify-content-between">
                        <h5 class="card-title movies">Captain Marvel</h5>
                        <p class="date">2019</p>
                    </div>
                    </div>
                    <div class="card movie_card">
                    <img class="card-img-top" src={up} alt="Up" />
                    <div class="card-body d-flex flex-column align-items-center justify-content-between">
                        <h5 class="card-title movies">Up</h5>
                        <p class="date">2009</p>
                    </div>
                    </div>
                    <div class="card movie_card">
                    <img class="card-img-top" src={inside} alt="Inside" />
                    <div class="card-body d-flex flex-column align-items-center justify-content-between">
                        <h5 class="card-title movies">Inside Out</h5>
                        <p class="date">2015</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
        );
    }
}

export default MovieList;